import { CardBI } from "../CardBI";

import { Box, Container, Typography } from "@material-ui/core";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// import { TabPanel } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";

import { useDashboard } from "src/providers/Dashboard";
import { useTextInput } from "src/providers/TextInput";

import { useToast } from "@chakra-ui/react";

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
  container: {
    margin: "0",
    maxWidth: "none",
    padding: "0",
  },
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
  leaveIcon: {
    color: "var(--black)",
    display: "flex",
    // position: "static",
    "&:hover": {
      cursor: "pointer",
    },
    "@media (min-width: 767px)": {
      position: "absolute",
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

export const CardsBIListByCategory = ({ value }: any, { id }: any) => {
  // TOASTS:
  const toast = useToast();

  const notFoundToast = () => {
    toast({
      description: "Verifique o texto digitado.",
      duration: 3000,
      position: "top",
      status: "error",
      title: "Categoria não encontrada!",
    });
  };

  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { dashboard, selectedDashboard, setSelectedDashboard } = useDashboard();
  const { finalText, setFinalText, text, setText } = useTextInput();

  console.log(text);
  console.log(finalText);

  // showDashboardsByCategory("credz");
  // CATEGORIAS:
  const selected = dashboard.filter((elem: any) => elem.category === finalText);
  console.log(selected);
  // setSelectedDashboard(selected);
  // console.log(selectedDashboard);
  if (selected.length === 0) {
    console.log("irk");
    notFoundToast();
    setFinalText("");
  }

  const closeModal = () => {
    setText("");
    setFinalText("");
  };

  return (
    <Container className={classes.container}>
      <Box className={classes.leaveIcon} onClick={closeModal}>
        <CloseRoundedIcon />
        <Typography>Fechar</Typography>
      </Box>
      <Box className={classes.dashboardList}>
        {selected.map((elt: any) => (
          <CardBI elt={elt} key={elt.id} />
        ))}
      </Box>
    </Container>
  );
};
