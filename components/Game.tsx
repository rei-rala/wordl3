import React from "react";
import { IGameComponentProps } from "../types";
import Word from "./Word";

const Game: React.FC<IGameComponentProps> = ({ wordLength, coincidences, maxTries, guesses, currentGuess }) => {

  return (
    <div>
      {
        Array(maxTries)
          .fill('?')
          .map((_, idx) => <Word
            isGuessing={idx + 1 > coincidences.length}
            coincidences={coincidences[idx]}
            word={
              guesses[idx]
                ? guesses[idx]
                : guesses.length >= idx
                  ? currentGuess.padEnd(wordLength)
                  : ''.padEnd(wordLength)}

            key={`w${idx}`}
            wordIdx={idx}
          />)
      }
    </div>
  );
}

export default Game;