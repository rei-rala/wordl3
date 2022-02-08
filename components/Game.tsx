import React, { useState, useEffect } from "react";
import { findWordInDictionary } from "../resources";
import { postGuess } from "../services";

import { Coincidence, GameOver } from "../types";
import { validateString } from "../utils";
import Frame from "./Frame/Frame";
import Indicators from "./Indicators/Indicators";

const Game = () => {
  const [maxTries, setMaxTries] = useState(6);
  const [wordLength, setWordLength] = useState(0);
  const [coincidences, setCoincidences] = useState<Coincidence[]>([]);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    foundError: false,
    message: "Unexpected error",
  });
  const [invalidGuess, setInvalidGuess] = useState<string | undefined>(
    undefined
  );

  const [gameOver, setGameOver] = useState<GameOver>({
    state: false,
    message: "Unexpected Game Over Condition",
  });


  const submitGuesses = async (guesses: string | string[]) => {
    return new Promise((res) => res(setIsLoading(true)))
      .then(() => postGuess(guesses))
      .catch((err) => setError(err))
      .then(
        ({
          wordLength,
          maxTries,
          coincidences,
          guesses,
          definition
        }) => {
          setCurrentGuess("");
          setMaxTries(maxTries);
          setGuesses(guesses);
          setCoincidences(coincidences);
          setWordLength(wordLength);

          localStorage.setItem("guesses", JSON.stringify(guesses));
          typeof definition.win === 'boolean' && setGameOver({ state: true, message: definition.win ? `Has ganado! 🎉` : "No has podido ganar esta vez! 😔", definition })
        }
      )
      .catch((err) =>
        err.lastGuessIsInvalid ? setInvalidGuess(err.lastGuess) : setError(err)
      )
  };

  const preSubmitSteps = async (guess: string) => {
    if (gameOver.state) return;

    return validateString(guess, wordLength, new RegExp("!/[A-Z]$/i"))
      .then(({ error, guess }) => {
        if (error) {
          throw new Error(error);
        }
        return findWordInDictionary(guess);
      })
      .then((found) => {
        if (found) {
          return submitGuesses([...guesses, guess]);
        }
        throw new Error(`La palabra ${guess} no se encuentra en el diccionario. 🤔`);
      })
      .catch((err) => {
        setInvalidGuess(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleKey = (event: KeyboardEvent) => {
    if (gameOver.state)
      return setError({ foundError: true, message: "Juego terminado!" });

    const KEY = event.key.toUpperCase();

    if (/^[a-zA-Z]$/i.test(KEY) || ["BACKSPACE", "ENTER"].includes(KEY)) {
      if (KEY === "BACKSPACE") {
        setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1));
      } else if (KEY === "ENTER") {
        preSubmitSteps(currentGuess)
          .catch(err => setError(err));
      } else {
        setCurrentGuess((currentGuess + KEY).slice(0, wordLength));
      }
    }
  };

  useEffect(() => {
    new Promise((res) => res(setIsLoading(true)))
      .then(() => submitGuesses(localStorage.getItem("guesses") || "[]"))
      .then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const invalidGuessTimeout =
      invalidGuess &&
      setTimeout(() => {
        setInvalidGuess(undefined);
      }, 2000);

    return () => {
      invalidGuessTimeout && clearTimeout(invalidGuessTimeout);
    };
  }, [invalidGuess]);

  useEffect(() => {
    guesses.length >= maxTries &&
      setGameOver({ state: true, message: "No has podido ganar esta vez! 😔" });
  }, [maxTries, guesses]);


  useEffect(() => {
    !isLoading && window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <Frame
        currentGuess={currentGuess}
        wordLength={wordLength}
        maxTries={maxTries}
        guesses={guesses}
        coincidences={coincidences}
      />
      <Indicators gameOver={gameOver} error={error} invalidGuess={invalidGuess} />
    </>
  );
};

export default Game;
