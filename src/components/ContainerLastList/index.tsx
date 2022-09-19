import { useState } from "react";

import { CardsBILastList } from "../CardsBILastList";

import { Container, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

import api from "src/service/api";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "var(--lightGreen)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "1rem",
    // marginTop: "9rem",
    textAlign: "center",
    "@media (min-width: 768px)": {
      // justifyContent: "space-between",
      // flexDirection: "row",
      textAlign: "start",
      // padding: "1rem 2rem",
    },
  },
  typography1: {
    color: "var(--externalDashboardGreen)",
    fontSize: "1.5rem",
    fontWeight: 500,
    margin: "1rem",
    "@media (min-width: 768px)": {
      fontSize: "2rem",
    },
  },
  typography2: {
    color: "var(--externalDashboardGreen)",
    margin: "0 1rem 1rem",
  },
}));

export const ContainerLastList = () => {
  // STATES:
  // const [name, setName] = useState("");

  // STYLES:
  const classes = useStyles();

  // API:
  // const cnpj = localStorage.getItem("@UserLoggedToken:cnpj") || "";

  // const getName = () => {
  //   api
  //     .get(`suppliers/${cnpj}`)
  //     .then((response) => {
  //       console.log(response);
  //       for (let elem in response) {
  //         console.log(elem["data"]);
  //         // if (elem.cnpj === cnpj) {
  //         //   setName(elem.cnpj);
  //         // }
  //         // for (let count = 0; count < elem.data.length; count++) {
  //         //   for (let elem in response[count]) {
  //         //     console.log(elem);
  //         //   }
  //         // // if (elem.cnpj === cnpj) {
  //         // //   setName(elem.cnpj);
  //         // // }
  //         // }
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // // useEffect(() => , [])
  // getName();

  return (
    <Container className={classes.container}>
      <Typography className={classes.typography1}>
        Olá, Ahmad
        {/* {name} */}
      </Typography>
      <Typography className={classes.typography2}>Visto por último</Typography>
      <CardsBILastList />
    </Container>
  );
};
