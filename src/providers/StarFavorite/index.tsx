import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import api from "src/service/api";

// import { getDashboards } from "../../utils";
import { useDashboard } from "../Dashboard";

interface IDashboard {
  id: number;
  category: string;
  is_favorite: boolean;
  name: string;
  url: string;
  created_at: string;
  supplier_owner: string;
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
  // const { dashboard, setDashboard } = useDashboard();

  // LOCALSTORAGE:
  const _cnpj = localStorage.getItem("@UserLoggedToken:cnpj");

  // API:
  // api
  //   .get(`dashboards/id/${_cnpj}/`)
  //   .patch(`dashboards/favorite/${_cnpj}/`)
  //   .then((response) => {
  //     console.log(response);
  //     setDashboard(response.data.dashboards[0]);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // ÍCONE CLICADO:
  const StarClicked = (id: number) => {
    // const dash = dashboard.find((elem: any) => elem.id === id);
    // if (dashboard) {
    //   dashboard.is_favorite = true;
    //   setDashboard(dashboard);
    // }
  };

  // ÍCONE DESCLICADO:
  const StarUnClicked = (id: number) => {
    // const dash = dashboard.find((elem: any) => elem.id === id);
    // if (dashboard) {
    //   dashboard.is_favorite = false;
    //   setDashboard(dashboard);
    // }
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
