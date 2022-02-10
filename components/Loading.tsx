import React from "react";
import THEME from "../styles";

const Loading: React.FC = () => {
  return (
    <div>
      <span>  CARGANDO</span>
      <style jsx>{`
        div {
          position: fixed;
          top: 0;
          left: 0;
          
          display: grid;
          place-items: center;

          width: 100%;
          height: 100%;

          z-index: 100;
          background-color: ${THEME.COLORS.THEME};
          color: ${THEME.COLORS.FONT};
          animation: ${THEME.ANIMATIONS.FADE_IN};
        }
      `}</style>
    </div>
  )
}

export default Loading