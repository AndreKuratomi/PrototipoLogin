// import { Navigate } from "react-router-dom";

// import { useFullScreen } from "../../providers/FullScreen";
// import { useUserLogin } from "../../providers/UserLogin";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

import { disableBodyScroll } from "body-scroll-lock";

// import { DateTimeMoment } from "../../utils";

import {
  ExitToAppRounded,
  // FullscreenRounded,
  // FullscreenExitRounded,
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
  const deb = window.document.getElementById("scroll") as HTMLElement;

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
            {/* <Box>
              <PowerBIEmbed
                embedConfig={{
                  type: "report", // Supported types: report, dashboard, tile, visual and qna
                  id: "f540fa03-ce62-45ec-8175-9d20a76f4fac",
                  embedUrl:
                    "https://app.powerbi.com/reportEmbed?reportId=f540fa03-ce62-45ec-8175-9d20a76f4fac&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D",
                  accessToken:
                    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzBjZGIwMmItOWZiZi00MzA0LTgwZDQtY2E1OGI5ZDI0OWRhLyIsImlhdCI6MTY1OTExMzIzMCwibmJmIjoxNjU5MTEzMjMwLCJleHAiOjE2NTkxMTc5MjQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUF6VXlSbVRXM0hPSDVzNTVpN0RhUjY2d2dDcFBnNVowL1JLMnRORWhHc2RUVlB4S0tuRjg5RDFSc0VjM2lyOU1PIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiQkkiLCJnaXZlbl9uYW1lIjoiRGVzZW52b2x2aW1lbnRvIiwiaXBhZGRyIjoiMjAwLjQ5LjM4LjE5OCIsIm5hbWUiOiJEZXNlbnZvbHZpbWVudG8gQkkiLCJvaWQiOiI5ODgxNDdhZi1iYWI1LTQxZjctOWNlZi0xOWY5Y2ZiZWUwMTAiLCJwdWlkIjoiMTAwMzIwMDEwQ0RGQzhGQyIsInJoIjoiMC5BU1lBSzdETk1MLWZCRU9BMU1wWXVkSkoyZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQW1BQTAuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiOGNWYWVaYzhOSWtRd285UVB5SlMzZFI3cmlZOXFDOUdJaDVTQktza3JQMCIsInRpZCI6IjMwY2RiMDJiLTlmYmYtNDMwNC04MGQ0LWNhNThiOWQyNDlkYSIsInVuaXF1ZV9uYW1lIjoiZGV2YmlAYnVyZGF5cy5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJkZXZiaUBidXJkYXlzLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IkJ1UHVGNm8yLUU2WFR3S3ByeGtBQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.Nwpz7ie38ELwfzTRh2dohjQtCd0LtFCwtj5752qIIyT2pcZtwtr5UE7-f568tTBQj-51OWI437w329sq4WLs6an53mAvBDe-97Pm0MZ_0VjrwIY378jH4bK1m9YAneMJH45R9bTk9bLu4UnCaxLZQ4-XEzIA7BnMFPCMlyfGZIz5fPliNQZ5Ii8_e8UwKjSn2-NcxxAXJIqxjB_0ACbXSMhJ8VuVHm0YanEKDBeNjo5lCz46zk_LhJUnZ65QofaE8wwgC3-h2ls8wIeJMuDGhklIJEF8Ss8w59Atz1zT96A1kjn9njxqCr-m40lsxbtKn8Xjn8qV69zRbdqU7nla7Q",
                  tokenType: models.TokenType.Aad,
                  settings: {
                    panes: {
                      filters: {
                        expanded: false,
                        visible: false,
                      },
                    },
                    background: models.BackgroundType.Transparent,
                  },
                }}
                eventHandlers={
                  new Map([
                    [
                      "loaded",
                      function () {
                        console.log("Report loaded");
                      },
                    ],
                    [
                      "rendered",
                      function () {
                        console.log("Report rendered");
                      },
                    ],
                    [
                      "error",
                      function (event) {
                        console.log(event.detail);
                      },
                    ],
                  ])
                }
                cssClassName={"report-style-class"}
                getEmbeddedComponent={(embeddedReport) => {
                  window.report = embeddedReport;
                }}
              />
            </Box> */}
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
