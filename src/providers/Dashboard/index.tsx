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

interface IDashboardItself {
  id: number;
  category: string;
  is_favorite: boolean;
  name: string;
  url: string;
  created_at: string;
  supplier_owner: string;
}

interface IUser {
  cnpj: string;
  email: string;
  franquia: string;
  first_name: string;
  last_name: string;
  signature_vality: string;
  signature_created_at: string;
  is_admin: boolean;
  is_super_user: boolean;
  username: string;
  username_created_at: string;
  login_dates: Object[];
  dashboards: IDashboardItself[];
}

interface IDashboardProvider {
  dashboard: any;
  setDashboard: Dispatch<SetStateAction<any>>;
  // dashboard: IDashboardItself[];
  // setDashboard: Dispatch<
  //   SetStateAction<IDashboardItself[]>
  //   // Type 'Dispatch<SetStateAction<never[]>>' is not assignable to type
  // >;
  dashboardURL: string;
  setDashboardURL: Dispatch<SetStateAction<string>>;
  // Object[]>
  showDashboardByID: (id: string) => void;
}

interface IDashboardProviderProps {
  children: ReactNode;
}

export const DashboardContext = createContext({} as IDashboardProvider);

export const DashboardProvider = ({ children }: IDashboardProviderProps) => {
  // STATE TODOS OS DASHBOARDS:
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    api
      .get(`dashboards/`)
      .then((response) => {
        setDashboard(response.data);
        console.log(dashboard); // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dashboard]);
  // console.log();

  const [dashboardURL, setDashboardURL] = useState("");

  const showDashboardByID = (cnpj: string) => {
    api
      // .get(`dashboards/id/${id}/`)
      .get(`suppliers/${cnpj}/`)
      .then((response) => {
        // console.log(response.data.dashboards[0].url);
        setDashboardURL(response.data.dashboards[0].url);
        console.log(dashboardURL); // setDashboard(response.data.dashboards[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DashboardContext.Provider
      value={{
        dashboard,
        setDashboard,
        dashboardURL,
        setDashboardURL,
        showDashboardByID,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
