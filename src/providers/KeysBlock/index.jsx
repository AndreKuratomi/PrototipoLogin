import { createContext, useContext, useState } from "react";

export const KeysBlockContext = createContext();

export const KeysBlockProvider = ({ children }) => {
  const [state, setState] = useState(true);

  const keysBlock = () => {
    // if (DESCOBRIR COMO CONDICIONAR APENAS PARA A PÁGINA DE LOGIN E DE ALTERAÇÃO DE SENHA) {}
    window.onload = () => {
      window.document.oncontextmenu = () => {
        return setState(false);
      };
    };

    window.document.onkeydown = (evt) => {
      // bloqueio tecla F12
      if (evt.keyCode === 123) {
        // alert("Pode não, bixo...");
        return false;
        // bloqueio comandos Ctrl + U
      } else if (evt.ctrlKey && evt.keyCode === 85) {
        // alert("Pode não, bixo...");
        return false;
        // bloqueio comandos Ctrl + C
      } else if (evt.ctrlKey && evt.keyCode === 67) {
        // alert("Pode não, bixo...");
        return false;
      }
    };
  };

  const reloadOnce = () => {
    const list = ["0", 1];

    for (let count = 0; count < list.length; count++) {
      if (list[count] === "0") {
        window.location.reload();
      }
    }
  };

  return (
    <KeysBlockContext.Provider value={{ keysBlock, reloadOnce }}>
      {children}
    </KeysBlockContext.Provider>
  );
};

export const useKeysBlock = () => useContext(KeysBlockContext);
