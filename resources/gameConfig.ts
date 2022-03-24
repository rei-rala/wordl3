import { DICTIONARY } from "./dictionary";
const MAX_TRIES = process.env.MAX_TRIES && !isNaN(+process.env.MAX_TRIES) ? parseInt(process.env.MAX_TRIES) : 6
const UPDATE_INTERVAL_HOURS = process.env.UPDATE_INTERVAL_HOURS && !isNaN(+process.env.UPDATE_INTERVAL_HOURS) ? parseInt(process.env.UPDATE_INTERVAL_HOURS) : 24

// TODO: Make the game update its word every N hours
export const getWordOfDay = () => {
    const UPDATE_INVERVAL_MS = UPDATE_INTERVAL_HOURS * 1000 * 60 * 60

    const epochMs = new Date(2022, 0).valueOf()
    const now = Date.now()
    const wordIndex = Math.floor((now - epochMs) / UPDATE_INVERVAL_MS)
    const word = DICTIONARY[wordIndex % DICTIONARY.length]
    const nextDay = (wordIndex + 1) * UPDATE_INVERVAL_MS + epochMs

    return {
        word,
        wordIndex,
        nextDay
    }
}

const { word, wordIndex, nextDay } = getWordOfDay()

export const game = { word, maxTries: MAX_TRIES }
export const userGame = { wordLength: game.word.length, maxTries: game.maxTries, wordIndex, nextDay }