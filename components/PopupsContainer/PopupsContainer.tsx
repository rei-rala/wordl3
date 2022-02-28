import React, { useContext } from "react";
import { Popups } from "../../contexts/PopupsContext";

import THEME from "../../styles";

const Popup: React.FC<{ message: string }> = ({ message }) => {
  return (
    <fieldset>
      <p>{message}</p>

      <style jsx>{`
        fieldset {
          display: grid;
          place-items: center;

          height: 0;
          border: none;
          animation: ${THEME.ANIMATIONS.POPUP_APPEAR};
          max-width: 80vw;
          background: ${THEME.COLORS.FONT};
          color: ${THEME.COLORS.THEME};
          overflow: hidden;
        }
      `}</style>
    </fieldset>
  );
};

const PopupsContainer: React.FC = () => {
  const { signMessages } = useContext(Popups);

  return (
    <section>
      {signMessages.map((signMessage) => (
        <Popup
          key={`signMsg-${signMessage.id}`}
          message={signMessage.message}
        />
      ))}
      <style jsx>{`
        section {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;

          text-align: center;
          z-index: 9999;

          width: 100%;
          height: ${THEME.SIZES.FRAME_HEIGHT_LANDSCAPE};
          padding: 5vh 0;
          z-index: 5;
          overflow: hidden;

          word-break: keep-all;
        }
      `}</style>
    </section>
  );
};

export default PopupsContainer;
