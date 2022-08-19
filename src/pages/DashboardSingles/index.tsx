import { Link } from "react-router-dom";

import { getDashboards } from "../../utils";

// import { disableBodyScroll } from "body-scroll-lock";
import { lock } from "tua-body-scroll-lock";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import { makeStyles } from "@material-ui/styles";

import { Main } from "./styles";

const useStyles = makeStyles(() => ({
  card: { padding: "0" },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    "@media (min-height: 767px)": {
      display: "none",
    },
  },
  cardConcent: {
    padding: "0",
  },
  container: {
    margin: "0",
    maxWidth: "none",
    padding: "0",
  },
  iframe: {
    margin: "0",
    width: "100%",
    height: "42.5rem",
    "@media (min-width: 767px)": {
      height: "44rem",
    },
  },
  image: {
    display: "flex",
    justifyContent: "center",
    width: "13rem",
    "@media (min-height: 767px)": {
      display: "none",
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
}));

const DashboardSingles = () => {
  // STYLES:
  const classes = useStyles();

  // // DOM:
  // const deb = window.document.getElementById("scroll") as HTMLElement;

  // DESABILITAR SCROLL:
  lock();

  // URLs:
  const url = JSON.parse(
    localStorage.getItem("@pbi_url: PowerBI URL") || "null"
  );

  // LOGOUT:
  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.href = "/dashboardexternals";
  };

  return (
    <Container className={classes.container}>
      <Box className={classes.leaveIcon} onClick={clearLocalStorage}>
        <KeyboardBackspaceRoundedIcon />
        <Typography>Voltar</Typography>
      </Box>
      {/* <Container> */}
      <Card className={classes.card}>
        <CardContent className={classes.cardConcent}>
          <CardMedia className={classes.iframe} component="iframe" src={url} />
        </CardContent>
      </Card>
      {/* </Containe/r> */}
    </Container>
  );
};

export default DashboardSingles;
