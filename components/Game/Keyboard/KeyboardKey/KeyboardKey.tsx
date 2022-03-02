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
    <button onClick={handleClick} aria-label={`Ingresar tecla ${isEnter || isBackspace ? 'especial' : ''} ${keyValue}`}>
      <span>
        {isEnter || isBackspace ? (
          <FontAwesomeIcon icon={isEnter ? faPaperPlane : faDeleteLeft} />
        ) : (
          keyValue
        )}
      </span>

      <style jsx>{`
        button {
          flex: ${isEnter || isBackspace ? "1.15" : "1"};

          border: 2px outset ${THEME.COLORS.BORDER};
          background: ${bkgColor};
          border-radius: 0.35rem;

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
          border: 2px solid ${isBackspace
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
