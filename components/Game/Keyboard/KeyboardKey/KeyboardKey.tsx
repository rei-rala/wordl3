import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

import THEME from "../../../../styles";
import { IKeyboardKeyProps } from "../../../../types";

const KeyboardKey: React.FC<IKeyboardKeyProps> = ({
  keyValue,
  updateGuess,
}) => {
  const isEnter = keyValue === "ENTER";
  const isBackspace = keyValue === "BACKSPACE";
  const isSpecial = isEnter || isBackspace;

  const handleClick = () => updateGuess(keyValue);

  return (
    <button onClick={handleClick}>
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

          border: 2px outset ${THEME.COLORS.THEME_SECONDARY};
          background: ${THEME.COLORS.THEME_TERTIARY};
          border-radius: 0.5rem;

          flex: ${isSpecial ? "1.15" : "1"};

          font-weight: bold;
          color: ${THEME.COLORS.FONT};
          font-size: 0.7em;
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
        @media (min-width: 481px) (orientation: portrait) {
          button {
            font-size: 2em;
          }
        }

        @media (min-width: 768px)  {
          button {
            font-size: 3em;
          }
        }
      `}</style>
    </button>
  );
};

export default KeyboardKey;
