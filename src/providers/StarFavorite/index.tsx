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
  favorites: Object[];
  cardId: number;
  setCardId: Dispatch<SetStateAction<number>>;
  setId: (id: number) => void;
  clicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  StarClicked: (id: number) => void;
  StarUnClicked: (id: number) => void;
  handleFavorite: (num: IDashboard) => void;
  handleDesFavorite: (num: IDashboard) => void;
}

interface IStarFavoriteProviderProps {
  children: ReactNode;
}

interface IDashboard {
  id: number;
  category: string;
  name: string;
  url: string;
}

// URLs:
let dashboards = getDashboards();

export const StarFavoriteContext = createContext({} as IStarFavoriteProvider);

export const StarFavoriteProvider = ({
  children,
}: IStarFavoriteProviderProps) => {
  // STATE PARA DELIMITAR ID DO CARD:
  const [cardId, setCardId] = useState(0);

  const setId = (id: number) => {
    setCardId(id);
  };

  // LISTA FAVORITOS:
  const favorites: Object[] = [];
  // localStorage.setItem("@FavoritesList", JSON.stringify(favorites));

  // STATE URL PARA SINGLE DASHBOARD:
  const [url, setUrl] = useState("");

  // STATE PARA ALTERAR ÍCONE ESTRELA:
  const [clicked, setClicked] = useState(false);

  const StarClicked = (id: number) => {
    const dash = dashboards.find((elem: IDashboard) => elem.id === id);
    if (dash) {
      setClicked(true);
    }
  };

  const StarUnClicked = () => {
    // STATE PARA ALTERAR ÍCONE ESTRELA:
    // const [clicked, setClicked] = useState(false);
    // const dash = favoriteCards.find((elem: IDashboard) => elem.id === id);
    // if (dash) {
    setClicked(false);
    // }
  };

  // INCLUSÃO DE FAVORITOS:
  const handleFavorite = (num: IDashboard) => {
    if (!favorites.includes(num)) {
      // setFavoriteCards([
      //   ...
      favorites.push(dashboards.find((elem: Object) => elem === num));
      // ,
      // ]);
      StarClicked(num.id);
    }
  };

  // EXCLUSÃO DE FAVORITOS:
  const handleDesFavorite = (num: IDashboard) => {
    if (favorites.includes(num)) {
      favorites.filter((elem: Object) => elem !== num);
      StarUnClicked();
    }
  };

  return (
    <StarFavoriteContext.Provider
      value={{
        favorites,
        cardId,
        setCardId,
        setId,
        clicked,
        setClicked,
        url,
        setUrl,
        StarClicked,
        StarUnClicked,
        handleFavorite,
        handleDesFavorite,
      }}
    >
      {children}
    </StarFavoriteContext.Provider>
  );
};

export const useStarFavorite = () => useContext(StarFavoriteContext);
