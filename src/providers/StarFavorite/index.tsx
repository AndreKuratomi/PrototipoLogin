import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IStarFavoriteProvider {
  clicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
  starClicked: () => void;
  starUnClicked: () => void;
}

interface IStarFavoriteProviderProps {
  children: ReactNode;
}

export const StarFavoriteContext = createContext({} as IStarFavoriteProvider);

export const StarFavoriteProvider = ({
  children,
}: IStarFavoriteProviderProps) => {
  // STATE PARA VERIFICAR SE A SENHA ESTÁ VISÍVEL:
  const [clicked, setClicked] = useState(false);

  const starClicked = () => {
    setClicked(true);
  };

  const starUnClicked = () => {
    setClicked(false);
  };

  return (
    <StarFavoriteContext.Provider
      value={{
        clicked,
        setClicked,
        starClicked,
        starUnClicked,
      }}
    >
      {children}
    </StarFavoriteContext.Provider>
  );
};

export const useStarFavorite = () => useContext(StarFavoriteContext);
