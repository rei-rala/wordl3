import React from "react";
import Letter from "./Letter/Letter";
import { IWordComponentProps, States } from "../../../types";


const Word: React.FC<IWordComponentProps> = ({ word, currentGuessIndex, isCurrentGuess, wordIndex, coincidences = {} }) => {
  return (
    <div>
      {
        word
          .split('')
          .map((l, letterIndex) => <Letter
            isGuessing={isCurrentGuess}
            key={`w${wordIndex}-l${letterIndex}`}
            letter={l}
            coincidenceState={coincidences[letterIndex]?.coincidence || States.EMPTY}
            isLastLetter={currentGuessIndex === letterIndex && isCurrentGuess}
          />)
      }
      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;

          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
}


export default Word