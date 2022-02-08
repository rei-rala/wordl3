import Link from "next/link";
import React from "react";
import { IIndicatorsComponentProps } from "../../types";
import THEME from '../../styles'

const Indicators: React.FC<IIndicatorsComponentProps> = ({
  gameOver,
  invalidGuess,
  error,
}) => {
  return (
    <div>
      {gameOver.state && (
        <div>
          <h2>{gameOver.message}</h2>
          {
            !!gameOver.definition &&
            <fieldset>
              <legend>
                Palabra:{' '}
                <Link href={`https://dle.rae.es/${gameOver.definition?.word}`} passHref >
                  <a target="_blank">{gameOver.definition?.word}</a>
                </Link>
                {' '}- Definicion
              </legend>
              <p>{gameOver.definition?.meaning}</p>
            </fieldset>
          }
        </div>
      )}
      {error.foundError && <div>{error.message}</div>}
      {!!invalidGuess && <div>{invalidGuess}</div>}

      <style jsx>{`
        div {
          color: ${THEME.COLORS.FONT};
        }
        div a {
          color: ${THEME.COLORS.SKY};
          text-transform: capitalize;
        }

        div a:hover {
          text-decoration: underline;
        }

        div fieldset {
          border-radius: 10px;
        }

      `}</style>
    </div >
  );
};

export default Indicators;
