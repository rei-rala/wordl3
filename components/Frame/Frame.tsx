import React from "react";
import { IFrameComponentProps } from "../../types";
import Word from "./Word/Word";
import THEME from "../../styles";


const Frame: React.FC<IFrameComponentProps> = ({ maxTries, wordLength, guesses, currentGuess, coincidences }) => {


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
          justify-content: space-around;
          align-items: center;

          font-size: 2rem;
          
          height: ${THEME.SIZES.FRAME_HEIGHT};
          width: 100%;
          max-width: ${THEME.SIZES.GLOBAL_MAX_WIDTH};
          background-color: ${THEME.COLORS.THEME};
        }
        
        @media screen and (max-width: 550px) {
          main {
            width: 100%;
          }
        }
        
      `}</style>
    </main>
  );
}

export default Frame;