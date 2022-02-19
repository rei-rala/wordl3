import React from "react";
import { IFrameComponentProps } from "../../../types";
import Word from "./Word/Word";
import THEME from "../../../styles";

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
            maxTries={maxTries}
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
          justify-content: flex-start;
          align-items: center;
          gap: 0.5vh;

          height: ${THEME.SIZES.FRAME_HEIGHT_LANDSCAPE};
          padding: 1rem 0;

          width: calc(100% - 4rem);
          max-width: ${THEME.SIZES.GLOBAL_MAX_WIDTH};

          z-index: 1;

          font-weight: bold;
          font-family: 'Cousine', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        @media screen and (min-width: 768px) {
          main {
            width: 100%;
          }
        }

      `}</style>
    </main>
  );
};

export default Frame;