import React, { useEffect, useContext } from "react";
import { Popups, GameConditions } from "../../contexts";

import { Loading, Indicators } from "../";
import { Frame, Keyboard } from "./";

import {
  findWordInDictionary,
  strToObjParser,
  validateString,
} from "../../utils";
import { postGuess } from "../../services";
import Rules from "../Navbar/Gamerules/Rules/Rules";

const Game: React.FC = () => {
  const { addSignMessage } = useContext(Popups);
  const {
    showRules,
    isLoading,
    gameOver,
    wordLength,
    guesses,
    currentGuess,
    maxTries,
    setMaxTries,
    setWordLength,
    setCoincidences,
    setGuesses,
    setCurrentGuess,
    setWordIndex,
    setIsLoading,
    setGameOver,
    setError,
    setNextDay,
  } = useContext(GameConditions);

  const submitGuesses = async (guesses: string[]) => {
    Promise.resolve()
      .then(() => setIsLoading(true))
      .then(() =>
        postGuess(guesses, localStorage.getItem("clientDate") as string)
      )
      .then(
        ({
          wordLength,
          maxTries,
          coincidences,
          guesses,
          definition,
          wordIndex,
          wordDate,
          nextDay,
        }) => {
          setCurrentGuess("");
          setMaxTries(maxTries);
          setGuesses(guesses);
          setCoincidences(coincidences);
          setWordLength(wordLength);
          setWordIndex(wordIndex);
          setNextDay(nextDay);

          localStorage.setItem("guesses", JSON.stringify(guesses));
          localStorage.setItem("clientDate", wordDate);

          typeof definition?.win === "boolean" &&
            setGameOver({
              state: true,
              message: definition.win
                ? `Has ganado! 🎉`
                : "No has podido ganar esta vez! 😔",
              definition,
            });
        }
      )
      .catch(setError);
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
        throw new Error(`No encontre "${guess}" en el diccionario 🤔`);
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
    Promise.resolve(setIsLoading(true))
      .then(() =>
        submitGuesses(strToObjParser(localStorage.getItem("guesses"), []))
      )
      .then(() => setIsLoading(false));
    // TODO: Fix next exhaustive dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    guesses.length >= maxTries &&
      setGameOver({ state: true, message: "No has podido ganar esta vez! 😔" });
  }, [maxTries, guesses, setGameOver]);

  useEffect(() => {
    !isLoading && !showRules && window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  return (
    <>
      <Frame />
      <Indicators />
      <Keyboard updateGuess={updateGuess} />
      <Rules />

      {isLoading && <Loading />}
    </>
  );
};

export default Game;
