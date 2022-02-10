import React from "react";
import { KEYBOARD_ROWS } from "../../resources";
import THEME from "../../styles";
import { Coincidence } from "../../types";
import KeyboardKey from "./KeyboardKey/KeyboardKey";

interface IKeyboardProps {
  coincidences: Coincidence[],
  updateGuess: (arg0: string) => void,
}

const Keyboard: React.FC<IKeyboardProps> = ({ updateGuess }) => {


  return <section className="wtf">
    {
      KEYBOARD_ROWS.map((keyRow, keyRowIndex) => (
        <div key={`keyRow-${keyRowIndex}`}>
          {
            keyRow.map(keyValue => (
              <KeyboardKey key={`kb-${keyValue}`} keyValue={keyValue} updateGuess={updateGuess} />
            ))
          }
        </ div>
      ))
    }

    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        width: 100%;
        height: ${THEME.SIZES.KEYBOARD_HEIGHT};
        max-width: ${THEME.SIZES.GLOBAL_MAX_WIDTH};
        padding: 0.5rem;

        transition: all 1s;
      }
      
      section > div {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;

        width: 100%;
      }

      @media screen and (min-width: 550px) {
        section {
          width: 80%;
          padding: 0.25rem;
        }
      }
    
      `}</style>
  </section>
}

export default Keyboard