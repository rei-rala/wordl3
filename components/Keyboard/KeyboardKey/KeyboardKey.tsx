import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

import THEME from "../../../styles";

interface IKeyboardProps {
  keyValue: string;
  updateGuess: (arg0: string) => void;
}

const KeyboardKey: React.FC<IKeyboardProps> = ({
  keyValue,
  updateGuess,
}) => {
  const isEnter = keyValue.toUpperCase() === "ENTER";
  const isBackspace = keyValue.toUpperCase() === "BACKSPACE";
  const isSpecial = isEnter || isBackspace;

  return (
    <button onClick={() => updateGuess(keyValue)}>
      <span>
        {isSpecial ? (<FontAwesomeIcon icon={isEnter ? faPaperPlane : faDeleteLeft} />
        ) : (
          keyValue
        )}</span>

      <style jsx>{`
        button {
          display: grid;
          place-items: center;

          border: 1px inset ${THEME.COLORS.THEME_SECONDARY};
          background: ${THEME.COLORS.THEME_TERTIARY};
          border-radius: 0.5rem;

          flex: ${isSpecial ? "1.5" : "1"};

          font-weight: bold;
          color: ${THEME.COLORS.FONT};
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
          width: 75%;
          height: 75%;
        }

        @media screen and (min-width: 550px) {
          button span {
            width: 50%;
          }
        }

      `}</style>
    </button>
  );
};

export default KeyboardKey;
