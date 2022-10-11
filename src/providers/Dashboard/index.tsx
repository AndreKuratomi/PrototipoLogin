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
  last_clicked: string;
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
  dashboardID: any;
  setDashboardID: Dispatch<SetStateAction<any>>;
  showDashboardByID: (cnpj: string) => void;
  dashboardURL: string;
  setDashboardURL: Dispatch<SetStateAction<string>>;
  showDashboardURLByID: (id: string) => void;
  selectedDashboard: Object[];
  setSelectedDashboard: Dispatch<SetStateAction<Object[]>>;
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dashboard]);

  // STATE DASHBOARDS.ID:
  const [dashboardID, setDashboardID] = useState("");

  const showDashboardByID = (cnpj: string) => {
    api
      .get(`suppliers/${cnpj}/`)
      .then((response) => {
        setDashboardID(response.data.dashboards[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // STATE DASHBOARDS.URL:
  const [dashboardURL, setDashboardURL] = useState("");

  const showDashboardURLByID = (cnpj: string) => {
    api
      .get(`suppliers/${cnpj}/`)
      .then((response) => {
        setDashboardURL(response.data.dashboards[0].url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // STATE DASHBOARDS BY CATEGORY:
  const [selectedDashboard, setSelectedDashboard] = useState([] as Object[]);

  return (
    <DashboardContext.Provider
      value={{
        dashboard,
        setDashboard,
        dashboardID,
        setDashboardID,
        dashboardURL,
        setDashboardURL,
        showDashboardURLByID,
        showDashboardByID,
        selectedDashboard,
        setSelectedDashboard,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
