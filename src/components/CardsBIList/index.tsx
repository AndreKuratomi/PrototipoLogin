import { CardBI } from "../CardBI";

import { getDashboards } from "../../utils";

import { useStarFavorite } from "../../providers/StarFavorite";

import { Box } from "@material-ui/core";
// import { TabPanel } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { List } from "@mui/material";

interface ITabPanelProps {
  children?: React.ReactNode;
  className?: string;
  index: number;
  value: number;
}

interface IElem {
  id: number;
  category: string;
  name: string;
  url: string;
}

const useStyles = makeStyles(() => ({
  dashboardList: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: "1rem",
    // width: "10rem",
    "@media (min-width: 768px)": {
      justifyContent: "space-evenly",
      flexDirection: "row",
      // padding: "1rem 2rem",
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: "1rem",
    // width: "10rem",
    "@media (min-width: 768px)": {
      justifyContent: "space-between",
      flexDirection: "row",
      // padding: "1rem 2rem",
    },
  },
}));

const TabPanel = (props: ITabPanelProps) => {
  // PROPS:
  const { index, value, children, className, ...other } = props;

  // STYLES:
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <List className={classes.list}>{children}</List>}
    </div>
  );
};

export const CardsBIList = ({ value }: any, { id }: IElem) => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { favoriteCards } = useStarFavorite();

  // URLs:
  let dashboards = getDashboards();

  // CATEGORIAS:
  const estoqueCards: any = dashboards.filter(
    (elem: IElem) => elem.category === "estoque"
  );
  const clientesCards: any = dashboards.filter(
    (elem: IElem) => elem.category === "clientes"
  );
  const ecommerceCards: any = dashboards.filter(
    (elem: IElem) => elem.category === "e-commerce"
  );
  const credzCards: any = dashboards.filter(
    (elem: IElem) => elem.category === "credz"
  );
  const fornecedoresCards: any = dashboards.filter(
    (elem: IElem) => elem.category === "fornecedores"
  );
  const franqueadosCards: any = dashboards.filter(
    (elem: IElem) => elem.category === "franqueados"
  );
  const entradaDeNotasCards: any = dashboards.filter(
    (elem: IElem) => elem.category === "entrada de notas"
  );
  const financeiroCards: any = dashboards.filter(
    (elem: IElem) => elem.category === "financeiro"
  );

  return (
    <Box className={classes.dashboardList}>
      {/* FAVORITOS */}
      <TabPanel value={value} index={0}>
        {favoriteCards.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>

      {/* ESTOQUE */}
      <TabPanel value={value} index={1}>
        {estoqueCards.map((elt: IElem) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>

      {/* CLIENTES */}
      <TabPanel value={value} index={2}>
        {clientesCards.map((elt: IElem) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>

      {/* E-COMMERCE */}
      <TabPanel value={value} index={3}>
        {ecommerceCards.map((elt: IElem) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>

      {/* CREDZ */}
      <TabPanel value={value} index={4}>
        {credzCards.map((elt: IElem) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>

      {/* FORNECEDORES */}
      <TabPanel value={value} index={5}>
        {fornecedoresCards.map((elt: IElem) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>

      {/* FRANQUEADOS */}
      <TabPanel value={value} index={6}>
        {franqueadosCards.map((elt: IElem) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>

      {/* ENTRADA DE NOTAS */}
      <TabPanel value={value} index={7}>
        {entradaDeNotasCards.map((elt: IElem) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>

      {/* FINANCEIRO */}
      <TabPanel value={value} index={8}>
        {financeiroCards.map((elt: IElem) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>
    </Box>
  );
};
