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
  cardId: number;
  setCardId: Dispatch<SetStateAction<number>>;
  setId: (id: number) => void;
  clicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
  favoriteCards: Object[];
  setFavoriteCards: Dispatch<SetStateAction<Object[]>>;
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

  // STATE PARA INCLUIR LISTA FAVORITOS:
  const [favoriteCards, setFavoriteCards] = useState([] as Object[]);

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

  const handleFavorite = (num: IDashboard) => {
    if (!favoriteCards.includes(num)) {
      setFavoriteCards([
        ...favoriteCards,
        dashboards.find((elem: Object) => elem === num),
      ]);
      StarClicked(num.id);
    }
  };

  const handleDesFavorite = (num: IDashboard) => {
    if (favoriteCards.includes(num)) {
      setFavoriteCards(favoriteCards.filter((elem: Object) => elem !== num));
      StarUnClicked();
    }
  };

  return (
    <StarFavoriteContext.Provider
      value={{
        cardId,
        setCardId,
        setId,
        clicked,
        setClicked,
        StarClicked,
        StarUnClicked,
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
