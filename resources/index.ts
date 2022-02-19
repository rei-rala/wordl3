import { DICTIONARY } from "./dictionary";
import { randomArrayItem } from "../utils";

export const KEYBOARD_ROWS = [
  "qwertyuiop".toUpperCase().split(''),
  "asdfghjklñ".toUpperCase().split(''),
  ["ENTER", ..."zxcvbnm".toUpperCase().split(''), "BACKSPACE"],
]

export const TEMP_DICTIONARY: { [key: string]: string } = {
  'PERRO': 'Perruno plural',
  'GATOS': 'Gatuno plural',
  'PATOS': 'Patuno plural',
  'PIÑAS': 'Piñano plural',
}

const WORDS = Object.keys(TEMP_DICTIONARY)

const MAX_TRIES = process.env.MAX_TRIES && !isNaN(+process.env.MAX_TRIES) ? parseInt(process.env.MAX_TRIES) : 6

export const API_CONFIG = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};


const randomWord = randomArrayItem(WORDS);
const selected = { word: randomWord ?? 'err=(', meaning: TEMP_DICTIONARY[randomWord] ?? 'err=(' };

export const game = { word: selected.word, meaning: selected.meaning, maxTries: MAX_TRIES };
export const userGame = { wordLength: game.word.length, maxTries: game.maxTries }

export const findWordInDictionary = (word: string) => {
  const meaning = TEMP_DICTIONARY[word]

  return meaning ? ({ word, meaning: meaning }) : undefined
}