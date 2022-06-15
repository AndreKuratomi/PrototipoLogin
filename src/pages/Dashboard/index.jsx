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
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { useToast } from "@chakra-ui/react";

import { Main } from "./styles";

const useStyles = makeStyles(() => ({
  date: {
    color: "#fff",
    display: "flex",
    position: "absolute",
    fontWeight: "800",
    zIndex: "1",
    // MOBILE:
    "@media (min-width: 320px and (min-height: 180px))": {
      left: "1rem",
      bottom: "1rem",
      "& .ecuBTG p": {
        fontSize: "8px",
      },
    },
    // DESKTOP:
    "@media (min-width: 768px and (min-height: 240px))": {
      fontSize: "1.5rem",
      bottom: "1rem",
      left: "1rem",
      "& .ecuBTG p": {
        fontSize: "0.75rem",
      },
    },
    // FULLSCREEN:
    "@media (min-width: 1365px) and (min-height: 767px)": {
      bottom: "1rem",
      left: "2rem",
    },
  },
  fullScreenIcon: {
    color: "#fff",
    fontSize: "1.5rem",
    position: "absolute",
    "&:hover": {
      color: "#fff6",
      cursor: "pointer",
    },
    // MOBILE:
    "@media (min-width: 320px)": {
      fontSize: "9px",
      right: "0rem",
      top: "1rem",
    },
    // DESKTOP:
    "@media (min-width: 768px)": {
      right: "0rem",
      top: "2rem",
    },
    // FULLSCREEN:
    "@media (min-width: 1365px) and (min-height: 766px)": {
      right: "0.75rem",
      top: "4rem",
    },
  },
  iframeBox: {
    position: "relative",
  },
  leaveIcon: {
    color: "#fff",
    position: "absolute",
    "&:hover": {
      color: "#fff6",
      cursor: "pointer",
    },
    // FULLSCREEN:
    "@media (min-width: 1365px) and (min-height: 766px)": {
      right: "0.75rem",
      top: "2rem",
    },
    // DESKTOP:
    "@media (min-width: 768px)": {
      fontSize: "1.5rem",
      right: "6.25rem",
      top: "1.5rem",
    },
    // MOBILE:
    "@media (min-width: 320px)": {
      fontSize: "0.5rem",
      right: "0rem",
      top: "0.3rem",
    },
  },
  main: {
    width: "1366px",
    minHeight: "768px",
  },
}));

const Dashboard = () => {
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
  const timeoutToast = () => {
    toast({
      description: "Faça o login novamente.",
      duration: 3000,
      position: "top",
      status: "warning",
      title: "Tempo esgotado!",
    });
  };

  // DOM:
  const deb = window.document.getElementById("scroll");

  // TELA CHEIA:
  const { fullScreen, setFullScreen, openFullScreen, closeFullScreen } =
    useFullScreen();

  // VERIFICAÇÃO SE O USUÁRIO ESTÁ MESMO LOGADO:
  const { setLogged } = useUserLogin();
  const token = localStorage.getItem("@token: UserLoggedToken");

  if (token) {
    setLogged(true);
  } else {
    notLoggedToast();
    return <Navigate to="/" />;
  }

  // DESABILITAR SCROLL:
  disableBodyScroll(deb);

  // DESABILITAR COMANDO F11:
  // console.log(deb);
  // deb.onkeydown = (evt) => {
  //   if (evt.key === 122) {
  //     console.log("EAÊ, JOW!");
  //     return false;
  //   }
  // };

  // DATA E HORA:
  let moment = DateTimeMoment();

  // LOGOUT DEPOIS DE 30 MINUTOS:
  const leaveAfter30minutes = (seconds) => {
    return new Promise((_) =>
      setTimeout(() => {
        clearLocalStorage();
      }, seconds)
    );
  };

  const THIRTY_MINUTES = 3000000;
  let action = setTimeout(() => {
    timeoutToast();
    leaveAfter30minutes(700);
  }, THIRTY_MINUTES);

  // LOGOUT:
  const clearLocalStorage = () => {
    clearTimeout(action);
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      {fullScreen ? (
        <Main id="scroll">
          <Box className={classes.iframeBox}>
            <iframe
              allowFullScreen={true}
              frameBorder="0"
              title="Comercial_AMADEU"
              id="my_frame"
              src="https://app.powerbi.com/reportEmbed?reportId=f540fa03-ce62-45ec-8175-9d20a76f4fac&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
              width="100%"
              height="805"
            />
          </Box>

          <Typography className={classes.date}>{moment}</Typography>

          <ExitToAppRounded
            className={classes.leaveIcon}
            onClick={clearLocalStorage}
          />

          <FullscreenExitRounded
            className={classes.fullScreenIcon}
            onClick={() => closeFullScreen()}
          />
        </Main>
      ) : (
        <Main id="scroll">
          <Box className={classes.iframeBox}>
            <iframe
              allowFullScreen={true}
              frameBorder="0"
              title="Comercial_AMADEU"
              id="my_frame"
              src="https://app.powerbi.com/reportEmbed?reportId=f540fa03-ce62-45ec-8175-9d20a76f4fac&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
              width="100%"
              height="700"
            />
          </Box>

          <Typography className={classes.date}>{moment}</Typography>

          <ExitToAppRounded
            className={classes.leaveIcon}
            onClick={clearLocalStorage}
          />

          <FullscreenRounded
            className={classes.fullScreenIcon}
            // onClick={openFullScreen}
            onClick={() => openFullScreen(deb)}
          />
        </Main>
      )}
    </>
  );
};

export default Dashboard;
