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


const Letter: React.FC<ILetterComponentProps> = ({ letter, isLastLetter, coincidenceState }) => {
  return (
    <div>
      <span>{letter}</span>
      <style jsx>{`
        div {
          display: grid;
          place-items: center;
          border: 2px outset ${THEME.COLORS.BORDER};
          border-radius: 4px;
          width: ${THEME.SIZES.LETTER_SQUARE};
          height: ${THEME.SIZES.LETTER_SQUARE};
          font-size: ${THEME.SIZES.LETTER};
          margin: 0.3em 0.05em;

          background-color: ${cStyle.backgroundColor[coincidenceState] ?? cStyle.backgroundColor.EMPTY};
          color: ${cStyle.color[coincidenceState] ?? cStyle.color.EMPTY};
          ${isLastLetter && `animation: ${THEME.ANIMATIONS.LETTER_POP};`}

        }`}</style>
    </div >
  );
};

export default Letter;
