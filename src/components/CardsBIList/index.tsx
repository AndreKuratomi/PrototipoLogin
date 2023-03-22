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
  tabValue: number;
}

interface ICardsBIListProp {
  value: number;
}

// interface IElem {
//   id: number;
//   category: string;
//   name: string;
//   url: string;
// }

// interface IFavorite {
//   id: number;
//   category: string;
//   is_favorite: boolean;
//   name: string;
//   url: string;
//   created_at: string;
//   supplier_owner: string;
// }

// interface IDashboardItself {
//   id: number;
//   category: string;
//   is_favorite: boolean;
//   name: string;
//   url: string;
//   created_at: string;
//   last_clicked?: string;
//   supplier_owner: string;
// }

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
  const { index, tabValue, children, className, ...other } = props;

  // STYLES:
  const classes = useStyles();

  return (
    <Box
      role="tabpanel"
      hidden={tabValue !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tabpanel-${index}`}
      {...other}
    >
      {tabValue === index && <List className={classes.list}>{children}</List>}
    </Box>
  );
};

export const CardsBIList = (prop: ICardsBIListProp) => {
  // PROP:
  const { value } = prop;

  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { dashboard } = useDashboard();
  const { favorites } = useStarFavorite();

  // CATEGORIAS:
  const ecommerceCards = dashboard.filter(
    (elem) => elem.category === "e-commerce"
  );
  const clubedolivroCards = dashboard.filter(
    (elem) => elem.category === "clube do livro"
  );
  const alurapetsCards = dashboard.filter(
    (elem) => elem.category === "alura pets"
  );

  return (
    <Box className={classes.dashboardList}>
      {/* FAVORITOS */}
      <TabPanel tabValue={value} index={0}>
        {favorites.map((elem) => (
          <CardBI elt={elem} key={elem.id} />
        ))}
      </TabPanel>

      {/* ESTOQUE */}
      <TabPanel tabValue={value} index={1}>
        {ecommerceCards.map((elem) => (
          <CardBI elt={elem} key={elem.id} />
        ))}
      </TabPanel>

      {/* CLUBE DO LIVRO */}
      <TabPanel tabValue={value} index={2}>
        {clubedolivroCards.map((elem) => (
          <CardBI elt={elem} key={elem.id} />
        ))}
      </TabPanel>

      {/* ALURA PETS */}
      <TabPanel tabValue={value} index={3}>
        {alurapetsCards.map((elem) => (
          <CardBI elt={elem} key={elem.id} />
        ))}
      </TabPanel>
    </Box>
  );
};
