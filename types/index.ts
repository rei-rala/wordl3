export const States = {
  FULL: 'FULL',
  PARTIAL: 'PARTIAL',
  NONE: 'NONE',
  EMPTY: 'EMPTY'
}

export type CoincidenceState = 'FULL' | 'PARTIAL' | 'NONE' | 'EMPTY'

export type Coincidence = {
  [key: number]: {
    coincidence: CoincidenceState,
    letter: string
  }
}

export type StyleByCoincidence = {
  [key: string]: {
    [key in CoincidenceState]: string
  }
}

export interface IGameComponentProps {
  wordLength: number,
  maxTries: number,
  guesses: string[],
  currentGuess: string,
  coincidences: Coincidence[]
}

export interface IWordComponentProps {
  word: string,
  wordIdx: number,
  isGuessing: boolean,
  coincidences?: Coincidence
}

export interface ILetterComponentProps {
  letter: string;
  coincidenceState: keyof typeof States;
  isGuessing: boolean;
}

export interface IGameApiResponse {
  wordLength: number,
  maxTries: number,
  guesses?: string[],
  coincidences?: Coincidence[],
  status: string;
}
