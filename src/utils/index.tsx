const suppliers: Object[] = [
  {
    cnpj: "10000000000000",
    email: "fornecedor0@vestcasa.com.br",
    // email: "matheus.silva@vestcasa.com.br",
    first_name: "Fulano0",
    last_name: "de tal0",
    franquia: "estoque",
    signature_vality: "2023-05-10T12:36:19.447826Z",
    is_admin: false,
    is_super_user: false,
    username: "Seu Fornecedor0",
  },
  {
    cnpj: "10000000000001",
    email: "fornecedor1@vestcasa.com.br",
    first_name: "Fulano1",
    last_name: "de tal1",
    franquia: "financeiro",
    signature_vality: "2022-10-05T10:34:39.477968Z",
    is_admin: false,
    is_super_user: false,
    username: "Seu Fornecedor1",
  },
  {
    cnpj: "10000000000002",
    email: "fornecedor2@vestcasa.com.br",
    first_name: "Fulano2",
    last_name: "de tal2",
    franquia: "clientes",
    signature_vality: "2022-10-05T10:34:39.477968Z",
    is_admin: false,
    is_super_user: false,
    username: "Seu Fornecedor2",
  },
  {
    cnpj: "10000000000003",
    email: "fornecedor3@vestcasa.com.br",
    first_name: "Fulano3",
    last_name: "de tal3",
    franquia: "e-commerce",
    signature_vality: "2022-10-05T10:34:39.477968Z",
    is_admin: false,
    is_super_user: false,
    username: "Seu Fornecedor3",
  },
  {
    cnpj: "10000000000004",
    email: "fornecedor4@vestcasa.com.br",
    first_name: "Fulano4",
    last_name: "de tal4",
    franquia: "credz",
    signature_vality: "2022-10-05T10:34:39.477968Z",
    is_admin: false,
    is_super_user: false,
    username: "Seu Fornecedor4",
  },
  {
    cnpj: "10000000000005",
    email: "fornecedor5@vestcasa.com.br",
    first_name: "Fulano5",
    last_name: "de tal5",
    franquia: "fornecedores",
    signature_vality: "2022-10-05T10:34:39.477968Z",
    is_admin: false,
    is_super_user: false,
    username: "Seu Fornecedor5",
  },
  {
    cnpj: "10000000000006",
    email: "fornecedor6@vestcasa.com.br",
    first_name: "Fulano6",
    last_name: "de tal6",
    franquia: "franqueados",
    signature_vality: "2022-10-05T10:34:39.477968Z",
    is_admin: false,
    is_super_user: false,
    username: "Seu Fornecedor6",
  },
  {
    cnpj: "10000000000007",
    email: "fornecedor7@vestcasa.com.br",
    first_name: "Fulano7",
    last_name: "de tal7",
    franquia: "entrada de notas",
    signature_vality: "2022-10-05T10:34:39.477968Z",
    is_admin: false,
    is_super_user: false,
    username: "Seu Fornecedor7",
  },
];

const super_user: Object[] = [
  {
    cnpj: "20000000000000",
    email: "dono@vestcasa.com.br",

    first_name: "Ciclano",
    last_name: "de tal",

    password: "1234",

    is_admin: false,
    is_super_user: true,

    username: "Sr. Dono",
  },
  // {
  //   cnpj: "20000000000001",
  //   email: "juliana.cristina@vestcasa.com.br",
  //   first_name: "Ciclano",
  //   last_name: "de tal",
  //   franquia: "",
  //   signature_vality: "",
  //   is_admin: false,
  //   is_super_user: true,
  //   username: "Sra. Dona",
  // },
  // {
  //   cnpj: "20000000000002",
  //   email: "silva.matheus27@outlook.com",
  //   first_name: "Ciclano",
  //   last_name: "de tal",
  //   franquia: "",
  //   signature_vality: "",
  //   is_admin: false,
  //   is_super_user: true,
  //   username: "Sra. Dono2",
  // },
];

const admin: Object[] = [
  {
    cnpj: "30000000000000",
    email: "admin@vestcasa.com.br",

    first_name: "Beltrano0",
    last_name: "de tal0",

    password: "1234",

    is_super_user: false,
    is_admin: true,

    username: "Seu Admin0",
  },
];

const dashboards: Object[] = [
  {
    id: 0,
    category: "estoque",
    is_favorite: true,
    name: "Estoque 0",
    url: "https://app.powerbi.com/reportEmbed?reportId=317b4b04-8a3e-401e-856d-777f93bad15c&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
    supplier_owner: "10000000000000",
  },
  {
    id: 1,
    category: "financeiro",
    is_favorite: false,
    name: "Financeiro 1",
    url: "https://app.powerbi.com/reportEmbed?reportId=3df51012-39ef-4abd-828c-fdb53dcc6b49&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
    supplier_owner: "10000000000001",
  },
  {
    id: 2,
    category: "clientes",
    is_favorite: false,
    name: "Clientes 2",
    url: "https://app.powerbi.com/reportEmbed?reportId=0b2987e8-66ee-4fb5-9b59-34457ae69aa8&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
    supplier_owner: "10000000000002",
  },
  {
    id: 3,
    category: "e-commerce",
    is_favorite: false,
    name: "E-commerce 3",
    url: "https://app.powerbi.com/reportEmbed?reportId=ebbde2e4-87d8-447d-bfec-0d16dc5b54f1&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
    supplier_owner: "10000000000003",
  },
  {
    id: 4,
    category: "credz",
    is_favorite: true,
    name: "Credz 4",
    url: "https://app.powerbi.com/reportEmbed?reportId=6c4d964f-a636-4545-af9d-ad765fe71eb4&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
    supplier_owner: "10000000000004",
  },
  {
    id: 5,
    category: "fornecedores",
    is_favorite: false,
    name: "Fornecedores 5",
    url: "https://app.powerbi.com/reportEmbed?reportId=b3f681c1-bf9d-4ce3-9d6e-73cef7e42e04&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
    supplier_owner: "10000000000005",
  },
  {
    id: 6,
    category: "franqueados",
    is_favorite: false,
    name: "Franqueado 7",
    url: "",
    supplier_owner: "10000000000006",
  },
  {
    id: 7,
    category: "entrada de notas",
    is_favorite: false,
    name: "Entrada de notas 7",
    url: "https://app.powerbi.com/reportEmbed?reportId=ef864a74-21df-4b77-8148-690a66a5b880&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
    supplier_owner: "10000000000007",
  },
];

// export const getDashboards = () => {
//   return dashboards;
// };
