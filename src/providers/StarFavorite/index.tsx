import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
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
  handleStarClicked: (id: number) => void;
  // StarUnClicked: (id: number) => void;
  // handleFavorite: (num: IDashboard) => void;
  // handleDesFavorite: (num: IDashboard) => void;
}

interface IStarFavoriteProviderProps {
  children: ReactNode;
}
// URLs:

export const StarFavoriteContext = createContext({} as IStarFavoriteProvider);

export const StarFavoriteProvider = ({
  children,
}: IStarFavoriteProviderProps) => {
  // PROVIDERS:
  const { dashboard, setDashboard } = useDashboard();

  // LOCALSTORAGE:
  const _cnpj = localStorage.getItem("@SuperUserLoggedToken:cnpj");

  // LISTA FAVORITOS:
  const [favorites, setFavorites] = useState([] as Object[]);

  // API:
  useEffect(() => {
    api
      .get(`suppliers/${_cnpj}/`)
      .then((response) => {
        setFavorites(response.data.favorite_dashboards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [favorites, _cnpj]);

  // ÍCONE CLICADO:
  const handleStarClicked = (id: number) => {
    // useEffect?
    api
      .patch(`dashboards/favorite/${id}/`)
      .then((_) => {
        console.log(favorites);
        // setFavorites(favorites.filter((elt: any) => elt.is_favorite === true));
        // console.log(favorites);
      })
      .catch((err) => {
        console.log(err);
      });
    // const dash = dashboard.find((elem: any) => elem.id === id);
    // if (dashboard) {
    //   dashboard.is_favorite = true;
    //   setDashboard(dashboard);
    // }
  };

  // // ÍCONE DESCLICADO:
  // const StarUnClicked = (id: number) => {
  //   const dash = dashboard.find((elem: any) => elem.id === id);
  //   if (dashboard) {
  //     dashboard.is_favorite = false;
  //     setDashboard(dashboard);
  //   }
  // };

  // INCLUSÃO DE FAVORITOS:
  // const handleFavorite = (num: IDashboard) => {
  //   console.log(favorites);
  //   if (!favorites.includes(num)) {
  //     setFavorites([...favorites, num]);
  //     handleStarClicked(num.id);
  //     console.log(favorites);
  //   }
  //   // if (favorites.includes(num)) {
  //   handleStarClicked(num.id);
  //   setFavorites(favorites.filter((elem: any) => elem !== num));
  //   console.log(favorites);
  //   // }
  // };

  // // EXCLUSÃO DE FAVORITOS:
  // const handleDesFavorite = (num: IDashboard) => {
  //   console.log(favorites);
  // };

  return (
    <StarFavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
        handleStarClicked,
        // StarUnClicked,
        // handleFavorite,
        // handleDesFavorite,
      }}
    >
      {children}
    </StarFavoriteContext.Provider>
  );
};

export const useStarFavorite = () => useContext(StarFavoriteContext);
