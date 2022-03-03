import DICTIONARY from "./dictionary";
import { randomArrayItemIndex } from "../utils";

export const KEYBOARD_ROWS = [
  "qwertyuiop".toUpperCase().split(''),
  "asdfghjklñ".toUpperCase().split(''),
  ["ENTER", ..."zxcvbnm".toUpperCase().split(''), "BACKSPACE"],
]

const replaceAccents = (word: string) => {
  const accentsReplaceUpperCase = {
    'Á': 'A',
    'É': 'E',
    'Í': 'I',
    'Ó': 'O',
    'Ú': 'U',
  }

  let tempWord = word

  for (const [key, value] of Object.entries(accentsReplaceUpperCase)) {
    tempWord.replace(new RegExp(key, 'g'), value)
  }

  return tempWord
}


const MAX_TRIES = process.env.MAX_TRIES && !isNaN(+process.env.MAX_TRIES) ? parseInt(process.env.MAX_TRIES) : 6

export const API_CONFIG = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};


const wordIndex = randomArrayItemIndex(DICTIONARY);
const selected = { word: DICTIONARY[wordIndex] };

export const game = { word: selected.word, maxTries: MAX_TRIES };
export const userGame = { wordLength: game.word.length, maxTries: game.maxTries, wordIndex }

export const findWordInDictionary = (guessWord: string) => {
  const foundWord = DICTIONARY.find(word => word === guessWord)
  const word = foundWord ? replaceAccents(guessWord) : undefined

  return word
}