import React from "react";
import Letter from "./Letter";
import { IWordComponentProps, States } from "../types";


const Word: React.FC<IWordComponentProps> = ({ word, isGuessing, wordIdx, coincidences = {} }) => {

  return (
    <div>
      {
        word
          .split('')
          .map((l, i) => <Letter
            isGuessing={isGuessing}
            key={`w${wordIdx}-l${i}`}
            letter={l}
            coincidenceState={coincidences[i]?.coincidence || States.EMPTY}
          />)
      }
      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}


export default Word