import React, { useState, useEffect, useContext } from "react";
import { Popups } from "../../contexts/PopupsContext";
import { Keyboard, Loading } from "..";
import { findWordInDictionary } from "../../resources";
import { postGuess } from "../../services";

import { CoincidenceType, GameOver } from "../../types";
import { validateString } from "../../utils";

import Frame from "./Frame/Frame";
import Indicators from "../Indicators/Indicators";

import THEME from "../../styles";

const Game: React.FC = () => {
  const { addSignMessage } = useContext(Popups)

  const [maxTries, setMaxTries] = useState(6);
  const [wordLength, setWordLength] = useState(0);
  const [coincidences, setCoincidences] = useState<CoincidenceType[]>([]);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [wordIndex, setWordIndex] = useState(-1);

  // TODO: Change logic for loading state to array of loading-reasons
  const [isLoading, setIsLoading] = useState(false);

  const [gameOver, setGameOver] = useState<GameOver>({ state: false });
  const [error, setError] = useState({
    foundError: false,
    message: "Unexpected error"
  });
  const [invalidGuess, setInvalidGuess] = useState<string | undefined>(
    undefined
  );

  const submitGuesses = async (guesses: string | string[]) => {
    return new Promise((res) => res(setIsLoading(true)))
      .then(() => postGuess(guesses))
      .catch((err) => setError(err))
      .then(({ wordLength, maxTries, coincidences, guesses, definition, wordIndex }) => {
        setCurrentGuess("");
        setMaxTries(maxTries);
        setGuesses(guesses);
        setCoincidences(coincidences);
        setWordLength(wordLength);
        setWordIndex(wordIndex)

        localStorage.setItem("guesses", JSON.stringify(guesses));
        typeof definition.win === "boolean" &&
          setGameOver({
            state: true,
            message: definition.win ? `Has ganado! 🎉` : "No has podido ganar esta vez! 😔",
            definition,
          });
      })
      .catch((err) =>
        err.lastGuessIsInvalid ? setInvalidGuess(err.lastGuess) : setError(err)
      );
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
        throw new Error(
          `No encontre "${guess}" en el diccionario 🤔`
        );
      })
      .catch((err) => {
        addSignMessage("Error", err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const updateGuess = (keyValue: string) => {
    if (gameOver.state)
      return setError({ foundError: true, message: "Juego terminado!" });

    if (
      /^[a-zA-Z]$/i.test(keyValue) ||
      ["ñ", "Ñ", "BACKSPACE", "ENTER"].includes(keyValue)
    ) {
      if (keyValue === "BACKSPACE") {
        setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1));
      } else if (keyValue === "ENTER") {
        preSubmitSteps(currentGuess).catch((err) => setError(err));
      } else {
        setCurrentGuess((currentGuess + keyValue).slice(0, wordLength));
      }
    }
  };

  const handleKey = (event: KeyboardEvent) => {
    if (gameOver.state)
      return setError({ foundError: true, message: "Juego terminado!" });

    const KEY = event.key.toUpperCase();
    updateGuess(KEY);
    KEY === "ENTER" && event.preventDefault();
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
      }, THEME.ANIMATIONS.DURATION_MS_INT);

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

  return (
    <>
      <Frame
        currentGuess={currentGuess}
        wordLength={wordLength}
        maxTries={maxTries}
        guesses={guesses}
        coincidences={coincidences}
      />
      <Indicators
        gameOver={gameOver}
        error={error}
        invalidGuess={invalidGuess}
        wordIndex={wordIndex}
      />
      <Keyboard coincidences={coincidences} updateGuess={updateGuess} />

      {isLoading && <Loading />}
    </>
  );
};

export default Game;
