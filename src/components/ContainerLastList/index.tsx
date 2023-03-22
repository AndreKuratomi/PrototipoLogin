import { CardsBILastList } from "../CardsBILastList";

import { Container, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "var(--lightGreen)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "1rem",
    "@media (min-width: 768px)": {
      textAlign: "start",
    },
  },
  typography1: {
    color: "var(--externalDashboardGreen)",
    fontSize: "1.5rem",
    fontWeight: 500,
    margin: "1rem",
    textAlign: "center",
    "@media (min-width: 768px)": {
      fontSize: "2rem",
      textAlign: "left",
    },
  },
  typography2: {
    color: "var(--externalDashboardGreen)",
    margin: "0 1rem 1rem",
    textAlign: "center",
    "@media (min-width: 768px)": {
      textAlign: "left",
    },
  },
}));

export const ContainerLastList = () => {
  // STYLES:
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.typography1}>
        Olá, Administrador
      </Typography>
      <Typography className={classes.typography2}>Visto por último</Typography>
      <CardsBILastList />
    </Container>
  );
};
