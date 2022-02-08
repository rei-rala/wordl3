import { randomArrayItem } from "../utils";

export const DICTIONARY: { [key: string]: string } = {
  'PERRO': 'Perruno plural',
  'GATOS': 'Gatuno plural',
  'PATOS': 'Patuno plural',
}

const WORDS = Object.keys(DICTIONARY)

const MAX_TRIES = process.env.MAX_TRIES && !isNaN(+process.env.MAX_TRIES) ? parseInt(process.env.MAX_TRIES) : 6

export const API_CONFIG = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};


const randomWord = randomArrayItem(WORDS);
const selected = { word: randomWord ?? 'err=(', meaning: DICTIONARY[randomWord] ?? 'err=(' };

export const game = { word: selected.word, meaning: selected.meaning, maxTries: MAX_TRIES };
export const userGame = { wordLength: game.word.length, maxTries: game.maxTries }

console.table({ ...game, ...userGame })


export const findWordInDictionary = (word: string) => {
  const meaning = DICTIONARY[word]

  return meaning ? ({ word, meaning: meaning }) : undefined
}