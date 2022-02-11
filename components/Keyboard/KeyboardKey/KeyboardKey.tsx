import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

import THEME from "../../../styles";
import { IKeyboardKeyProps } from "../../../types";

const KeyboardKey: React.FC<IKeyboardKeyProps> = ({
  keyValue,
  updateGuess,
}) => {
  const isEnter = keyValue.toUpperCase() === "ENTER";
  const isBackspace = keyValue.toUpperCase() === "BACKSPACE";
  const isSpecial = isEnter || isBackspace;

  return (
    <button onClick={() => updateGuess(keyValue)}>
      <span>
        {isSpecial ? (
          <FontAwesomeIcon icon={isEnter ? faPaperPlane : faDeleteLeft} />
        ) : (
          keyValue
        )}
      </span>

      <style jsx>{`
        button {
          display: grid;
          place-items: center;

          border: 1px outset ${THEME.COLORS.THEME_SECONDARY};
          background: ${THEME.COLORS.THEME_TERTIARY};
          border-radius: 0.5rem;

          flex: ${isSpecial ? "1.5" : "1"};

          font-weight: bold;
          color: ${THEME.COLORS.FONT};
          font-size: 1em;
        }
        button:hover {
          color: ${isBackspace
          ? THEME.COLORS.ALERT
          : isEnter
            ? THEME.COLORS.SUCCESS
            : THEME.COLORS.SKY};
          background: transparent;
          border-color: ${isBackspace
          ? THEME.COLORS.ALERT
          : isEnter
            ? THEME.COLORS.SUCCESS
            : THEME.COLORS.SKY};
        }
        button:active {
          transform: scale(0.95);
        }

        button span {
          display: grid;
          place-items: center;
          width: ${isSpecial ? "50%" : "fit-content"};
          height: 50%;
        }
        @media screen and (min-width: 481px) (orientation: portrait) {
          button {
            font-size: 1.3em;
          }
        }

        @media screen and (min-width: 768px) and (orientation: portrait) {
          button {
            font-size: 1.5em;
          }
        }
      `}</style>
    </button>
  );
};

export default KeyboardKey;
