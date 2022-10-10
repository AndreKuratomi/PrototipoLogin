import { CardBI } from "../CardBI";

import { useStarFavorite } from "../../providers/StarFavorite";

import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { List } from "@mui/material";
import { useDashboard } from "src/providers/Dashboard";

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
    "@media (min-width: 768px)": {
      justifyContent: "space-evenly",
      flexDirection: "row",
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: "1rem",
    "@media (min-width: 768px)": {
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },
}));

const TabPanel = (props: ITabPanelProps) => {
  // PROPS:
  const { index, value, children, className, ...other } = props;

  // STYLES:
  const classes = useStyles();

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <List className={classes.list}>{children}</List>}
    </Box>
  );
};

export const CardsBIList = ({ value }: any) => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { dashboard } = useDashboard();
  const { favorites } = useStarFavorite();

  // CATEGORIAS:
  const ecommerceCards: any = dashboard.filter(
    (elem: any) => elem.category === "e-commerce"
  );
  const clubedolivroCards: any = dashboard.filter(
    (elem: any) => elem.category === "clube do livro"
  );
  const alurapetsCards: any = dashboard.filter(
    (elem: any) => elem.category === "alura pets"
  );

  return (
    <Box className={classes.dashboardList}>
      {/* FAVORITOS */}
      <TabPanel value={value} index={0}>
        {favorites.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>

      {/* ESTOQUE */}
      <TabPanel value={value} index={1}>
        {ecommerceCards.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>

      {/* CLUBE DO LIVRO */}
      <TabPanel value={value} index={2}>
        {clubedolivroCards.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>

      {/* ALURA PETS */}
      <TabPanel value={value} index={3}>
        {alurapetsCards.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </TabPanel>
    </Box>
  );
};
