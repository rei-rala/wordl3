import React from "react";
import { IFrameComponentProps } from "../../types";
import Word from "./Word/Word";
import THEME from "../../styles";


const Frame: React.FC<IFrameComponentProps> = ({ maxTries, wordLength, guesses, currentGuess, coincidences }) => {


  return (
    <section>
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
        section {
          display: flex;
          flex-direction: column;
          
          width: 100vw;
          height: 100%;
          min-height: 100vh;
          padding-top: 0.75rem;
          
          background-color: ${THEME.COLORS.THEME};
          color: ${THEME.COLORS.FONT};
          padding: calc(${THEME.SIZES.NAVBAR_HEIGHT} + 0.35rem) ;
        }
      `}</style>
    </section>
  );
}

export default Frame;