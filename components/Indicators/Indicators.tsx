import React, { useEffect, useState } from "react";
import { IIndicatorsComponentProps } from "../../types";
import THEME from "../../styles";
import { userGame } from "../../resources/gameConfig";
import { timeStampToDate } from "../../utils";

const Indicators: React.FC<IIndicatorsComponentProps> = ({
  gameOver,
  invalidGuess,
  error,
  wordIndex
}) => {
  const [nextWordInterval, setNextWordInterval] = useState<number | null>(null);
  const [divOpen, setDivOpen] = useState(false);
  const closediv = () => setDivOpen(false);
  const RAE_Link = gameOver.definition?.word ? `https://dle.rae.es/${gameOver.definition?.word}`: undefined

  const openLink = () => {
    confirm(
      `Visitar referencia de la palabra ${gameOver.definition?.word ?? 'ERROR'} en el sitio de la RAE?\nSe abrira en una nueva pestaña.`
    ) &&
      window.open(
        RAE_Link,
        "_blank",
        "noreferrer"
      );
  };
  
  useEffect(() => {
    let nextWordIntervalRefresh: NodeJS.Timeout | undefined
    
    if (gameOver.definition && userGame.nextDay) {
      nextWordIntervalRefresh = setInterval(() => {
      setNextWordInterval(userGame.nextDay - Date.now().valueOf() );
      }, 1000);
    }

    return ()=> {
      nextWordIntervalRefresh && clearInterval(nextWordIntervalRefresh);
    }
  }, [gameOver]);


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
              {`Palabra: ${gameOver.definition?.word}`} <span>#{wordIndex}</span>
            </>
          )) ||
            (error.foundError && <> Error! </>) ||
            (invalidGuess && <> Ingreso invalido! </>)}
        </legend>
        <p>
          {(gameOver.definition?.word && (
            <>
              <strong> Buscar definicion en sitio de la RAE </strong>
              <button onClick={openLink}>{RAE_Link}</button>
              <hr />
              {nextWordInterval && `Proxima palabra en ${timeStampToDate(nextWordInterval).TIME}`}
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
          padding: 0.5rem 0.75rem;
          font-size: 1.2rem;
        }

        section legend span {
          margin: auto;
          font-size: 0.8rem;
          opacity: 0.4;
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
          margin: auto;
          color: ${THEME.COLORS.SKY};
          font-weight: bold;
        }

        section button:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
};

export default Indicators;
