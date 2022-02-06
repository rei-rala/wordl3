// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { game, userGame } from "../../configs";

import { getCoincidences, strToObjParser } from "../../utils";
import { API_CONFIG } from "../../configs";

import { IGameApiResponse } from "../../types";

export const config = API_CONFIG

const handler = (req: NextApiRequest, res: NextApiResponse<IGameApiResponse>) => {
  if (req.method === "POST") {
    const { data } = req.body;

    const parsedGuesses = strToObjParser(data, []).map((c: string) => c.slice(0, game.word.length).toUpperCase().padEnd(game.word.length, '?'));
    const coincidences = getCoincidences(parsedGuesses, game.word);

    res.status(200).json({ ...game, ...userGame, coincidences, guesses: parsedGuesses, status: "success" });
    return;
  }
  res.status(400).json({ ...game, ...userGame, status: "bad request" });
}

export default handler