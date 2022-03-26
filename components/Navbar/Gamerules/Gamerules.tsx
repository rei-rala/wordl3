import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import THEME from "styles";

const Gamerules: React.FC<{ toggleShowRules: () => void }> = ({
  toggleShowRules,
}) => {
  return (
    <button
      onClick={toggleShowRules}
      aria-label={"Muestra las reglas del juego."}
    >
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
