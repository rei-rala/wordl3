import React from "react";
import THEME from "../../styles";
import Gamerules from "./Gamerules/Gamerules";
import Menu from "./Menu/Menu";

const Navbar: React.FC = () => {
  return (
    <div>
      <Gamerules />
      <span>WORDL3</span>
      <Menu />
      <style jsx>{`
        div {
          z-index: 9999;
          position: fixed;
          left: 0;

          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;

          height: 100%;
          width: 1.5rem;

          background: ${THEME.COLORS.GRADIENT_BKG};
          color: ${THEME.COLORS.FONT};
        }

        div > * {
          display: grid;
          place-items: center;
        }

        div span {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
        }

        @media screen and (min-height: 476px) {
          div {
            position: relative;
            flex-direction: row;
            width: 100vw;

            height: ${THEME.SIZES.NAVBAR_HEIGHT};
            max-width: ${THEME.SIZES.GLOBAL_MAX_WIDTH};
          }

          div span {
            writing-mode: horizontal-tb;
            transform: rotate(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
