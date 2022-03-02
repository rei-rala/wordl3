import React, { useEffect, useState } from "react";
import { IIndicatorsComponentProps } from "../../types";
import THEME from "../../styles";

const Indicators: React.FC<IIndicatorsComponentProps> = ({
  gameOver,
  invalidGuess,
  error,
}) => {
  const [divOpen, setDivOpen] = useState(false);
  const closediv = () => setDivOpen(false);

  const openLink = () => {
    confirm(
      `Visitar referencia de la palabra ${gameOver.definition?.word ?? 'ERROR'} en el sitio de la RAE?\nSe abrira en una nueva pestaña.`
    ) &&
      window.open(
        `https://dle.rae.es/${gameOver.definition?.word ?? 404}`,
        "_blank",
        "noreferrer"
      );
  };

  useEffect(() => {
    setDivOpen(gameOver.state || error.foundError || !!invalidGuess);
  }, [gameOver, error, invalidGuess]);

  return (
    <section onClick={closediv}>
      {(gameOver.message || error.foundError) && (
        <h2>{gameOver.message ?? error.message}</h2>
      )}

      <fieldset>
        <legend>
          {(gameOver.state && (
            <>
              Palabra:{" "}
              <button onClick={openLink}>{gameOver.definition?.word}</button>{" "}
            </>
          )) ||
            (error.foundError && <> Error! </>) ||
            (invalidGuess && <> Ingreso invalido! </>)}
        </legend>
        <p>
          {(gameOver.definition?.meaning && (
            <>
              <strong>Definicion:</strong> {gameOver.definition?.meaning}
            </>
          )) ||
            (error.foundError && error.message) ||
            invalidGuess}
        </p>

        {(gameOver.state || error.foundError) && (
          <>
            <i> Toca en la pantalla para cerrar </i>
          </>
        )}
      </fieldset>

      <style jsx>{`
        section {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;

          border: none;
          background: hsla(0, 0%, 0%, 0.5);
          color: ${THEME.COLORS.FONT};
          animation: ${divOpen && THEME.ANIMATIONS.FADE_IN};
          display: ${divOpen ? "" : "none"};
          text-align: center;

          z-index: 100;
        }

        section h2 {
          font-size: 1.5rem;
          font-weigth: bold;
          color: ${THEME.COLORS.THEME_SECONDARY};
        }

        section fieldset,
        section legend {
          display: flex;
          background-color: ${THEME.COLORS.THEME};
          border: 2px outset ${THEME.COLORS.ALERT};
          border-radius: 10px;
          padding: 0.5rem 1rem;
          min-width: 10rem;
        }

        section legend {
          justify-content: space-around;
          margin: auto;
          color: ${THEME.COLORS.ALERT};
          padding: 0.25rem 0.75rem;
        }

        section fieldset {
          flex-direction: column;
          padding-bottom: 0.5rem;
        }

        section i {
          margin: 0.25rem;
          color: ${THEME.COLORS.BORDER};
        }

        section button {
          color: ${THEME.COLORS.SKY};
          font-weight: bold;
          text-transform: capitalize;
        }

        section button:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
};

export default Indicators;
