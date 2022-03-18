import { States } from "../types"
import DICTIONARY from "../resources/constants"

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

export const strToObjParser: (jsonString: string | null, alternative: any) => typeof alternative = (jsonString, alternative = {}) => {
    let lsItem: typeof alternative

    try {
        lsItem = JSON.parse(jsonString!) 

        if (typeof lsItem !== typeof alternative) {
            throw 'Types does not match'
        }
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

export const findWordInDictionary = (guessWord: string) => {
    const foundWord = DICTIONARY.find(word => word === guessWord)
    const word = foundWord ? replaceAccents(guessWord) : undefined

    return word
}

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

export const timeStampToDate = (timestamp: number) => {
    const date = new Date(timestamp);

    if (date.valueOf() === 0 || isNaN(date.valueOf())) {
        return
    }

    const monthNumber = date.getMonth() + 1;
    const dayNumber = date.getDate();
    const hourNumber = date.getHours();
    const minuteNumber = date.getMinutes();
    const secondNumber = date.getSeconds();

    const YEAR = date.getFullYear().toString();
    const YEAR_SHORT = YEAR.slice(2);
    const MONTH = ('0' + monthNumber).slice(-2);
    const DAY = ('0' + dayNumber).slice(-2);
    const HOUR = ('0' + hourNumber).slice(-2);
    const MINUTES = ('0' + minuteNumber).slice(-2);
    const SECONDS = ('0' + secondNumber).slice(-2);

    return {
        FULL: `${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTES}:${SECONDS}`,
        DATE: `${YEAR}-${MONTH}-${DAY}`,
        TIME: `${HOUR}:${MINUTES}:${SECONDS}`,
        YEAR,
        YEAR_SHORT,
        MONTH,
        DAY,
        HOUR,
        MINUTES,
        SECONDS,
    }
}
