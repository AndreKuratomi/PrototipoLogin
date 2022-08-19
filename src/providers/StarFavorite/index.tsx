import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { getDashboards } from "../../utils";

interface IStarFavoriteProvider {
  clicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
  favoriteCards: Object[];
  setFavoriteCards: Dispatch<SetStateAction<Object[]>>;
  starClicked: () => void;
  starUnClicked: () => void;
  handleFavorite: (num: Object) => void;
  handleDesFavorite: (num: Object) => void;
}

interface IStarFavoriteProviderProps {
  children: ReactNode;
}

// URLs:
let dashboards = getDashboards();

export const StarFavoriteContext = createContext({} as IStarFavoriteProvider);

export const StarFavoriteProvider = ({
  children,
}: IStarFavoriteProviderProps) => {
  // STATE PARA ALTERAR ÍCONE ESTRELA:
  const [clicked, setClicked] = useState(false);

  // STATE PARA INCLUIR LISTA FAVORITOS:
  const [favoriteCards, setFavoriteCards] = useState([] as Object[]);

  const starClicked = () => {
    setClicked(true);
  };

  const starUnClicked = () => {
    setClicked(false);
  };

  const handleFavorite = (num: Object) => {
    if (!favoriteCards.includes(num)) {
      setFavoriteCards([
        ...favoriteCards,
        dashboards.find((elem: Object) => elem === num),
      ]);
      starClicked();
      console.log(clicked);
    }
  };

  const handleDesFavorite = (num: Object) => {
    if (favoriteCards.includes(num)) {
      setFavoriteCards(favoriteCards.filter((elem: Object) => elem !== num));
      starUnClicked();
      console.log(clicked);
    }
  };

  return (
    <StarFavoriteContext.Provider
      value={{
        clicked,
        setClicked,
        starClicked,
        starUnClicked,
        favoriteCards,
        setFavoriteCards,
        handleFavorite,
        handleDesFavorite,
      }}
    >
      {children}
    </StarFavoriteContext.Provider>
  );
};

export const useStarFavorite = () => useContext(StarFavoriteContext);
