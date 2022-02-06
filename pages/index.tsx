import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Game from "../components/Game";
import { postGuess } from "../services";
import { strToObjParser } from "../utils";

const Home: NextPage = () => {
  const [wordLength, setWordLength] = useState(0);
  const [maxTries, setMaxTries] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [coincidences, setCoincidences] = useState([]);
  const [lastGuesses, setLastGuesses] = useState([]);
  const [tryNumber, setTryNumber] = useState(0);

  const exceededTries = tryNumber >= maxTries;
  const disableInput = exceededTries;

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentGuess(e.target.value.trim().toUpperCase());

  const guessSubmitHandler = (e: any) => {
    e.preventDefault();
    const newGuess = e.target.guess.value.trim().toUpperCase()
    setWordLength(0);

    postGuess(lastGuesses.concat(newGuess))
      .then(
        ({ wordLength, maxTries, coincidences, guesses }) => {
          localStorage.setItem("guesses", JSON.stringify(guesses));
          setCurrentGuess("");

          setMaxTries(maxTries);
          setLastGuesses(guesses);
          setTryNumber(coincidences.length ?? 0);
          setCoincidences(coincidences);
          setWordLength(wordLength);
        }
      );
  };

  useEffect(() => {
    postGuess(localStorage.getItem("guesses") || "[]")
      .then(
        ({ wordLength, maxTries, coincidences, guesses }) => {
          setCurrentGuess("");

          setMaxTries(maxTries);
          setLastGuesses(guesses);
          setTryNumber(coincidences.length ?? 0);
          setCoincidences(coincidences);
          setWordLength(wordLength);
        }
      );
  }, []);

  return (
    <>
      <Head>
        <title>Wordl3</title>
        <meta name="description" content="Wordle clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {wordLength <= 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>
            <input type="text" placeholder={`Intentos ${tryNumber}`} disabled />
          </div>

          <div>
            <form onSubmit={guessSubmitHandler}>
              <input
                autoFocus
                placeholder={disableInput ? "" : "Ingrese palabra"}
                type="text"
                value={currentGuess}
                name="guess"
                maxLength={wordLength}
                onChange={handleGuessChange}
                disabled={disableInput}
              />
            </form>
          </div>

          <p>
            {exceededTries
              ? `Excedido intentos ${maxTries}`
              : false // WIN CONDITION?
                ? "Gano"
                : `Adivinando...`}
          </p>

          <Game
            coincidences={coincidences}
            wordLength={wordLength}
            maxTries={maxTries}
            currentGuess={currentGuess}
            guesses={lastGuesses}
          />
        </>
      )}
    </>
  );
};

export default Home;
