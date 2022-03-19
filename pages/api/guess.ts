// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from "next";

import { DICTIONARY, DICT_LENGTH } from "../../resources/dictionary";
import { getCoincidences, getRandomInt, strToObjParser, timeStampToDate } from "../../utils";
import { CoincidenceType, IGameApiResponse, Status } from "../../types";

const MAX_TRIES = process.env.MAX_TRIES && !isNaN(+process.env.MAX_TRIES) ? parseInt(process.env.MAX_TRIES) : 6
//const UPDATE_INTERVAL_DAYS_TOMS = process.env.UPDATE_INTERVAL_DAYS_TOMS && !isNaN(+process.env.UPDATE_INTERVAL_DAYS_TOMS) ? parseInt(process.env.UPDATE_INTERVAL_DAYS_TOMS) * 24 * 60 * 60 * 1000 : 86400000 // 1 day
const EXPIRY_WORD_DAYS_TO_MS = process.env.EXPIRY_WORD_DAYS_TO_MS && !isNaN(+process.env.EXPIRY_WORD_DAYS_TO_MS) ? parseInt(process.env.EXPIRY_WORD_DAYS_TO_MS) * 60 * 60 * 1000 : 2592000000 // 1 month

type SavedWord = {
    word: string,
    timestamp: number,
    expires: number
}

const getWordsData = async () => {
    return fs.promises.readFile('resources/wordsData.json', 'utf-8')
        .then((data: string) => JSON.parse(data) as SavedWord[]) || []
}

const saveWordsData = async (wordsData: SavedWord[]) => {
    return fs.promises.writeFile('resources/wordsData.json', JSON.stringify(wordsData))
        .catch((err) => {
            console.log(err)
        })
}

const findTodayWord = async (db: any) => {
    const todayTimestamp = timeStampToDate(new Date().valueOf())!.NO_HOURS_TIMESTAMP;
    const wordsData = db

    const { word } = wordsData.find((word: SavedWord) => word.timestamp === todayTimestamp) || { word: undefined }

    return word
}



const retrieveWord: (newWord: string, db: any) => Promise<string | undefined> = async (newWord, db) => {
    const wordLower = newWord.toLowerCase();
    const todayTimestamp = timeStampToDate(new Date().valueOf())!.NO_HOURS_TIMESTAMP;
    const wordsData = await getWordsData();

    const { word, timestamp, expires } = wordsData.find((wordData: SavedWord) => wordData.word?.toLowerCase() === wordLower) ?? { word: undefined, timestamp: 0, expires: 0 };

    if (word === undefined || todayTimestamp > expires) {

        let newWordData: SavedWord = {
            word: newWord,
            timestamp: todayTimestamp,
            expires: todayTimestamp + EXPIRY_WORD_DAYS_TO_MS
        }
        await saveWordsData([...wordsData, newWordData])
        return newWord
    } else if (timestamp === todayTimestamp) {
        return newWord
    }
}

/* export const config = {
    api: {
        bodyParser: {
            sizeLimit: "1mb",
        },
    },
}; */


// TODO: Make the game update its word every N hours
export const getWordOfDay = async () => {
    const wordData = await getWordsData()
    let word = await findTodayWord(wordData)

    while (word === undefined) {
        let randomIndex = getRandomInt(DICT_LENGTH);
        word = await retrieveWord(DICTIONARY[randomIndex], wordData)
    }

    const wordIndex = DICTIONARY.findIndex((w: string) => w === word)
    const wordLength = word.length

    return {
        word,
        wordIndex,
        wordLength,
    }
}

const handler = async (req: NextApiRequest, res: NextApiResponse<IGameApiResponse | Status>) => {
    if (req.method === "POST") {
        const { word, wordLength, wordIndex } = await getWordOfDay()

        const nextDay = new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()).valueOf()
        const maxTries = MAX_TRIES

        const game = { word, maxTries, EXPIRY_WORD_DAYS_TO_MS }
        const userGame = { wordLength, maxTries, wordIndex, nextDay }

        const { data } = req.body;
        const { guesses, clientDate } = strToObjParser(data, {});

        const wordDateServer = timeStampToDate(new Date().valueOf())!.DATE
        const parsedGuesses: string[] = guesses?.slice(0, game.maxTries).map((c: string) => c.slice(0, game.word.length).toUpperCase().padEnd(game.word.length, '?'));

        const coincidences: CoincidenceType[] = wordDateServer !== clientDate ? [] : getCoincidences(parsedGuesses, game.word);

        let definition: { word: string, meaning?: string, win?: boolean } | undefined;
        let winCondition: boolean
        let loseCondition: boolean

        if (coincidences.length) {
            winCondition = parsedGuesses.some((guess: string) => guess === game.word);
            loseCondition = parsedGuesses.length >= game.maxTries;

            if (winCondition || loseCondition) {
                definition = {
                    win: winCondition,
                    word: game.word,
                }
            }
        }

        res.status(200).json({ status: "success", ...userGame, coincidences, guesses: coincidences.length ? parsedGuesses : [], definition, wordDate: wordDateServer });
        return;
    }
    res.status(400).json({ status: "bad request" });
}

export default handler