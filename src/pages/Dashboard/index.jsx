import { useState } from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  Snackbar,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MuiAlert from "@material-ui/lab/Alert";
import { DateTimePicker } from "@material-ui/pickers";

import { A } from "./styles";

const useStyles = makeStyles((theme) => ({
  topHeader: {
    width: "76rem", // USAR PROP DE ASIDE HEADER PARA SEMPRE ACOMPANHÁ-LO
    // height: "4.35rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "end",
    padding: "0 1rem",
  },
  asideHeader: {
    backgroundColor: "#009E4F",
    width: "fit-content",
    right: "auto",
  },
  textField: {
    backgroundColor: "#FFF",
    padding: "0.35rem",
    width: "9.5rem",
    // height: "", USAR PROP DA IMAGE DO LOGO PARA SEMPRE ACOMPANHÁ-LA
    "& .MuiFormControl-marginNormal": {
      margin: 0,
    },
    "& .MuiInputLabel-formControl": {
      left: "1rem",
      top: ".25rem",
    },
  },
  tab: {
    "& .MuiTab-wrapper": {
      alignItems: "start",
    },
  },
  userHeaderBox: {
    display: "flex",
  },
  button: {
    backgroundColor: "#00f",
    margin: "0.5rem",
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Dashboard = () => {
  const [open, setOpen] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });

  const handleClick = (newState) => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [date, setDate] = useState(new Date());

  const classes = useStyles();

  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Seja bem-vindo, X!
        </Alert>
      </Snackbar>

      <AppBar className={classes.topHeader}>
        <Button className={classes.button} color="primary" variant="contained">
          <A>Hide</A>
        </Button>
        <Box className={classes.userHeaderBox}>
          <p>Quarta-feira, 27/04/2022 - 16:48:00</p>
          {/* <DateTimePicker autoOk ampm={false} value={date} onChange={setDate} /> */}

          <Button
            className={classes.button}
            color="primary"
            variant="contained"
          >
            <Link to="/">
              <A>Sair</A>
            </Link>
          </Button>
        </Box>
      </AppBar>
      <AppBar className={classes.asideHeader}>
        <Box>
          <figure>
            <img
              // src={}
              alt="Vestcasa"
            />
            <figcaption>Vestcasa</figcaption>
          </figure>
        </Box>
        <TextField
          className={classes.textField}
          label="Pesquisar"
          variant="standard"
        ></TextField>
        <Tabs orientation="vertical">
          <Tab className={classes.tab} label="Item 1" />
          <Tab className={classes.tab} label="Item 2" />
          <Tab className={classes.tab} label="Item 3" />
          <Tab className={classes.tab} label="Item 4" />
          <Tab className={classes.tab} label="Item 5" />
          <Tab className={classes.tab} label="Item 6" />
          <Tab className={classes.tab} label="Item 7" />
          <Tab className={classes.tab} label="Item 8" />
          <Tab className={classes.tab} label="Item 9" />
          <Tab className={classes.tab} label="Item 10" />
        </Tabs>
      </AppBar>
      {/* <h1>Dashboard</h1> */}
    </>
  );
};

export default Dashboard;
