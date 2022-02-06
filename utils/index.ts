import { States } from "../types"

export const strToObjParser = (localStorageItem: string | null | undefined, alternative: any = {}) => {
  let lsItem: any

  try {
    lsItem = JSON.parse(localStorageItem ?? JSON.stringify(alternative))
  } catch (error) {
    console.log('-------------------------------\nError parsing localstorage item\n-------------------------------')
    console.log(error)
    console.log('-------------------------------\nError parsing localstorage item\n-------------------------------')

    lsItem = alternative
  }

  return lsItem
}

export const randomArrayItem = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const getCoincidences = (strArray: string[] = [], target: string) => {
  return strArray.map((word) => {
    const trimmed = word.toUpperCase().padEnd(target.length, '?').split('')
    // Trimming the word to avoid extra checks
    trimmed.length = target.length

    const coincidences: any = {}

    trimmed.forEach((letter, index) => (
      coincidences[index] = {
        letter,
        coincidence:
          target.split("")[index] === letter
            ? States.FULL
            : target.includes(letter)
              ? States.PARTIAL
              : States.NONE
      }
    ));

    return coincidences;
  });
};