import React from "react";
import THEME from "../styles";
import Menu from "./Menu/Menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {

  return (
    <div>
      <span style={{ width: '1rem' }}>
        <FontAwesomeIcon icon={faCircleQuestion} />
      </span>
      <span>WORDL3 - Español</span>
      <Menu />
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 100vw;

          max-width: ${THEME.SIZES.GLOBAL_MAX_WIDTH};
          background: ${THEME.COLORS.GRADIENT_BKG};
          color: ${THEME.COLORS.FONT};
        }
      `}</style>
    </div>
  );
}

export default Navbar