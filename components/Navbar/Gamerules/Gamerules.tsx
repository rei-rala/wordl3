import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import THEME from "../../../styles";


const Gamerules: React.FC = () => {
  // TODO: Display game rules
  const TEMPFUNCTION = () => { localStorage.removeItem('guesses')}
  
  return (
    <button onClick={TEMPFUNCTION}>
      <FontAwesomeIcon icon={faCircleQuestion} />

      <style jsx>{`
        button {
          display: grid;
          place-items: center;
          padding: 0;
          width: 1rem;
          height: 1rem;
          background-color: transparent;
          border: none;
          color: ${THEME.COLORS.FONT};
        }

        button:hover {
          transform: scale(1.1);
          color: ${THEME.COLORS.SKY};
        }
      `}</style>
    </button>
  );
};

export default Gamerules;
