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
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);

          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 100vw;
          height: ${THEME.SIZES.NAVBAR_HEIGHT};

          max-width: ${THEME.SIZES.GLOBAL_MAX_WIDTH};
          background: ${THEME.COLORS.GRADIENT_BKG};
          color: ${THEME.COLORS.FONT};
        }
      `}</style>
    </div>
  );
}

export default Navbar