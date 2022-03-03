import { States } from "../types"

export const strToObjParser = (localStorageItem: string | null, alternative: any = {}) => {
  let lsItem: any

  try {
    lsItem = JSON.parse(localStorageItem ?? JSON.stringify(alternative))
  } catch (error) {
    // Error @ parsing the string
    // console.log(error)
    lsItem = alternative
  }

  return lsItem
}

export const randomArrayItemIndex = (arr: any[]) => {
  return Math.floor(Math.random() * arr.length);
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

export const validateString = async (guess: string, length: number, regex: RegExp) => {
  let error: string | undefined;

  const lengthError = `Completar ${length} letras`;
  const invalidCharsError = `Solo se permiten letras`;

  error =
    guess.length !== length
      ? lengthError
      : regex.test(guess)
        ? invalidCharsError
        : undefined;

  return { error, guess };
};