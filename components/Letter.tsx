import React from "react";
import { ILetterComponentProps } from "../types";
import { cStyle } from "../styles";

const Letter: React.FC<ILetterComponentProps> = ({ letter, coincidenceState }) => {
  const bkgColor = cStyle.bkgColor[coincidenceState] || cStyle.color.EMPTY;
  const color = cStyle.color[coincidenceState] || cStyle.color.EMPTY;

  return (
    <div>
      <span>{letter}</span>
      <style jsx>{`
        div {
          display: inline - block;
          border: 1px solid black;
          border-radius: 5px;
          width: 1.5em;
          height: 1.5em;
          text-align: center;

          margin: 0.3em 0.05em;

          background-color: ${bkgColor};
          color: ${color};
        }
      `}</style>
    </div>
  );
};

export default Letter;
