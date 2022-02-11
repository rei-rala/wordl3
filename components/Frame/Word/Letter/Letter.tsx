import React from "react";
import { ILetterComponentProps, StyleByCoincidence } from "../../../../types";
import THEME from "../../../../styles";

const cStyle: StyleByCoincidence = {
  backgroundColor: {
    FULL: THEME.COLORS.SUCCESS,
    PARTIAL: THEME.COLORS.WARN,
    NONE: THEME.COLORS.DISABLED,
    EMPTY: THEME.COLORS.THEME,
  },
  color: {
    FULL: THEME.COLORS.THEME,
    PARTIAL: THEME.COLORS.THEME,
    NONE: THEME.COLORS.THEME,
    EMPTY: THEME.COLORS.FONT,
  },
};

const Letter: React.FC<ILetterComponentProps> = ({
  letter,
  isLastGuess,
  letterIndex,
  isLastLetter,
  coincidenceState,
  isGuessing,
}) => {
  return (
    < div >
      <span>{letter === " " ? "\u200C" : letter}</span>
      <style jsx>{`
        div {
          color: ${isGuessing && letter !== ' ' ? cStyle.color.NONE : cStyle.color[coincidenceState] ?? cStyle.color.EMPTY};
          
          border: 3px outset ${THEME.COLORS.BORDER};
          border-radius: 0.5rem;
          background-color: ${isGuessing && letter !== ' ' ? cStyle.backgroundColor.NONE : cStyle.backgroundColor[coincidenceState] ?? cStyle.backgroundColor.EMPTY};
          
          height: 100%;
          flex: 1;
          
          ${isLastGuess
          ? `animation: ${THEME.ANIMATIONS.FLIP}; animation-delay: ${letterIndex * 125}ms;`
          : isLastLetter
            ? `animation: ${THEME.ANIMATIONS.LETTER_POP};`
            : ""}

        }
        
        div span {
          display: grid;
          place-items: center;
          transition: all ${THEME.ANIMATIONS.DURATION_MS_INT}ms;
          
          height: 100%;
          width: 100%;
        }

        @media screen and (min-height: 476px) {
          div span {
            font-size: 5vh;
          }
        }



      `}</style>
    </div >
  );
};

export default Letter;
