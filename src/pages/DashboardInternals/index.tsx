import { Navigate } from "react-router-dom";

import { lock } from "tua-body-scroll-lock";

import { ExitToAppRounded } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import LogoVestcasaVerde from "../../assets/figma_imgs/LogoVestcasaVerde.png";

import { useUserLogin } from "../../providers/UserLogin";
import { useDashboard } from "src/providers/Dashboard";

import { useToast } from "@chakra-ui/react";

const useStyles = makeStyles(() => ({
  card: { padding: "0" },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
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
    width: "100vw",
    height: "104vh",
    "@media (max-height: 500px)": {
      height: "99vh",
    },
  },
  image: {
    display: "flex",
    justifyContent: "center",
    width: "13rem",
    "@media (max-height: 500px)": {
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

const DashboardInternals = () => {
  // STATES:
  const { dashboardURL, showDashboardURLByID } = useDashboard();

  // STYLES:
  const classes = useStyles();

  // TOASTS:
  const toast = useToast();

  const notLoggedToast = () => {
    toast({
      description: "Usuário não logado!",
      duration: 3000,
      position: "top",
      status: "error",
      title: "Não autorizado",
    });
  };

  // VERIFICAÇÃO SE O USUÁRIO ESTÁ MESMO LOGADO:
  const { userLogged } = useUserLogin();
  const _cnpj = localStorage.getItem("@UserLoggedToken:cnpj");

  if (_cnpj) {
    userLogged();
  } else {
    notLoggedToast();
    return <Navigate to="/" />;
  }

  // DESABILITAR SCROLL:
  if (window.innerHeight > 400) {
    lock();
  }

  // LOGOUT:
  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  // API
  const cnpj = localStorage.getItem("@UserLoggedToken:cnpj") || "";

  showDashboardURLByID(cnpj);

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        {/* <CardMedia
          component="img"
          image={LogoVestcasaVerde}
          alt="logo vestcasa"
          className={classes.image}
        /> */}
        <CardContent className={classes.cardConcent}>
          <CardActions className={classes.cardActions}>
            <Typography>Olá, franqueado</Typography>
            <ExitToAppRounded
              className={classes.leaveIcon}
              onClick={clearLocalStorage}
            />
          </CardActions>
          <CardMedia
            className={classes.iframe}
            component="iframe"
            src={dashboardURL}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default DashboardInternals;
