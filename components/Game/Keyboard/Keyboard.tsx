import React, { useContext, useMemo } from "react";
import { GameConditions } from "contexts";
import { KeyboardKey } from "components";
import { KEYBOARD_ROWS } from "utils";
import {
  CoincidenceStateType,
  CoincidenceType,
  IKeyboardProps,
  States,
} from "types";
import THEME from "styles";

type CoincidenceVariantType = { [key: string]: CoincidenceStateType };

const updateCoincidences = (lastCoincidences: CoincidenceType[]) => {
  const coincidenceValues = {
    [States.FULL]: 3,
    [States.PARTIAL]: 2,
    [States.NONE]: 1,
    [States.EMPTY]: 0,
  };

  let temp: CoincidenceVariantType = {};

  lastCoincidences.forEach((coincidence) => {
    for (let letterIndex in coincidence) {
      let c = coincidence[letterIndex];

      if (c.letter in temp) {
        temp[c.letter] =
          coincidenceValues[temp[c.letter]] < coincidenceValues[c.coincidence]
            ? c.coincidence
            : temp[c.letter];
      } else {
        temp[c.letter] = c.coincidence;
      }
    }
  });
  return temp;
};

const Keyboard: React.FC<IKeyboardProps> = ({ updateGuess }) => {
  const { coincidences } = useContext(GameConditions);
  const bestCoincidences = useMemo(
    () => updateCoincidences(coincidences),
    [coincidences]
  );

  return (
    <section>
      {KEYBOARD_ROWS.map((keyRow, keyRowIndex) => (
        <div key={`keyRow-${keyRowIndex}`}>
          {keyRow.map((keyValue) => (
            <KeyboardKey
              key={`kb-${keyValue}`}
              keyValue={keyValue}
              updateGuess={updateGuess}
              bestCoincidence={bestCoincidences[keyValue] || "EMPTY"}
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
          z-index: 2;
        }

        section > div {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-evenly;

          height: 26%;
        }

        @media screen and (min-height: 476px) and (orientation: portrait) {
          section {
            margin-bottom: 0.5rem;
            width: calc(100% - 2rem);
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
