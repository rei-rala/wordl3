// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { game, userGame } from "../../resources/gameConfig";

import { getCoincidences, strToObjParser, timeStampToDate } from "../../utils";
import { CoincidenceType, IGameApiResponse } from "../../types";

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "1mb",
        },
    },
};

const handler = (req: NextApiRequest, res: NextApiResponse<IGameApiResponse>) => {
    if (req.method === "POST") {
        const { data } = req.body;
        const { guesses, wordDate } = strToObjParser(data, {});

        const wordDateServer = timeStampToDate(new Date().valueOf()).DATE
        const parsedGuesses: string[] = guesses?.slice(0, game.maxTries).map((c: string) => c.slice(0, game.word.length).toUpperCase().padEnd(game.word.length, '?'));

        const coincidences: CoincidenceType[] = wordDateServer !== wordDate ? [] : getCoincidences(parsedGuesses, game.word);

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