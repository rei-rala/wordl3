import axios from "axios";
import { strToObjParser, timeStampToDate } from "../utils";

export const postGuess: (newGuesses: string | string[], clientDate: Date) => Promise<any> = async (newGuesses, clientDate) => {
    const guesses = typeof newGuesses === "string" ? strToObjParser(newGuesses, []) : newGuesses;
    const wordDate = timeStampToDate(clientDate.valueOf())?.DATE || timeStampToDate(new Date(localStorage.getItem("wordDate") || '').valueOf())?.DATE || '';

    const { data } = await axios.post(`/api/guess`, {
        data: JSON.stringify({ guesses, wordDate })
    })
    return data
}