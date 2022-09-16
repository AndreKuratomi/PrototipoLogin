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
  visited: Object[];
  favorites: Object[];
  cardId: number;
  setCardId: Dispatch<SetStateAction<number>>;
  setId: (id: number) => void;
  clicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
  // favoriteCards: Object[];
  // setFavoriteCards: Dispatch<SetStateAction<Object[]>>;
  // lastVisited: Object[];
  // setLastVisited: Dispatch<SetStateAction<Object[]>>;
  StarClicked: (id: number) => void;
  StarUnClicked: (id: number) => void;
  handleFavorite: (num: IDashboard) => void;
  handleDesFavorite: (num: IDashboard) => void;
  handleLastVisited: (num: IDashboard, func: () => void) => void;
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
  // const [favoriteCards, setFavoriteCards] = useState([] as Object[]);
  const favorites: Object[] = [];
  // favorites.push("churros");
  localStorage.setItem("@FavoritesList", JSON.stringify(favorites));
  // console.log(algo); // let favoritesListLocalStorage = [];

  // STATE PARA INCLUIR LISTA FAVORITOS:
  // const [lastVisited, setLastVisited] = useState([] as Object[]);
  const visited: Object[] = [];
  // console.log(algo2); // let lastVisitedLocalStorage = []

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

  // INCLUSÃO DE FAVORITOS:
  const handleLastVisited = async (num: IDashboard, func: () => void) => {
    func();
    if (!visited.includes(num)) {
      if (visited.length < 3) {
        // setvisited([
        //   ...
        visited.push(dashboards.find((elem: Object) => elem === num));
        localStorage.setItem("@LastVisitedList", JSON.stringify(visited));

        // ]);
      } else if (visited.length >= 3) {
        // let filtro = visited.filter(
        //   (elt: Object) => elt !== visited[0]
        // );
        visited.push(dashboards.find((elem: Object) => elem === num));
        visited.shift();
        localStorage.setItem("@LastVisitedList", JSON.stringify(visited));

        // return filtro;
      }
    }
  };

  return (
    <StarFavoriteContext.Provider
      value={{
        visited,
        favorites,
        cardId,
        setCardId,
        setId,
        clicked,
        setClicked,
        // lastVisited,
        // setFavoriteCards,
        // setLastVisited,
        StarClicked,
        StarUnClicked,
        // favoriteCards,
        handleFavorite,
        handleDesFavorite,
        handleLastVisited,
      }}
    >
      {children}
    </StarFavoriteContext.Provider>
  );
};

export const useStarFavorite = () => useContext(StarFavoriteContext);
