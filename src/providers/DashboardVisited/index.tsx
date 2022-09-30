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

import { getDashboards } from "../../utils";
import { useDashboard } from "../Dashboard";

interface IDashboardVisitedProvider {
  handleLastVisited: (elt: any) => void;
  lastVisited: Object[];
  setLastVisited: Dispatch<SetStateAction<Object[]>>;
}

interface IDashboardVisitedProviderProps {
  children: ReactNode;
}

interface IDashboard {
  id: number;
  category: string;
  name: string;
  url: string;
}

export const DashboardVisitedContext = createContext(
  {} as IDashboardVisitedProvider
);

export const DashboardVisitedProvider = ({
  children,
}: IDashboardVisitedProviderProps) => {
  // LOCALSTORAGE:
  const cnpj = localStorage.getItem("@SuperUserLoggedToken:cnpj");

  // LISTA VISITADOS:
  const [lastVisited, setLastVisited] = useState([] as Object[]);

  // API:
  useEffect(() => {
    api
      .get(`suppliers/${cnpj}`)
      .then((response) => {
        console.log(response);
        setLastVisited(response.data.last_visited_dashboards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cnpj, lastVisited]);

  // PROVIDERS:
  const { dashboard } = useDashboard();

  // INCLUSÃO DE VISITADOS:
  const handleLastVisited = (elt: any) => {
    const urlFound: any = dashboard.find((elem: any) => elem.id === elt.id);
    localStorage.setItem("@pbi_url: PowerBI URL", JSON.stringify(urlFound.url));

    api
      .patch(`dashboards/last/${elt.id}/`)
      .then((_) => {
        console.log(lastVisited);
      })
      .catch((err) => {
        console.log(err);
      });

    // func();
    // const dashboards = dashboard.find((elem: Object) => elem === num);
    // if (dashboards) {
    //   console.log(lastVisited);
    //   if (!lastVisited.includes(num)) {
    //     if (lastVisited.length < 3) {
    //       setLastVisited([...lastVisited, dashboards]);
    //       console.log(lastVisited);
    //     } else if (lastVisited.length === 3) {
    //       lastVisited.shift(); // MAS COMO COLOCAR DENTRO DE UM SETSTATE??? OU TUDO BEM DEIXAR ASSIM?
    //       setLastVisited([...lastVisited, dashboards]);
    //     }
    //   }
    // }
  };

  return (
    <DashboardVisitedContext.Provider
      value={{
        handleLastVisited,
        lastVisited,
        setLastVisited,
      }}
    >
      {children}
    </DashboardVisitedContext.Provider>
  );
};

export const useDashboardVisited = () => useContext(DashboardVisitedContext);
