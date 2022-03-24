import react, {
    useState,
    createContext,
} from "react";
import { CoincidenceType, GameOver } from "../types";


type GameConditionsContextType = {
    maxTries: number,
    setMaxTries: React.Dispatch<React.SetStateAction<number>>,
    wordLength: number,
    setWordLength: React.Dispatch<React.SetStateAction<number>>,
    coincidences: CoincidenceType[],
    setCoincidences: React.Dispatch<React.SetStateAction<CoincidenceType[]>>,
    guesses: string[],
    setGuesses: React.Dispatch<React.SetStateAction<string[]>>,
    currentGuess: string,
    setCurrentGuess: React.Dispatch<React.SetStateAction<string>>,
    wordIndex: number,
    setWordIndex: React.Dispatch<React.SetStateAction<number>>,
    gameOver: GameOver,
    setGameOver: React.Dispatch<React.SetStateAction<GameOver>>,
    error: {
        foundError: boolean,
        message: string
    },
    setError: React.Dispatch<React.SetStateAction<{
        foundError: boolean,
        message: string
    }>>,
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
};


export const GameConditions = createContext<GameConditionsContextType>({
    maxTries: 6,
    wordLength: 0,
    coincidences: [],
    guesses: [],
    currentGuess: '',
    wordIndex: -1,
    gameOver: { state: false, message: '' },
    error: { foundError: false, message: "Unexpected error" },
    isLoading: false,
    setMaxTries: () => { },
    setWordLength: () => { },
    setCoincidences: () => { },
    setGuesses: () => { },
    setCurrentGuess: () => { },
    setWordIndex: () => { },
    setGameOver: () => { },
    setError: () => { },
    setIsLoading: () => { },
});

export const GameConditionsContext = (props: any) => {
    const [maxTries, setMaxTries] = useState(6);
    const [wordLength, setWordLength] = useState(0);
    const [coincidences, setCoincidences] = useState<CoincidenceType[]>([]);
    const [guesses, setGuesses] = useState<string[]>([]);
    const [currentGuess, setCurrentGuess] = useState("");
    const [wordIndex, setWordIndex] = useState(-1);
    const [gameOver, setGameOver] = useState<GameOver>({ state: false, message: '' });
    const [error, setError] = useState({
        foundError: false,
        message: "Unexpected error"
    });
    const [isLoading, setIsLoading] = useState(false);
    //console.info('GameConditionsContext Update')

    return (
        <GameConditions.Provider value={{
            maxTries, setMaxTries,
            wordLength, setWordLength,
            coincidences, setCoincidences,
            guesses, setGuesses,
            currentGuess, setCurrentGuess,
            wordIndex, setWordIndex,
            gameOver, setGameOver,
            error, setError,
            isLoading, setIsLoading,
        }}>
            {props.children}
        </GameConditions.Provider>
    );
};
