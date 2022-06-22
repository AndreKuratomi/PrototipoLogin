import { Navigate } from "react-router-dom";

import { useUserLogin } from "../../providers/UserLogin";

import { disableBodyScroll } from "body-scroll-lock";

import { DateTimeMoment } from "../../utils";

import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import { useToast } from "@chakra-ui/react";

import { Main, P1 } from "./styles";

const useStyles = makeStyles(() => ({
  date: {
    color: "#fff",
    display: "flex",
    fontWeight: "800",
    position: "absolute",
    bottom: "3rem",
    left: "7.5rem",
    zIndex: "1",
  },
  icon: {
    color: "#fff",
    position: "absolute",
    right: "6.25rem",
    top: "1.5rem",
    "&:hover": {
      color: "#fff6",
      cursor: "pointer",
    },
    "@media (min-width: 1366px) and (min-height: 768px)": {
      right: "0.75rem",
      top: "2rem",
    },
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

  // VERIFICAÇÃO SE O USUÁRIO ESTÁ MESMO LOGADO:
  const { logged, setLogged } = useUserLogin();
  const token = localStorage.getItem("@token: UserLoggedToken");

  if (token) {
    setLogged(true);
  } else {
    notLoggedToast();
    return <Navigate to="/" />;
  }

  // LÓGICA PARA EVITAR SCROLL:
  const deb = window.document.getElementById("scroll");
  disableBodyScroll(deb);

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
  // console.log(Document);
  return (
    <>
      <Main id="scroll">
        <Box>
          <iframe
            allowFullScreen={true}
            frameBorder="0"
            title="Comercial_AMADEU"
            id="my_frame"
            src="https://app.powerbi.com/reportEmbed?reportId=f540fa03-ce62-45ec-8175-9d20a76f4fac&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
            width="100%"
            height={Document.fullScreen ? "805" : "805"}
          />
        </Box>

        <P1>{moment}</P1>

        <ExitToAppRoundedIcon
          className={classes.icon}
          onClick={clearLocalStorage}
        />
      </Main>
    </>
  );
};

export default Dashboard;
