import { Link } from "react-router-dom";

import { getDashboards } from "../../utils";

import { disableBodyScroll } from "body-scroll-lock";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
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
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const DashboardSingles = () => {
  // STYLES:
  const classes = useStyles();

  // DOM:
  const deb = window.document.getElementById("scroll") as HTMLElement;

  // DESABILITAR SCROLL:
  disableBodyScroll(deb);

  // URLs:
  const url = JSON.parse(
    localStorage.getItem("@pbi_url: PowerBI URL") || "null"
  );

  // LOGOUT:
  const clearLocalStorage = () => {
    // clearTimeout(action);
    localStorage.clear();
    <Link to="/dashboardexternals"></Link>;
    // window.location.href = "/";
  };

  return (
    <Main id="scroll">
      <Box>
        <KeyboardBackspaceRoundedIcon
          className={classes.leaveIcon}
          onClick={clearLocalStorage}
        ></KeyboardBackspaceRoundedIcon>
        Voltar
      </Box>
      <Container className={classes.container}>
        <Card className={classes.card}>
          <CardContent className={classes.cardConcent}>
            <CardMedia
              className={classes.iframe}
              component="iframe"
              // src={dashboards.url}
              src={url}
            />
          </CardContent>
        </Card>
      </Container>
    </Main>
  );
};

export default DashboardSingles;
