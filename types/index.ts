import { Dispatch, SetStateAction } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type Definition = { word: string, meaning: string, win: boolean };
export type GameOver = { state: boolean, message: string, definition?: Definition }

export enum States {
  FULL = "FULL",
  PARTIAL = "PARTIAL",
  NONE = "NONE",
  EMPTY = "EMPTY",
}

export type CoincidenceStateType = "FULL" | "PARTIAL" | "NONE" | "EMPTY";

export type CoincidenceType = {
  [key: number]: {
    coincidence: CoincidenceStateType;
    letter: string;
  };
};

export type StyleByCoincidence = {
  [key: string]: {
    [key in CoincidenceStateType]: string;
  };
};

export interface IGuessComponentProps {
  wordLength: number;
  tryNumber: number;
  maxTries: number;
  currentGuess: string;
  setCurrentGuess: Dispatch<SetStateAction<string>>;
}

export interface IWordComponentProps {
  isLastGuess: boolean;
  isCurrentGuess: boolean;
  currentGuessIndex: number;
  word: string;
  wordIndex: number;
  isWrongInput: boolean;
  coincidences?: CoincidenceType;
}

export interface ILetterComponentProps {
  letter: string;
  letterIndex: number;
  coincidenceState?: keyof typeof States;
  isLastGuess?: boolean;
  isGuessing?: boolean;
  isLastLetter?: boolean;
}

export interface IKeyboardKeyProps {
  keyValue: string;
  updateGuess: (arg0: string) => void;
  bestCoincidence: CoincidenceStateType;
}

export interface IKeyboardProps {
  updateGuess: (arg0: string) => void,
}

export interface Status {
    status: string
}

export interface IGameApiResponse extends Status {
  wordLength: number;
  maxTries: number;
  guesses: string[];
  coincidences: CoincidenceType[];
  definition?: Definition;
  wordDate: string;
  wordIndex: number;
  nextDay: number;
}

export interface ISocialMediaProps {
  link: string;
  faIcon?: IconDefinition;
}