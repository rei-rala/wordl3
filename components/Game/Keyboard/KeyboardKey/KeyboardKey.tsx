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
        }

        button:hover {
          background: transparent;
          color: ${isBackspace
          ? THEME.COLORS.ALERT
          : isEnter
            ? THEME.COLORS.SUCCESS
            : THEME.COLORS.SKY};
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
          height: 100%;
          width: ${isSpecial ? "55%" : "fit-content"};
          overflow: hidden;
        }

        @media screen and (min-height: 476px){
          button {
            font-size: 2.5vh;
            width: 95%;
          }
        }
      `}</style>
    </button>
  );
};

export default KeyboardKey;
