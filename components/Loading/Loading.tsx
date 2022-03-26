import React from "react";
import THEME from "styles";

const Loading: React.FC = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="181px"
        height="181px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <rect x="19.5" y="33" width="11" height="34" fill={THEME.COLORS.ALERT}>
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="16;33;33"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.2s"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="68;34;34"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.2s"
          ></animate>
        </rect>
        <rect
          x="44.5"
          y="33"
          width="11"
          height="34"
          fill={THEME.COLORS.SUCCESS}
        >
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="20.25;33;33"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.1s"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="59.5;34;34"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.1s"
          ></animate>
        </rect>
        <rect x="69.5" y="33" width="11" height="34" fill={THEME.COLORS.WARN}>
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="20.25;33;33"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="59.5;34;34"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          ></animate>
        </rect>
      </svg>
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
          animation: ${THEME.ANIMATIONS.FADE_IN};
        }
      `}</style>
    </div>
  );
};

export default Loading;
