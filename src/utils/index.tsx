// let dashboards: Object[] = [
let dashboards: any = [
  {
    id: 0,
    categoria: "estoque",
    name: "0",
    url: "https://app.powerbi.com/reportEmbed?reportId=317b4b04-8a3e-401e-856d-777f93bad15c&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  },
  {
    id: 1,
    categoria: "financeiro",
    name: "1",
    url: "https://app.powerbi.com/reportEmbed?reportId=3df51012-39ef-4abd-828c-fdb53dcc6b49&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  },
  {
    id: 2,
    categoria: "clientes",
    name: "2",
    url: "https://app.powerbi.com/reportEmbed?reportId=0b2987e8-66ee-4fb5-9b59-34457ae69aa8&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  },
  {
    id: 3,
    categoria: "e-commerce",
    name: "3",
    url: "https://app.powerbi.com/reportEmbed?reportId=ebbde2e4-87d8-447d-bfec-0d16dc5b54f1&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  },
  {
    id: 4,
    categoria: "credz",
    name: "4",
    url: "https://app.powerbi.com/reportEmbed?reportId=6c4d964f-a636-4545-af9d-ad765fe71eb4&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  },
  {
    id: 5,
    categoria: "fornecedores",
    name: "5",
    url: "https://app.powerbi.com/reportEmbed?reportId=b3f681c1-bf9d-4ce3-9d6e-73cef7e42e04&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  },
  {
    id: 6,
    categoria: "franqueados",
    name: "6",
    url: "https://app.powerbi.com/reportEmbed?reportId=b3f681c1-bf9d-4ce3-9d6e-73cef7e42e04&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  },
  {
    id: 7,
    categoria: "entrada de notas",
    name: "7",
    url: "https://app.powerbi.com/reportEmbed?reportId=ef864a74-21df-4b77-8148-690a66a5b880&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
  },
];

export const getDashboards = () => {
  return dashboards;
};
