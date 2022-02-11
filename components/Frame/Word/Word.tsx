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
          flex: 1;
          
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0.1rem;

          height: 100%;
          width: 100%;
          transition: all 500ms;
        }

        @media screen and (min-width: 768px) {
          div {
            width: 70%;
          }
        }

        @media screen and (min-height: 476px){
          div {
            width: 95%;
          }
        }
      `}</style>
    </div>
  );
}


export default Word