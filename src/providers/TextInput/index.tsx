import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { getDashboards } from "../../utils";

interface ITextProvider {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  getText: (event: React.FormEvent<HTMLInputElement>) => void;
  setIndexValue: (text: string) => void;
}

interface ITextProviderProps {
  children: ReactNode;
}

export const TextInputContext = createContext({} as ITextProvider);

export const TextInputProvider = ({ children }: ITextProviderProps) => {
  const dashboards = getDashboards();

  const [text, setText] = useState("");

  // ALTERAÇÃO STATE CONFORME USUÁRIO DIGITA:
  const getText = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(text);
    console.log(event.currentTarget.value);
    setText(event.currentTarget.value);
  };

  const setIndexValue = (text: string) => {
    for (let i = 0; i < dashboards.length; i++) {
      if (dashboards[i]["category"] === text) {
        return dashboards[i]["id"];
      }
    }
  };

  return (
    <TextInputContext.Provider
      value={{ getText, text, setText, setIndexValue }}
    >
      {children}
    </TextInputContext.Provider>
  );
};

export const useTextInput = () => useContext(TextInputContext);
