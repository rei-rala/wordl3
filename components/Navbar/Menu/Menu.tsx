import React from "react";

import THEME from "../../../styles";
import useDarkTheme from "../../../hooks/useDarkTheme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


const Menu: React.FC = () => {
  const { darkTheme, toggleDarkTheme } = useDarkTheme();

  return (
    <button onClick={toggleDarkTheme}>
      {
        darkTheme
          ? <FontAwesomeIcon icon={faSun} />
          : <FontAwesomeIcon icon={faMoon} />
      }
      <style jsx>{`
        button {
          display: grid;
          place-items: center;
          padding: 0;
          width: 1rem;
          height: 1rem;

          background-color: transparent;
          border: none;

          color: ${darkTheme ? THEME.COLORS.WARN : THEME.COLORS.SKY};
        }

        button:hover {
          animation: ${THEME.ANIMATIONS.PULSE} ;
        }

      `}</style>
    </button>
  )
}

export default Menu