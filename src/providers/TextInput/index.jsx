import { createContext, useContext, useState } from "react";

export const TextInputContext = createContext();

export const TextInputProvider = ({ children }) => {
  const [text, setText] = useState("");

  const setUsername = (event) => {
    setText(event.target.value);
  };

  return (
    <TextInputContext.Provider value={{ text, setUsername }}>
      {children}
    </TextInputContext.Provider>
  );
};

export const useTextInput = () => useContext(TextInputContext);
