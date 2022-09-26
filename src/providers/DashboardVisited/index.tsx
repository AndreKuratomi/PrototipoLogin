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

interface IDashboardVisitedProvider {
  handleLastVisited: (num: IDashboard, func: () => void) => void;
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
  // LISTA VISITADOS:
  const [lastVisited, setLastVisited] = useState([] as Object[]);

  // PROVIDERS:
  const { dashboard } = useDashboard();
  // const dashboardi: Object[] = [];
  // INCLUSÃO DE VISITADOS:
  const handleLastVisited = (num: IDashboard, func: () => void) => {
    func();
    const dashboards = dashboard.find((elem: Object) => elem === num);
    if (dashboards) {
      console.log(lastVisited);
      if (!lastVisited.includes(num)) {
        if (lastVisited.length < 3) {
          setLastVisited([...lastVisited, dashboards]);
          console.log(lastVisited);
        } else if (lastVisited.length === 3) {
          lastVisited.shift(); // MAS COMO COLOCAR DENTRO DE UM SETSTATE??? OU TUDO BEM DEIXAR ASSIM?
          setLastVisited([...lastVisited, dashboards]);
        }
      }
    }
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
