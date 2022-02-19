import React from "react";
import { ILetterComponentProps, StyleByCoincidence } from "../../../../../types";
import THEME from "../../../../../styles";

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
    <div>
      <span>{letter === " " ? "\u200C" : letter}</span>
      <style jsx>{`
        div {
          flex: 1;
          height: 100%;

          color: ${isGuessing || letter === " "
          ? cStyle.color.EMPTY
          : cStyle.color[coincidenceState] ?? cStyle.backgroundColor.EMPTY
        };

          background-color: ${isGuessing || letter === " "
          ? cStyle.backgroundColor.EMPTY
          : cStyle.backgroundColor[coincidenceState] ??
          cStyle.backgroundColor.EMPTY
        };
          border: 2px inset ${THEME.COLORS.BORDER};
          border-radius: 0.15rem; 
          
          ${isLastGuess
          ? `animation: ${THEME.ANIMATIONS.FLIP}; animation-delay: calc(${THEME.ANIMATIONS.DURATION} * ${letterIndex} / 3);`
          : isLastLetter ? `animation: ${THEME.ANIMATIONS.LETTER_POP};` : ''}
        }
        
        div span {
          display: grid;
          place-items: center;
          
          height: 100%;
          width: 100%;
          ${isLastGuess
          ? `animation: ${THEME.ANIMATIONS.FLIP}; animation-delay: calc(${THEME.ANIMATIONS.DURATION} * ${letterIndex} / 3);`
          : isLastLetter ? `animation: ${THEME.ANIMATIONS.LETTER_POP};` : ''}
        }

        @media screen and (min-height: 476px) {
          div {
            max-height: ${THEME.SIZES.LETTER_SQUARE};
            max-width:${THEME.SIZES.LETTER_SQUARE};
          }
        }
      `}</style>
    </div>
  );
};

export default Letter;
