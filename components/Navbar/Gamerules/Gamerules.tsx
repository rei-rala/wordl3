import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import THEME from "../../../styles";


const Gamerules: React.FC = () => {
  // TODO: Display game rules
  const TEMPFUNCTION = () => { localStorage.removeItem('guesses')}
  
  return (
    <button onClick={TEMPFUNCTION} aria-label={'Temporalmente resetear intentos. Posteriormente mostrara reglas.'}>
      <FontAwesomeIcon icon={faCircleQuestion} />

      <style jsx>{`
        button {
          width: 1rem;
          height: 1rem;
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
