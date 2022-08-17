import { Link } from "react-router-dom";

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

interface IProps {
  link: string;
}

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
    height: "37.5rem",
    // height: "41.5rem",
    "@media (min-height: 767px)": {
      height: "50rem",
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
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const DashboardSingle = ({ link }: IProps) => {
  // STYLES:
  const classes = useStyles();

  // DOM:
  const deb = window.document.getElementById("scroll") as HTMLElement;

  // DESABILITAR SCROLL:
  disableBodyScroll(deb);

  return (
    <Main id="scroll">
      <Box>
        <Link to="/dashboardexternals">
          <KeyboardBackspaceRoundedIcon className={classes.leaveIcon} />
          Voltar
        </Link>
      </Box>
      <Container className={classes.container}>
        <Card className={classes.card}>
          <CardContent className={classes.cardConcent}>
            <CardMedia
              className={classes.iframe}
              component="iframe"
              src={link}
            />
          </CardContent>
        </Card>
      </Container>
    </Main>
  );
};

export default DashboardSingle;
