import axios from "axios";
import { IGameApiResponse } from "types";
import { strToObjParser } from "utils";

export const postGuess: (newGuesses: string | string[], clientDate: string) => Promise<IGameApiResponse> = async (newGuesses, clientDate) => {
    const guesses: [] = typeof newGuesses === "string" ? strToObjParser(newGuesses, []) : newGuesses;

    const { data } = await axios.post(`/api/guess`, {
        data: JSON.stringify({ guesses, clientDate })
    })
    return data
}