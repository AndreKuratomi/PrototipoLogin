import { Dispatch, SetStateAction, useState } from "react";

import { CardBI } from "../CardBI";

import { getDashboards } from "../../utils";

import { Box } from "@material-ui/core";
// import { TabPanel } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { List } from "@mui/material";

import { useToast } from "@chakra-ui/react";

import { useDashboard } from "src/providers/Dashboard";
// import { useStarFavorite } from "../../providers/StarFavorite";
import { useTextInput } from "src/providers/TextInput";

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

// const TabPanel = (props: ITabPanelProps) => {
//   // PROVIDERS:
//   const { text } = useTextInput();

//   // PROPS:
//   const { index, value, children, className, ...other } = props;

//   // STYLES:
//   const classes = useStyles();

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tabpanel-${index}`}
//       {...other}
//     >
//       {value === index && <List className={classes.list}>{children}</List>}
//     </div>
//   );
// };

export const CardsBIListByCategory = ({ value }: any, { id }: any) => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  // const { dashboard, setDashboard } = useDashboard();
  // const { favorites } = useStarFavorite();
  const { text } = useTextInput();
  console.log(text);
  const dashboardi: Object[] = [];

  // TOASTS:
  const toast = useToast();

  const notFoundToast = () => {
    toast({
      description: "Verifique o texto digitado.",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Categoria não encontrada!",
    });
  };

  // CATEGORIAS:
  const selectedCards: any = dashboardi.filter(
    (elem: any) => elem.category === text
  );
  console.log(selectedCards);
  if (!selectedCards) {
    notFoundToast();
  }

  return (
    <Box className={classes.dashboardList}>
      {/* ESTOQUE */}
      {/* <TabPanel value={value} index={1}> */}
      {selectedCards ? (
        selectedCards.map((elt: any) => <CardBI elt={elt} key={elt.id} />)
      ) : (
        <></>
      )}
      {/* </TabPanel> */}
    </Box>
  );
};
