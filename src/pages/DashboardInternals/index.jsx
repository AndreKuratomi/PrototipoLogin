import { Navigate } from "react-router-dom";

import { useFullScreen } from "../../providers/FullScreen";
import { useUserLogin } from "../../providers/UserLogin";

import { disableBodyScroll } from "body-scroll-lock";

import { DateTimeMoment } from "../../utils";

import {
  ExitToAppRounded,
  FullscreenRounded,
  FullscreenExitRounded,
} from "@mui/icons-material";

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

import { Main } from "./styles";

const useStyles = makeStyles(() => ({
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
    color: "#000",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const DashboardInternals = () => {
  // STYLES:
  const classes = useStyles();

  // // TOASTS:
  // const toast = useToast();

  // const notLoggedToast = () => {
  //   toast({
  //     description: "Usuário não logado!",
  //     duration: 3000,
  //     position: "top",
  //     status: "error",
  //     title: "Não autorizado",
  //   });
  // };
  // const timeoutToast = () => {
  //   toast({
  //     description: "Faça o login novamente.",
  //     duration: 3000,
  //     position: "top",
  //     status: "warning",
  //     title: "Tempo esgotado!",
  //   });
  // };

  // DOM:
  const deb = window.document.getElementById("scroll");

  // // TELA CHEIA:
  // const { fullScreen, setFullScreen, openFullScreen, closeFullScreen } =
  //   useFullScreen();

  // // VERIFICAÇÃO SE O USUÁRIO ESTÁ MESMO LOGADO:
  // const { setLogged } = useUserLogin();
  // const token = localStorage.getItem("@token: UserLoggedToken");

  // if (token) {
  //   setLogged(true);
  // } else {
  //   notLoggedToast();
  //   return <Navigate to="/" />;
  // }

  // DESABILITAR SCROLL:
  disableBodyScroll(deb);

  // // ORIENTAÇÃO LANDSCAPE E FULLSCREEN NA MÍDIA MOBILE:
  // const width = window.screen;
  // const orientation = window.screen.orientation;
  // console.log("Current orientation is " + orientation.type);

  // orientation.addEventListener("change", function () {
  //   console.log("Current orientation is " + orientation.type);
  // });

  // if (width.width < 768 && orientation.type !== "landscape-primary") {
  //   orientation.lock("landscape-primary");
  //   console.log("Current width is " + width.width);
  //   console.log("será que foi?");
  // } else {
  //   orientation.unlock();
  // }
  // // DATA E HORA:
  // let moment = DateTimeMoment();

  // // LOGOUT DEPOIS DE 30 MINUTOS:
  // const leaveAfter30minutes = (seconds) => {
  //   return new Promise((_) =>
  //     setTimeout(() => {
  //       clearLocalStorage();
  //     }, seconds)
  //   );
  // };

  // const THIRTY_MINUTES = 3000000;
  // let action = setTimeout(() => {
  //   timeoutToast();
  //   leaveAfter30minutes(700);
  // }, THIRTY_MINUTES);

  // LOGOUT:
  const clearLocalStorage = () => {
    // clearTimeout(action);
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Main id="scroll">
      <Container className={classes.container}>
        <Card sx={{ padding: "0" }}>
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
              src="https://app.powerbi.com/reportEmbed?reportId=f540fa03-ce62-45ec-8175-9d20a76f4fac&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
            />
          </CardContent>
        </Card>
      </Container>
    </Main>
  );
};

export default DashboardInternals;
