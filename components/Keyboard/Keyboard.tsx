import React from "react";
import { KEYBOARD_ROWS } from "../../resources";
import THEME from "../../styles";
import { IKeyboardProps } from "../../types";
import KeyboardKey from "./KeyboardKey/KeyboardKey";

const Keyboard: React.FC<IKeyboardProps> = ({ updateGuess }) => {
  return (
    <section className="wtf">
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
          justify-content: space-evenly;

          width: calc(100% - 3rem);
          height: 40vh;

          max-width: ${THEME.SIZES.GLOBAL_MAX_WIDTH};
          height: ${THEME.SIZES.KEYBOARD_HEIGHT_LANDSCAPE};
          padding-bottom: 1rem;

          transition: all 1s;
          z-index: 10;
        }

        section > div {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-evenly;

          height: 30%;
        }

        @media screen and (min-width: 550px) {
          section {
            width: 80%;
          }
        }

        @media screen and (min-height: 476px) {
          section {
            height: ${THEME.SIZES.KEYBOARD_HEIGHT};
          }
        }
      `}</style>
    </section>
  );
};

export default Keyboard;
