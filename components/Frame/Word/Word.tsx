import React from "react";
import Letter from "./Letter/Letter";
import { IWordComponentProps, States } from "../../../types";

const Word: React.FC<IWordComponentProps> = ({ word, currentGuessIndex, isLastGuess, isCurrentGuess, wordIndex, coincidences = {} }) => {
  return (
    <div>
      {
        word
          .split('')
          .map((l, letterIndex) => <Letter
            isLastGuess={isLastGuess}
            isGuessing={isCurrentGuess}
            key={`w${wordIndex}-l${letterIndex}`}
            letter={l}
            letterIndex={letterIndex}
            coincidenceState={coincidences[letterIndex]?.coincidence || States.EMPTY}
            isLastLetter={currentGuessIndex === letterIndex && isCurrentGuess}
          />)
      }
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 0.5rem;

          width: 80%;
          transition: width 1s;
        }

        @media screen and (min-width: 550px) {
          div {
            width: 75%;
          }
        }

        @media screen and (min-width: 768px) {
          div {
            width: 70%;
          }
        }
      `}</style>
    </div>
  );
}


export default Word