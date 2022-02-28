import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

import THEME from "../../../../styles";
import { IKeyboardKeyProps, CoincidenceStateType, States } from "../../../../types";

const getBkgColor = (state: CoincidenceStateType) => {
  return (
  state === States.EMPTY
  ? THEME.COLORS.THEME_TERTIARY
  : state === States.NONE
  ? THEME.COLORS.DISABLED
  : state === States.PARTIAL
  ? THEME.COLORS.WARN
  : THEME.COLORS.SUCCESS
  )}



const KeyboardKey: React.FC<IKeyboardKeyProps> = ({
  keyValue,
  updateGuess,
  bestCoincidence,
}) => {
  const isEnter = keyValue === "ENTER";
  const isBackspace = keyValue === "BACKSPACE";
  const bkgColor = getBkgColor(bestCoincidence);
  
  const handleClick = () => updateGuess(keyValue);
  
  return (
    <button onClick={handleClick}>
      <span>
        {isEnter || isBackspace ? (
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
          background: ${bkgColor};
          border-radius: 0.35rem;

          flex: ${isEnter || isBackspace ? "1.15" : "1"};

          font-weight: bold;
          color: ${
            bestCoincidence === "EMPTY"
          ? THEME.COLORS.FONT
          : THEME.COLORS.THEME
        };
        }

        button:hover {
          color: ${isBackspace
          ? THEME.COLORS.ALERT
          : isEnter
            ? THEME.COLORS.SUCCESS
            : bestCoincidence === "EMPTY"
            ? THEME.COLORS.SKY
            : THEME.COLORS.THEME
          };
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
          width: ${isEnter || isBackspace ? "55%" : "fit-content"};
          min-width: ${isEnter || isBackspace ? "2rem" : "1rem"};
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
