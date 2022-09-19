import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { getDashboards } from "../../utils";

interface IDashboardVisitedProvider {
  visited: Object[];
  setVisited: Dispatch<SetStateAction<Object[]>>;
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

// URLs:
let dashboards = getDashboards();

export const DashboardVisitedContext = createContext(
  {} as IDashboardVisitedProvider
);

export const DashboardVisitedProvider = ({
  children,
}: IDashboardVisitedProviderProps) => {
  // LISTA VISITADOS:
  const [visited, setVisited] = useState([] as Object[]);

  return (
    <DashboardVisitedContext.Provider
      value={{
        visited,
        setVisited,
      }}
    >
      {children}
    </DashboardVisitedContext.Provider>
  );
};

export const useDashboardVisited = () => useContext(DashboardVisitedContext);
