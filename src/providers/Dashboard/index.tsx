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
  // STATE VERIFICAÇÃO SE USUÁRIO ESTÁ HABILITADO PARA TROCAR SENHA:
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    api
      .get(`dashboards/`)
      .then((response) => {
        setDashboard(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(dashboard);

  const [dashboardURL, setDashboardURL] = useState("");
  // {
  //   id: 0,
  //   category: "estoque",
  //   name: "0",
  //   isFavorite: false,
  //   url: "https://app.powerbi.com/reportEmbed?reportId=317b4b04-8a3e-401e-856d-777f93bad15c&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  // },
  // {
  //   id: 1,
  //   category: "financeiro",
  //   name: "1",
  //   isFavorite: false,
  //   url: "https://app.powerbi.com/reportEmbed?reportId=3df51012-39ef-4abd-828c-fdb53dcc6b49&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  // },
  // {
  //   id: 2,
  //   category: "clientes",
  //   name: "2",
  //   isFavorite: false,
  //   url: "https://app.powerbi.com/reportEmbed?reportId=0b2987e8-66ee-4fb5-9b59-34457ae69aa8&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  // },
  // {
  //   id: 3,
  //   category: "e-commerce",
  //   name: "3",
  //   isFavorite: false,
  //   url: "https://app.powerbi.com/reportEmbed?reportId=ebbde2e4-87d8-447d-bfec-0d16dc5b54f1&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  // },
  // {
  //   id: 4,
  //   category: "credz",
  //   name: "4",
  //   isFavorite: false,
  //   url: "https://app.powerbi.com/reportEmbed?reportId=6c4d964f-a636-4545-af9d-ad765fe71eb4&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  // },
  // {
  //   id: 5,
  //   category: "fornecedores",
  //   name: "5",
  //   isFavorite: false,
  //   url: "https://app.powerbi.com/reportEmbed?reportId=b3f681c1-bf9d-4ce3-9d6e-73cef7e42e04&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  // },
  // {
  //   id: 6,
  //   category: "franqueados",
  //   name: "6",
  //   isFavorite: false,
  //   url: "https://app.powerbi.com/reportEmbed?reportId=b3f681c1-bf9d-4ce3-9d6e-73cef7e42e04&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  // },
  // {
  //   id: 7,
  //   category: "entrada de notas",
  //   name: "7",
  //   isFavorite: false,
  //   url: "https://app.powerbi.com/reportEmbed?reportId=ef864a74-21df-4b77-8148-690a66a5b880&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  // },

  const showDashboardByID = (cnpj: string) => {
    api
      // .get(`dashboards/id/${id}/`)
      .get(`suppliers/${cnpj}/`)
      .then((response) => {
        // console.log(response.data.dashboards[0].url);
        setDashboardURL(response.data.dashboards[0].url);
        // setDashboard(response.data.dashboards[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(dashboardURL);
  console.log(dashboard);
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
