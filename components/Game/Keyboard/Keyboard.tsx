import React from "react";
import { KEYBOARD_ROWS } from "../../../resources";
import THEME from "../../../styles";
import { IKeyboardProps } from "../../../types";
import KeyboardKey from "./KeyboardKey/KeyboardKey";

const Keyboard: React.FC<IKeyboardProps> = ({ updateGuess }) => {
  return (
    <section>
      {KEYBOARD_ROWS.map((keyRow, keyRowIndex) => (
        <div key={`keyRow-${keyRowIndex}`}>
          {keyRow.map((keyValue) => (
            <KeyboardKey
              key={`kb-${keyValue}`}
              keyValue={keyValue}
              updateGuess={updateGuess}
            />
          ))}
        </div>
      ))}

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 0.5vh;
          
          width: calc(100% - 4rem);
          max-width: ${THEME.SIZES.GLOBAL_MAX_WIDTH};
          margin-bottom: 0.5rem;
          height: 40vh;
          z-index: 10;
        }

        section > div {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-evenly;

          height: 25%;
        }

        @media screen and (min-height: 476px) {
          section {
            margin-bottom: 1rem;
          }
        }
        
        @media screen and (min-width: 768px) {
          section {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Keyboard;
