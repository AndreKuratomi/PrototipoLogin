// import { Link } from "react-router-dom";

// import { getDashboards } from "../../utils";

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

import { useStarFavorite } from "../../providers/StarFavorite";

const useStyles = makeStyles(() => ({
  card: { padding: "0" },
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
    height: "100vh",
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

  // DESABILITAR SCROLL:
  lock();

  // PROVIDERS:
  const url = JSON.parse(
    localStorage.getItem("@pbi_url: PowerBI URL") || "null"
  );

  // PROVIDERS:
  // const { url } = useStarFavorite();
  // console.log(url[0]);

  // LOGOUT:
  const backToDashboard = () => {
    localStorage.removeItem("@pbi_url: PowerBI URL");
    window.location.href = "/dashboardexternals";
  };

  return (
    <Container className={classes.container}>
      <Box className={classes.leaveIcon} onClick={backToDashboard}>
        <KeyboardBackspaceRoundedIcon />
        <Typography>Voltar</Typography>
      </Box>
      <Card className={classes.card}>
        <CardContent className={classes.cardConcent}>
          <CardMedia className={classes.iframe} component="iframe" src={url} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default DashboardSingles;
