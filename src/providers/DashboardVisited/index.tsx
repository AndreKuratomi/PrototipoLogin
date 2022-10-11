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

import { useDashboard } from "../Dashboard";

interface IDashboardVisitedProvider {
  handleLastVisited: (elt: any) => void;
  lastVisited: any;
  setLastVisited: Dispatch<SetStateAction<any>>;
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
  const [lastVisited, setLastVisited] = useState([] as any);

  // API:
  useEffect(() => {
    api
      .get(`suppliers/${cnpj}`)
      .then((response) => {
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
