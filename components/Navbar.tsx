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
      <span>WORDL3</span>
      <Menu />
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 100vw;

          height: ${THEME.SIZES.NAVBAR_HEIGHT};
          max-width: ${THEME.SIZES.GLOBAL_MAX_WIDTH};
          background: ${THEME.COLORS.GRADIENT_BKG};
          color: ${THEME.COLORS.FONT};
        }

        @media screen and (max-height: 476px) {
          div {
            z-index: 9999;
            position: fixed;
            height: 100%;
            width: 1.5rem;
            left: 0;            
            flex-direction: column;
            justify-content: space-around;
          }
          div * {
            transform: rotate(-90deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Navbar