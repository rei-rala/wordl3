// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { game, userGame } from "../../resources";

import { getCoincidences, strToObjParser } from "../../utils";
import { API_CONFIG } from "../../resources";

import { CoincidenceType, IGameApiResponse } from "../../types";

export const config = API_CONFIG

const handler = (req: NextApiRequest, res: NextApiResponse<IGameApiResponse>) => {
  if (req.method === "POST") {
    const { data } = req.body;

    const parsedGuesses: string[] = strToObjParser(data, []).slice(0, game.maxTries).map((c: string) => c.slice(0, game.word.length).toUpperCase().padEnd(game.word.length, '?'));
    const coincidences: CoincidenceType[] = getCoincidences(parsedGuesses, game.word);
    let definition: { meaning: string, word: string, win?: boolean } | undefined;

    const winCondition = parsedGuesses.some((guess: string) => guess === game.word);
    const loseCondition = parsedGuesses.length >= game.maxTries;

    if (winCondition || loseCondition) {
      definition = {
        win: winCondition,
        word: game.word,
        meaning: game.meaning,
      }
    }

    res.status(200).json({ status: "success", ...userGame, coincidences, guesses: parsedGuesses, definition });
    return;
  }
  res.status(400).json({ status: "bad request" });
}

export default handler