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

export const CardsBIList = ({ value }: any) => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { favoriteCards } = useStarFavorite();

  // URLs:
  let dashboards = getDashboards();

  // CATEGORIAS:
  const estoqueCards: any = dashboards.filter(
    (elt: any) => elt.categoria === "estoque"
  );
  const clientesCards: any = dashboards.filter(
    (elt: any) => elt.categoria === "clientes"
  );
  const ecommerceCards: any = dashboards.filter(
    (elt: any) => elt.categoria === "e-commerce"
  );
  const credzCards: any = dashboards.filter(
    (elt: any) => elt.categoria === "credz"
  );
  const fornecedoresCards: any = dashboards.filter(
    (elt: any) => elt.categoria === "fornecedores"
  );
  const franqueadosCards: any = dashboards.filter(
    (elt: any) => elt.categoria === "franqueados"
  );
  const entradaDeNotasCards: any = dashboards.filter(
    (elt: any) => elt.categoria === "entrada de notas"
  );
  const financeiroCards: any = dashboards.filter(
    (elt: any) => elt.categoria === "financeiro"
  );

  return (
    <Box className={classes.dashboardList}>
      <TabPanel value={value} index={0}>
        {favoriteCards.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {estoqueCards.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
        {/* {dashboards.filter((elt: any) => elt.categoria === "estoque")} */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {clientesCards.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {ecommerceCards.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {credzCards.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {fornecedoresCards.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={6}>
        {franqueadosCards.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={7}>
        {entradaDeNotasCards.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={8}>
        {financeiroCards.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>
      {/* <TabPanel value={value} index={9}>
        {dashboards.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel> */}
    </Box>
  );
};
