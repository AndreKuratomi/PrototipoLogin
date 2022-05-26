import { Navigate } from "react-router-dom";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

import { useUserLogin } from "../../providers/UserLogin";

import { makeStyles } from "@material-ui/styles";
import { useToast } from "@chakra-ui/react";
import { A, Main, P1 } from "./styles";

import { disableBodyScroll } from "body-scroll-lock";

import { DateTimeMoment } from "../../utils";
import { Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  icon: {
    color: "#fff",
    fontSize: "3.5rem",
    position: "absolute",
    // right: "6.25rem",
    right: "9.25rem",
    // top: "0.5rem",
    top: "1.5rem",
    "&:hover": {
      cursor: "pointer",
      color: "#fff6",
    },
  },
  date: {
    display: "flex",
    position: "absolute",
    zIndex: "1",
    top: "1.5rem",
    right: "34rem",
    color: "#fff",
    fontWeight: "800",
  },
}));

const Dashboard = () => {
  // LÓGICA PARA CHECAR SE USUÁRIO ESTÁ LOGADO:
  const { logged, setLogged } = useUserLogin();

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
      duration: 10000,
      position: "top",
      status: "warning",
      title: "Tempo esgotado!",
    });
  };

  // VERIFICAÇÃO SE O USUÁRIO ESTÁ MESMO LOGADO:
  const token = localStorage.getItem("@token: UserLoggedToken");

  if (token) {
    setLogged(true);
  } else {
    notLoggedToast();
    return <Navigate to="/login" />;
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

  const THIRTY_MINUTES = 1800000;
  let action = setTimeout(() => {
    timeoutToast();
    leaveAfter30minutes(800);
  }, THIRTY_MINUTES);

  // LOGOUT:
  const clearLocalStorage = () => {
    clearTimeout(action);
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <Main id="scroll">
        <iframe
          allowFullScreen={true}
          frameBorder="0"
          title="Comercial_AMADEU"
          id="my_frame"
          src="https://app.powerbi.com/reportEmbed?reportId=f540fa03-ce62-45ec-8175-9d20a76f4fac&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
          width="100%"
          height="700"
        />

        <P1>{moment}</P1>
        {/* <Typography className={classes.date}>{moment}</Typography> */}

        <ExitToAppRoundedIcon
          className={classes.icon}
          onClick={clearLocalStorage}
        />
        {/* <button>
          <A>Sair</A>
        </button> */}
      </Main>
    </>
  );
};

export default Dashboard;
