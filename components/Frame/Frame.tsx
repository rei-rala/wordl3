import React from "react";
import { IFrameComponentProps } from "../../types";
import Word from "./Word/Word";
import THEME from "../../styles";

const Frame: React.FC<IFrameComponentProps> = ({
  maxTries,
  wordLength,
  guesses,
  currentGuess,
  coincidences,
}) => {
  return (
    <main>
      {
        maxTries > 0 &&
        Array(maxTries)
          .fill('?')
          .map((_, wordIndex) => <Word
            isCurrentGuess={wordIndex === coincidences.length}
            isLastGuess={wordIndex === coincidences.length - 1}
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
        main {
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-evenly;
          align-items: center;
          height: ${THEME.SIZES.FRAME_HEIGHT_LANDSCAPE};
          padding: 1rem 0;

          width: calc(100% - 3rem);

          max-width: ${THEME.SIZES.GLOBAL_MAX_WIDTH};
          background-color: ${THEME.COLORS.THEME};

          z-index: 1;
        }

        @media screen and (min-width: 476px) {
          main {
            width: calc(100% - 4rem);
          }
        }
      `}</style>
    </main>
  );
};

export default Frame;
