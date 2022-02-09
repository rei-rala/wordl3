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
          justify-content: center;
        }
      `}</style>
    </div>
  );
}


export default Word