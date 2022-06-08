import { createContext, useContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  // STATE PARA CARREGAMENTO:
  const [loading, setLoading] = useState(false);

  const LoadPage = () => {
    setLoading(true);
  };

  return (
    <LoadingContext.Provider value={{ loading, setLoading, LoadPage }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
