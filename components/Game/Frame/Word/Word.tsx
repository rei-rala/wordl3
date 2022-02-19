import React from "react";
import Letter from "./Letter/Letter";
import { IWordComponentProps, States } from "../../../../types";
import THEME from "../../../../styles";

const Word: React.FC<IWordComponentProps> = ({ maxTries, word, currentGuessIndex, isLastGuess, isCurrentGuess, wordIndex, coincidences = {} }) => {
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
          align-items: center;
          gap: 0.5vh;
          
          width: 65%;
          height: calc((${THEME.SIZES.FRAME_HEIGHT_LANDSCAPE} / ${maxTries}) * 1.35);
          font-size: calc((${THEME.SIZES.FRAME_HEIGHT_LANDSCAPE} / ${maxTries}) * 8);
        }

        @media screen and (min-height: 476px){
          div {
            font-size: 3.5vh; 
            width: 95%;
          }
        }
        @media screen and (min-width: 768px) {
          div {
            width: 70%;
          }
        }
        @media screen and (min-height: 550px) and (orientation: landscape) {
          div {
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
}


export default Word