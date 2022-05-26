import { useRef, useState } from "react";
import { Link, Navigate, Redirect, useNavigate } from "react-router-dom";

import { useUserLogin } from "../../providers/UserLogin";

import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Slide } from "@mui/material";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import { HeaderTop } from "../../components/HeaderTop";
// import { SnackBarWelcome } from "../../components/SnackBarWelcome";
import { HeaderAsideTabs } from "../../components/HeaderAsideTabs";

import { useToast } from "@chakra-ui/react";
import { A, Main, P1, P2 } from "./styles";
import { disableBodyScroll } from "body-scroll-lock";
import { Asdf, DateTimeMoment, TimeOut } from "../../utils";

const useStyles = makeStyles((hide) => ({
  // console.log()

  asideHeader: {
    backgroundColor: "#009E4F",
    right: "auto",
    position: hide ? "absolute" : "relative",
    // position: "relative",
    zIndex: 2,
    // width: "4.5rem",
    width: hide ? 0 : "4.5rem",
  },
  asideHeaderOpened: {
    backgroundColor: "#009E4F",
    right: "auto",
    position: "relative",
    zIndex: 2,
    width: "4.5rem",
    // width: hide ? 0 : "4.5rem",
  },
  asideHeaderClosed: {
    backgroundColor: "#009E4F",
    right: "auto",
    // position: "relative", //?????????????!!!!!!!!!!
    zIndex: 2,
    width: 0,
    // width: hide ? 0 : "4.5rem",
  },
  asideHeaderButtonClosed: {
    color: "#000",
    backgroundColor: "#FFF",
    borderRadius: "1rem",
    position: "absolute",
    // left: hide ? 0 : "3.4rem",
    left: 0,
    top: "1.7rem",
    // transition: "all .4s ease-in-out",
    zIndex: 3,
    // "@media (min-width: 383px)": {
    //   top: "2.5rem",
    // },
    "@media (min-width: 426px)": {
      top: "2.6rem",
    },
    "@media (max-width: 320px)": {
      top: "2.8rem",
    },
  },
  asideHeaderButtonOpened: {
    color: "#000",
    backgroundColor: "#FFF",
    borderRadius: "1rem",
    position: "absolute",
    // left: hide ? 0 : "3.4rem",
    left: "3.7rem",
    top: "1.7rem",
    // transition: "all .4s ease-in-out",
    zIndex: 3,
    "@media (min-width: 426px)": {
      top: "2.6rem",
    },
    "@media (max-width: 320px)": {
      top: "2.8rem",
    },
  },

  boxDocumentsWithAsideOpened: {
    maxWidth: "100vw",
    // width: hide ? "90vw" : "80vw",
    height: "576px",
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 1,
    "@media (max-width: 768px)": {
      maxWidth: "90vw",
    },
  },
  boxDocumentsWithAsideClosed: {
    width: "100vw",
    // width: hide ? "100vw" : "95vw",
    height: "576px",
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  boxMenuWAMClosed: {
    border: "1px solid #000",
    borderRadius: "1rem",
    width: "100vw",
    // width: hide ? "100vw" : "90vw",
    height: "10vh",
    margin: "1rem",
  },
  boxMenuWAMOpened: {
    border: "1px solid #000",
    borderRadius: "1rem",
    width: "90vw",
    // width: hide ? "100vw" : "90vw",
    height: "10vh",
    margin: "1rem",
    "@media (max-width: 639px)": {
      width: "100vw",
    },
  },
  boxGraphicWAMClosed: {
    border: "1px solid #000",
    borderRadius: "1rem",
    width: "100vw",
    // width: hide ? "100vw" : "90vw",
    height: "40vh",
    margin: "1rem",
  },
  boxGraphicWAMOpened: {
    border: "1px solid #000",
    borderRadius: "1rem",
    width: "90vw",
    // width: hide ? "100vw" : "90vw",
    height: "40vh",
    margin: "1rem",
  },
  boxTopWAMClosed: {
    border: "1px solid #000",
    borderRadius: "1rem",
    width: "45vw",
    height: "20vh",
    margin: "1rem",
    "@media (max-width: 639px)": {
      width: "100vw",
    },
  },
  boxTopWAMOpened: {
    border: "1px solid #000",
    borderRadius: "1rem",
    width: "35vw",
    height: "20vh",
    margin: "1rem",
  },
  boxVendasSemanaWAMClosed: {
    border: "1px solid #000",
    borderRadius: "1rem",
    width: "45vw",
    height: "20vh",
    margin: "1rem",
    "@media (max-width: 639px)": {
      width: "100vw",
    },
  },
  boxVendasSemanaWAMOpened: {
    border: "1px solid #000",
    borderRadius: "1rem",
    width: "35vw",
    height: "20vh",
    margin: "1rem",
  },
}));

const Dashboard = () => {
  // LÓGICA PARA CHECAR SE USUÁRIO ESTÁ LOGADO:
  const { logged, setLogged } = useUserLogin();

  // MOSTRAR/ESCONDER ASIDEMENU:
  const [hide, setHide] = useState(false);
  const containerRef = useRef(null); //O QUE USEREF FAZ???
  const handleMenu = () => {
    setHide((prev) => !prev);
  };

  // STYLES:
  const classes = useStyles(hide);

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

  let action = setTimeout(() => {
    timeoutToast();
    leaveAfter30minutes(800);
  }, 10000);

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

        <button onClick={clearLocalStorage}>
          {/* <Link to="/"> */}
          <A>Sair</A>
          {/* </Link> */}
        </button>
      </Main>
    </>
  );
};

export default Dashboard;
