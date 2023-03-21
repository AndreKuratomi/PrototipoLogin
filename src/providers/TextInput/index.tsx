import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ITextProvider {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  finalText: string;
  setFinalText: Dispatch<SetStateAction<string>>;
}

interface ITextProviderProps {
  children: ReactNode;
}

export const TextInputContext = createContext({} as ITextProvider);

export const TextInputProvider = ({ children }: ITextProviderProps) => {
  // STATE PARA O TEXTO ESCRITO NO INPUT:
  const [text, setText] = useState("");

  // STATE PARA O TEXTO VINDO DO INPUT (SAINDO DE ONCHANGE):
  const [finalText, setFinalText] = useState("");

  return (
    <TextInputContext.Provider
      value={{ finalText, setFinalText, text, setText }}
    >
      {children}
    </TextInputContext.Provider>
  );
};

export const useTextInput = () => useContext(TextInputContext);
