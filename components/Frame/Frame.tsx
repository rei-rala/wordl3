import React from "react";
import { IFrameComponentProps } from "../../types";
import Word from "./Word/Word";
import THEME from "../../styles";


const Frame: React.FC<IFrameComponentProps> = ({ maxTries, wordLength, guesses, currentGuess, coincidences }) => {


  return (
    <div>
      {
        maxTries > 0 &&
        Array(maxTries)
          .fill('?')
          .map((_, wordIndex) => <Word
            isCurrentGuess={wordIndex === coincidences.length}
            coincidences={coincidences[wordIndex]}
            word={
              guesses[wordIndex]
                ? guesses[wordIndex]
                : guesses.length >= wordIndex
                  ? currentGuess.padEnd(wordLength)
                  : ''.padEnd(wordLength)
            }
            currentGuessIndex={currentGuess.length - 1}
            key={`w${wordIndex}`}
            wordIndex={wordIndex}
          />)
      }
      <style jsx>{`
        div {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          background-color: ${THEME.COLORS.THEME};
          color: ${THEME.COLORS.FONT};
        }
      `}</style>
    </div>
  );
}

export default Frame;