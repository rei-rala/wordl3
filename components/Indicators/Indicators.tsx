import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IIndicatorsComponentProps } from "../../types";
import THEME from '../../styles'

const Indicators: React.FC<IIndicatorsComponentProps> = ({
  gameOver,
  invalidGuess,
  error,
}) => {
  const [divOpen, setDivOpen] = useState(false)
  const closediv = () => setDivOpen(false)

  useEffect(() => {
    setDivOpen(gameOver.state || error.foundError || !!invalidGuess)
  }, [gameOver, error, invalidGuess])

  return (
    <section onClick={closediv}>

      {(gameOver.message || error.foundError) && <h2>{gameOver.message ?? error.message}</h2>}

      <fieldset>
        <legend>
          {
            gameOver.state && <>Palabra:{' '} <Link href={`https://dle.rae.es/${gameOver.definition?.word}`} passHref ><a target="_blank">{gameOver.definition?.word}</a></Link> {' '}</> ||
            error.foundError && <> Error! </> ||
            invalidGuess && <> Ingreso invalido! </>
          }
        </legend>
        <p>{
          gameOver.definition?.meaning && <>{gameOver.definition?.meaning}</> ||
          error.foundError && error.message ||
          invalidGuess
        }</p>

        {
          (gameOver.state || error.foundError) && <>
            <div>
              <hr />
            </div>
            <i> Clickea en la pantalla para cerrar </i>
          </>
        }
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
          background: ${THEME.COLORS.THEME_SECONDARY};
          color: ${THEME.COLORS.FONT};
          animation: ${divOpen && THEME.ANIMATIONS.FADE_IN_BACKGROUND};
          display: ${divOpen ? '' : 'none'};

          z-index: 10;
        }

        section h2 {
          font-size: 1.5rem;
          font-weigth: bold;
        }
              
        section fieldset, section legend {
          background-color: ${THEME.COLORS.THEME};
          border: 2px outset ${THEME.COLORS.ALERT};
          border-radius: 10px;
          padding: 0.5rem 1rem;
          min-width: 10rem;
          gap: 0.5rem;
        }
        
        section legend {
          margin: auto;
          gap: 0.2rem;
          font-weight: bold;
          color: ${THEME.COLORS.ALERT};
          padding: 0.25rem 0.75rem;
        }

        section fieldset {
          padding-bottom: 0.5rem;
          place-items: center;
        }

        section a {
          color: ${THEME.COLORS.SKY};
          text-transform: capitalize;
        }

        section a:hover {
          text-decoration: underline;
        }

        section button {
          position: relative;

          display: flex;
          align-items: center;

          border-radius: 5px;
          cursor: pointer;
        }

        section button:hover {
          color: ${THEME.COLORS.ALERT};
          border-color: ${THEME.COLORS.ALERT};
        }

      `}</style>
    </ section >
  );
};

export default Indicators;
