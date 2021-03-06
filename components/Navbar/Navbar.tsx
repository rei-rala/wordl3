import React, { useContext } from "react";
import { GameConditions } from "contexts";
import THEME from "styles";
import { Gamerules, Menu } from "components";

const Navbar: React.FC = () => {
  const { toggleShowRules } = useContext(GameConditions);

  return (
    <div>
      <Gamerules toggleShowRules={toggleShowRules} />
      <span>WORDL3</span>
      <Menu />
      <style jsx>{`
        div {
          z-index: 99999;
          position: fixed;
          left: 0;

          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;

          height: 100%;
          width: 1.5rem;

          background: ${THEME.COLORS.GRADIENT_BKG_LANDSCAPE};
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
            background: ${THEME.COLORS.GRADIENT_BKG_PORTRAIT};

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
