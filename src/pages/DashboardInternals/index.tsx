import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { useUserLogin } from "../../providers/UserLogin";

import { lock } from "tua-body-scroll-lock";

import { ExitToAppRounded } from "@mui/icons-material";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Container,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

import LogoVestcasaVerde from "../../assets/figma_imgs/LogoVestcasaVerde.png";

import { useToast } from "@chakra-ui/react";

import api from "src/service/api";

const useStyles = makeStyles(() => ({
  card: { padding: "0" },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    // "@media (min-height: 767px)": {
    //   display: "none",
    // },
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
    height: "94vh",
    // "@media (max-height: 767px)": {
    //   height: "23.5rem",
    // },
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
  const [dashboard, setDashboard] = useState("");

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
  // const timeoutToast = () => {
  //   toast({
  //     description: "Faça o login novamente.",
  //     duration: 3000,
  //     position: "top",
  //     status: "warning",
  //     title: "Tempo esgotado!",
  //   });
  // };

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
  lock();

  // LOGOUT:
  const clearLocalStorage = () => {
    // clearTimeout(action);
    localStorage.clear();
    window.location.href = "/";
  };

  // API
  const cnpj = localStorage.getItem("@UserLoggedToken:cnpj") || "";
  console.log(cnpj);
  const showDashboard = () => {
    api
      .get(`suppliers/${cnpj}`)
      .then((response) => {
        console.log(response);
        setDashboard(response.data.url_dashboard);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  showDashboard();
  // useEffect(() => showDashboard(), []);

  return (
    // <Container>
    <Container className={classes.container}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          image={LogoVestcasaVerde}
          alt="logo vestcasa"
          className={classes.image}
        />
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
            // src="https://app.powerbi.com/reportEmbed?reportId=f540fa03-ce62-45ec-8175-9d20a76f4fac&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
            src={dashboard}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default DashboardInternals;
