import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { getDashboards } from "../../utils";
import { useDashboard } from "../Dashboard";

interface IDashboard {
  id: number;
  isFavorite: boolean;
  category: string;
  name: string;
  url: string;
}

interface IStarFavoriteProvider {
  favorites: Object[];
  setFavorites: Dispatch<SetStateAction<Object[]>>;
  StarClicked: (id: number) => void;
  StarUnClicked: (id: number) => void;
  handleFavorite: (num: IDashboard) => void;
  handleDesFavorite: (num: IDashboard) => void;
}

interface IStarFavoriteProviderProps {
  children: ReactNode;
}
// URLs:

export const StarFavoriteContext = createContext({} as IStarFavoriteProvider);

export const StarFavoriteProvider = ({
  children,
}: IStarFavoriteProviderProps) => {
  // LISTA FAVORITOS:
  const [favorites, setFavorites] = useState([] as Object[]);

  // PROVIDERS:
  const { dashboard, setDashboard } = useDashboard();

  const StarClicked = (id: number) => {
    const dash = dashboard.find((elem: any) => elem.id === id);
    if (dash) {
      dash.isFavorite = true;
      setDashboard(dashboard);
    }
  };

  const StarUnClicked = (id: number) => {
    const dash = dashboard.find((elem: any) => elem.id === id);
    if (dash) {
      dash.isFavorite = false;
      setDashboard(dashboard);
    }
  };

  // INCLUSÃO DE FAVORITOS:
  const handleFavorite = (num: IDashboard) => {
    console.log(favorites);
    if (!favorites.includes(num)) {
      setFavorites([...favorites, num]);
      StarClicked(num.id);
      console.log(favorites);
    }
  };

  // EXCLUSÃO DE FAVORITOS:
  const handleDesFavorite = (num: IDashboard) => {
    console.log(favorites);
    if (favorites.includes(num)) {
      StarUnClicked(num.id);
      setFavorites(favorites.filter((elem: any) => elem !== num));
      console.log(favorites);
    }
  };

  return (
    <StarFavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
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
