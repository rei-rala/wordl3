import react, {
  useState,
  useEffect,
  createContext,
} from "react";
import THEME from "../styles";

class Popup {
  static id = 0;

  id: number;
  title: string;
  message: string;
  showing: boolean;

  constructor(title: string, message: string) {
    this.id = Popup.id++;
    this.title = title;
    this.message = message;
    this.showing = true;

    setTimeout(() => {
      this.showing = false;
      this.title = "";
      this.message = "";
    }, THEME.ANIMATIONS.DURATION_MS_INT*4);
  }
}

type PopupContextType = {
  signMessages: Popup[];
  addSignMessage: (title: string, message: string) => void;
};

export const Popups = createContext<PopupContextType>({
  signMessages: [],
  addSignMessage: () => {},
});

export const PopupsContext = (props: any) => {
  const [signMessages, setSignMessages] = useState<Popup[]>([]);

  const addSignMessage = (title: string, message: string) => {
    const newSignMessage = new Popup(title, message);
    setSignMessages([...signMessages, newSignMessage]);
  };

  useEffect(() => {
    let refreshInterval: NodeJS.Timeout | undefined;
    const refresh = () => {
      setSignMessages(
        signMessages.filter((signMessage) => signMessage.showing)
      );
    };

    refreshInterval = signMessages.length > 0 && !refreshInterval ? setInterval(refresh, 500) : undefined;

    return () => {
      clearTimeout(refreshInterval!);
      refreshInterval = undefined;
    };
  }, [signMessages]);

  return (
    <Popups.Provider value={{ signMessages, addSignMessage }}>
      {props.children}
    </Popups.Provider>
  );
};
