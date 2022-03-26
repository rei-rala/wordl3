import React from "react";
import {
  ILetterComponentProps,
  StyleByCoincidence,
} from "types";
import THEME from "styles";

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
  letterIndex,
  coincidenceState = "EMPTY",
  isLastGuess = false,
  isGuessing = false,
  isLastLetter = false,
}) => {
  return (
    <div className={isGuessing ? "GUESS" : coincidenceState}>
      <span>{letter === " " ? "\u200C" : letter}</span>
      <style jsx>{`
        div {
          flex: 1;
          display: grid;
          place-items: center;

          height: 100%;
          border: 2px inset ${THEME.COLORS.BORDER};
          border-radius: 0.15rem;

          color: ${cStyle.color.FULL};
          background: ${cStyle.backgroundColor.EMPTY};
        }

        div span {
          display: grid;
          place-items: center;
          transition: transform ${isLastGuess ? THEME.ANIMATIONS.DURATION : ""};
          transition-delay: ${isLastGuess
            ? `calc(${THEME.ANIMATIONS.DURATION} * ${letterIndex} / 3)`
            : ""};
        }

        .GUESS {
          color: ${cStyle.color.EMPTY};
          animation: ${isLastLetter ? THEME.ANIMATIONS.LETTER_POP : ""};
        }

        .NONE,
        .PARTIAL,
        .FULL {
          transform: rotateX(-180deg);
          background: ${cStyle.backgroundColor[coincidenceState] ??
          cStyle.backgroundColor.EMPTY};
          transition: ${isLastGuess
            ? `transform ${THEME.ANIMATIONS.DURATION}, background ${THEME.ANIMATIONS.DURATION} cubic-bezier(1,-2,0,3), color ${THEME.ANIMATIONS.DURATION} cubic-bezier(1,-2,0,3)`
            : ""};
          transition-delay: ${isLastGuess
            ? `calc(${THEME.ANIMATIONS.DURATION} * ${letterIndex} / 3)`
            : ""};
        }

        :is(.NONE, .PARTIAL, .FULL) > span {
          transform: rotateX(-180deg);
        }

        @media screen and (min-height: 476px) {
          div {
            max-height: ${THEME.SIZES.LETTER_SQUARE};
            max-width: ${THEME.SIZES.LETTER_SQUARE};
          }
        }

        @media screen and (min-height: 700px) and (min-width: 500px) {
          div {
            aspect-ratio: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Letter;
