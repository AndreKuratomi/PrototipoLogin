import { useRef, useState } from "react";

import { Link } from "react-router-dom";

import { DateTimeMoment } from "../../utils";

import {
  AppBar,
  Button,
  Snackbar,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MuiAlert from "@material-ui/lab/Alert";
import { Box, FormControlLabel, Slide, Switch } from "@mui/material";

import { A, LeftBar } from "./styles";

const useStyles = makeStyles((hide) => ({
  topHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem",
    // paddingLeft: hide ? "11rem" : "1rem",
  },
  asideHeader: {
    backgroundColor: "#009E4F",
    marginTop: "4.3rem",
    right: "auto",
    position: "absolute",
    zIndex: 0,
    width: "fit-content",
    transition: "all .5s ease-in-out",
  },
  asideHeaderButton1: {
    backgroundColor: "#00f",
    margin: "0.5rem",
    position: "absolute",
    left: "120px",
    top: "45px",
    zIndex: 1,
  },
  asideHeaderButton2: {
    backgroundColor: "#00f",
    margin: "0.5rem",
    position: "absolute",
    left: "-10px",
    top: "45px",
    zIndex: 1,
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
      marginLeft: "1rem",
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
  // CARD BOAS-VINDAS:
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

  // DATA E HORA:
  let moment = DateTimeMoment();

  // MOSTRAR/ESCONDER ASIDEMENU:
  const [hide, setHide] = useState(false);
  const containerRef = useRef(null); //O QUE USEREF FAZ???
  const handleMenu = () => {
    setHide((prev) => !prev);
  };

  // STYLES:
  const classes = useStyles(hide);

  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Seja bem-vindo, X!
        </Alert>
      </Snackbar>

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
        {/* {hide === true ? (
          <Button
            className={classes.asideHeaderButton2}
            color="primary"
            variant="contained"
            onClick={handleMenu}
          >
            <A>Menu</A>
          </Button>
        ) : (
          <Button
            className={classes.asideHeaderButton1}
            color="primary"
            variant="contained"
            onClick={handleMenu}
          >
            <A>Hide</A>
          </Button>
        )} */}
        <Box className={classes.userHeaderBox}>
          <p>{moment}</p>
          {/* <p>Quarta-feira, 27/04/2022 - 16:48:00</p> */}
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
      <Box
        sx={{
          // height: 180,
          // width: 240,
          // display: "flex",
          // padding: 2,
          // borderRadius: 1,
          // bgcolor: (theme) =>
          //   theme.palette.mode === "light" ? "grey.100" : "grey.900",
          marginTop: "5rem",
          overflow: "hidden",
        }}
        ref={containerRef}
      >
        <Box
        //  sx={{ width: 200 }}
        >
          {/* <FormControlLabel
            control={<Switch checked={hide} onChange={handleMenu} />}
            label="Show from target"
          // /> */}
          <LeftBar
            hide={hide}
            // control={}
          >
            <Slide direction="right" in={hide} container={containerRef.current}>
              {/* {icon} */}
              <AppBar className={classes.asideHeader}>
                <Tabs orientation="vertical" value={""}>
                  {/* VERIFICAR CONSOLE.LOG! children?*/}
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
                  <Tab className={classes.tab} label="Item 11" />
                  <Tab className={classes.tab} label="Item 12" />
                </Tabs>
              </AppBar>
            </Slide>
          </LeftBar>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
