import { Link } from "react-router-dom";

import { DateTimeMoment, DateTimeMoment0 } from "../../utils";

import { AppBar, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import { A } from "./styles";

const useStyles = makeStyles({
  topHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem",
    position: "relative",
    zIndex: 1,
    "@media (max-width: 767px)": {
      padding: "0 0.5rem",
    },
  },
  userHeaderBox: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00f",
    margin: "0.5rem",
    "@media (max-width: 425px)": {
      fontSize: "small",
      height: "1.5rem",
      marginRight: "0.5rem",
    },
  },
});

export const HeaderTop = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
    console.log("foi?");
  };

  const classes = useStyles();

  // DATA E HORA:
  let moment = DateTimeMoment();
  // let moment0 = DateTimeMoment0();

  return (
    <AppBar className={classes.topHeader}>
      <Box>
        <figure>
          <img
            // src={}
            alt="Vestcasa"
          />
          <figcaption>Vestcasa</figcaption>
        </figure>
      </Box>
      <Box className={classes.userHeaderBox}>
        <p>{moment}</p>
        {/* <p>{moment0}</p> */}

        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={clearLocalStorage}
        >
          <Link to="/">
            <A>Sair</A>
          </Link>
        </Button>
      </Box>
    </AppBar>
  );
};
