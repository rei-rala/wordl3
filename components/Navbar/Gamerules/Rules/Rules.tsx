import React, { useContext } from "react";
import { GameConditions } from "../../../../contexts";
import THEME from "../../../../styles";
import Letter from "../../../Game/Frame/Word/Letter/Letter";

const Rules: React.FC = () => {
  const { showRules, maxTries, wordLength } = useContext(GameConditions);
  return (
    <section className={`rules ${showRules ? "on" : "off"}`}>
      <div>
        <h3> Adivina la palabra oculta en {maxTries} intentos. </h3>
        <br />

        <p>Cada intento debe ser una palabra válida de {wordLength} letras.</p>
        <br />
        <p>
          Después de cada intento el color de las letras cambia para mostrar qué
          tan cerca estás de acertar la palabra.
        </p>
        <br />
        <b>
          Las letras cambian para mostrar qué tan cerca estás de acertar la
          palabra.
        </b>
        <br />
        <br />
        <hr />
        <h4>Ejemplos</h4>
        <hr />
        <article>
          <div>
            {"GATOS".split("").map((l, idx) => (
              <Letter
                key={`ruleLetter ${l + idx}`}
                coincidenceState={l === "G" ? "FULL" : "NONE"}
                letter={l}
                letterIndex={idx}
              />
            ))}
          </div>
          <p>La letra G está en la palabra y en la posición correcta.</p>
        </article>
        <br />

        <article>
          <div>
            {"CARRO".split("").map((l, idx) => (
              <Letter
                key={`ruleLetter ${l + idx}`}
                coincidenceState={l === "O" ? "PARTIAL" : "NONE"}
                letter={l}
                letterIndex={idx}
              />
            ))}
          </div>
          <p>La letra O está en la palabra pero en la posición incorrecta.</p>
        </article>
        <br />

        <article>
          <div>
            {"PENAS".split("").map((l, idx) => (
              <Letter
                key={`ruleLetter ${l + idx}`}
                coincidenceState="NONE"
                letter={l}
                letterIndex={idx}
              />
            ))}
          </div>
          <p>Ninguna letra se encuentra en la palabra.</p>
        </article>
      </div>

      <style jsx>{`
        .rules {
          position: fixed;
          left: 0;

          display: grid;
          place-items: center;

          text-align: center;

          background: ${THEME.COLORS.THEME_TERTIARY};
          opacity: 0.95;
          width: 100vw;
          height: 100vh;
          transition: position 1s;
          z-index: 9;
        }

        .rules article {
          display: flex;
          flex-flow: column wrap;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.5rem;
          background: ${THEME.COLORS.THEME_TERTIARY};
          border-radius: 0.5rem;
        }

        .on {
          top: ${THEME.SIZES.NAVBAR_HEIGHT};
        }
        .off {
          top: -100vh;
        }

        .rules div {
          color: ${THEME.COLORS.FONT};
          background: ${THEME.COLORS.THEME};
          max-width: 95%;
          max-height: 90%;
          overflow: hidden auto;
          padding: 1.2rem;
          border: 2px solid ${THEME.COLORS.BORDER};
          border-radius: 1rem;
        }

        .rules article div {
          margin: auto;
          width: 100%;
          background: none;
          border: none;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          overflow: hidden;
        }

      `}</style>
    </section>
  );
};

export default Rules;
