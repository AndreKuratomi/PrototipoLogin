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
  },
  typography2: {
    color: "var(--externalDashboardGreen)",
    marginBottom: "1rem",
  },
}));

export const ContainerLastList = () => {
  // STYLES:
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.typography1}>
        Olá, Juliana Mello
      </Typography>
      <Typography className={classes.typography2}>Visto por último</Typography>

      <CardsBILastList />
    </Container>
  );
};
