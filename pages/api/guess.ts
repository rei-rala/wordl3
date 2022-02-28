// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { game, userGame } from "../../resources";

import { getCoincidences, strToObjParser } from "../../utils";
import { API_CONFIG } from "../../resources";

import { CoincidenceType, IGameApiResponse, States } from "../../types";

export const config = API_CONFIG

const handler = (req: NextApiRequest, res: NextApiResponse<IGameApiResponse>) => {
  if (req.method === "POST") {
    const { data } = req.body;

    const parsedGuesses: string[] = strToObjParser(data, []).slice(0, game.maxTries).map((c: string) => c.slice(0, game.word.length).toUpperCase().padEnd(game.word.length, '?'));
    const coincidences: CoincidenceType[] = getCoincidences(parsedGuesses, game.word);
    const definition: { meaning: string, word: string, win?: boolean } | undefined = {
      word: game.word,
      meaning: game.meaning,
    }

    if (parsedGuesses.length > game.maxTries) {
      definition.win = false;
    } else {
      for (let coincidence of coincidences) {
        const fullWord = Object.values(coincidence).every((value) => value.coincidence === States.FULL)
        if (fullWord) {
          definition.win = true;
          break
        }
      }
    }

    res.status(200).json({ status: "success", ...game, ...userGame, coincidences, guesses: parsedGuesses, definition });
    return;
  }
  res.status(400).json({ status: "bad request" });
}

export default handler