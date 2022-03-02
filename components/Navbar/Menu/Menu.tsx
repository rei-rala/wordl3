import React from "react";

import THEME from "../../../styles";
import useDarkTheme from "../../../hooks/useDarkTheme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


const Menu: React.FC = () => {
  const { darkTheme, toggleDarkTheme } = useDarkTheme();

  return (
    <button onClick={toggleDarkTheme} aria-label={`${darkTheme ? 'Activar' : 'Desactivar'} tema oscuro.`}>
      {
        darkTheme
          ? <FontAwesomeIcon icon={faSun} />
          : <FontAwesomeIcon icon={faMoon} />
      }
      <style jsx>{`
        button {
          width: 1rem;
          height: 1rem;
          color: ${darkTheme ? THEME.COLORS.WARN : THEME.COLORS.SKY};
        }

        button:hover {
          transform: scale(1.1);
        }

      `}</style>
    </button>
  )
}

export default Menu