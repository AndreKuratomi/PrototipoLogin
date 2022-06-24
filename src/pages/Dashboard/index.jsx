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
    // color: "#f0f",
    color: "#fff",
    display: "flex",
    position: "absolute",
    fontWeight: "800",
    // MOBILE:
    "@media only screen (min-width: 475px) and (min-height: 320px) and (orientation: landscape)":
      {
        "&:nth-child(2)": {
          top: "15.5rem",
          left: "1rem",
        },
      },
    // TABLET:
    "@media only screen and (min-width: 768px)": {
      fontSize: "1.5rem",
      "&:nth-child(2)": {
        // display: "block",
        top: "25.6rem",
        left: "1.2rem",
      },
      "& .ecuBTG p": {
        fontSize: "0.75rem",
      },
    },
    // LARGE DESKTOP:
    "@media only screen and (min-width: 1294px)": {
      fontSize: "1.5rem",
      "&:nth-child(2)": {
        display: "block",
        top: "39.5rem",
        left: "7.5rem",
      },
    },
    // Screen:
    "@media only screen and (min-width: 1365px)": {
      "&:nth-child(3)": {
        top: "38.5rem",
        left: "5.2rem",
      },
    },
    // FULLSCREEN:
    "@media only screen and (min-width: 1365px) and (min-height: 767px)": {
      "&:nth-child(2)": {
        display: "block",
        left: "2rem",
        top: "45.8rem",
      },
    },
  },
  fullScreenIcon: {
    // color: "#f0f",
    color: "#fff",
    position: "absolute",
    "&:hover": {
      color: "#fff6",
      cursor: "pointer",
    },
    // MOBILE:
    "@media only screen and (min-height: 320px) and (orientation: landscape)": {
      width: "1rem",
      "&:nth-child(4)": {
        right: "0rem",
        top: "1.5rem",
        // size:
      },
      // ".css-1696fkf-MuiSvgIcon-root": {
      //   fontSize: "8.5rem",
      // },
    },
    // DESKTOP:
    "@media only screen and (min-width: 768px)": {
      "&:nth-child(4)": {
        right: "0rem",
        top: "2.2rem",
      },
    },
    // LARGE DESKTOP:
    "@media only screen and (min-width: 1294px)": {
      "&:nth-child(4)": {
        right: "4rem",
        top: "2.2rem",
      },
    },
    // Screen:
    "@media only screen and (min-width: 1365px)": {
      "&:nth-child(3)": {
        right: "6rem",
        top: "0.8rem",
      },
    },
    // FULLSCREEN:
    "@media only screen and (min-width: 1365px) and (min-height: 766px)": {
      "&:nth-child(4)": {
        right: "0.5rem",
        top: "4rem",
      },
    },
  },
  iframeBox: {
    "&:first-child": {
      position: "relative",
    },
  },
  leaveIcon: {
    // color: "#f0f",
    color: "#fff",
    position: "absolute",
    "&:hover": {
      color: "#fff6",
      cursor: "pointer",
    },
    // MOBILE:
    "@media only screen and (min-height: 320px) and (orientation: landscape)": {
      fontSize: "0.5rem",
      "&:nth-child(3)": {
        right: "0rem",
        top: "0.3rem",
      },
    },
    // DESKTOP:
    "@media only screen and (min-width: 768px)": {
      fontSize: "1.5rem",
      "&:nth-child(3)": {
        right: "0rem",
        top: "0.8rem",
      },
    },
    // LARGE DESKTOP:
    "@media only screen and (min-width: 1294px)": {
      "&:nth-child(3)": {
        right: "4rem",
        top: "0.8rem",
      },
    },
    // Screen:
    "@media only screen and (min-width: 1365px)": {
      "&:nth-child(3)": {
        right: "6rem",
        top: "0.8rem",
      },
    },
    // FULLSCREEN:
    "@media only screen and (min-width: 1365px) and (min-height: 766px)": {
      "&:nth-child(3)": {
        right: "0.5rem",
        top: "2rem",
      },
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
  const deb = window.document.querySelector("main");

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

  // deb.addEventListener("keypress", function (evt) {
  //   if (evt.key === "122") {
  //     evt.preventDefault();
  //     alert("Tecla inválida");
  //   }
  // });

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
  const leaveAfter30minutes = (miliseconds) => {
    timeoutToast();
    return new Promise((_) =>
      setTimeout(() => {
        clearLocalStorage();
      }, miliseconds)
    );
  };

  const THIRTY_MINUTES = 20000; //
  let action = setTimeout(() => {
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

            <Typography className={classes.date}>{moment}</Typography>

            <ExitToAppRounded
              className={classes.leaveIcon}
              onClick={clearLocalStorage}
            />

            <FullscreenExitRounded
              className={classes.fullScreenIcon}
              onClick={() => closeFullScreen()}
            />
          </Box>
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
          </Box>
        </Main>
      )}
    </>
  );
};

export default Dashboard;
