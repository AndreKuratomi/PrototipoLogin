import { useRef, useState } from "react";

import { Link } from "react-router-dom";

import { DateTimeMoment } from "../../utils";

import {
  AppBar,
  Button,
  Icon,
  Snackbar,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MuiAlert from "@material-ui/lab/Alert";
import { Box, FormControlLabel, Slide, Switch } from "@mui/material";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import { A, LeftBar } from "./styles";

const useStyles = makeStyles((hide) => ({
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
  asideHeader: {
    backgroundColor: "#009E4F",
    // marginTop: "4.3rem",
    right: "auto",
    position: "relative",
    zIndex: 2,
    width: "fit-content",
    transition: "all .5s ease-in-out",
    "@media (min-width: 768px)": {
      // marginTop: "5.75rem",
    },
  },
  asideHeaderButtonOpened: {
    color: "#000",
    backgroundColor: "#FFF",
    borderRadius: "1rem",
    position: "absolute",
    left: 0,
    top: "5rem",
    transition: "all .4s ease-in-out",
    zIndex: 3,
    "@media (min-width: 600px)": {
      top: "3.5rem",
    },
  },
  asideHeaderButtonClosed: {
    color: "#000",
    backgroundColor: "#FFF",
    borderRadius: "1rem",
    position: "absolute",
    left: "5.1rem",
    top: "5rem",
    transition: "all .5s ease-in-out",
    zIndex: 3,
    "@media (min-width: 600px)": {
      left: "9.1rem",
      top: "3.5rem",
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
  boxDocuments: {
    backgroundColor: "#aaa",
    width: "77vw",
    height: "77vw",
    position: "relative",
    zIndex: 1,
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

  // ASIDEMENU:
  // const { value } = props;
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  const [value, setValue] = useState(0);

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
        <Box className={classes.userHeaderBox}>
          <p>{moment}</p>

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

      <Box sx={{ display: "flex", width: "100vw" }}>
        {!!hide ? (
          <>
            <Box
              sx={{
                // overflow: "hidden",
                width: "23vw",
              }}
              // ref={containerRef}
            >
              <Box>
                <Slide
                  direction="right"
                  in={hide}
                  container={containerRef.current}
                >
                  <ArrowCircleLeftIcon
                    className={classes.asideHeaderButtonClosed}
                    onClick={handleMenu}
                  />
                </Slide>
                {/* <ArrowCircleRightIcon
                className={classes.asideHeaderButtonOpened}
                onClick={handleMenu}
              />
            )} */}
                <Slide
                  direction="right"
                  in={hide}
                  container={containerRef.current}
                >
                  <AppBar className={classes.asideHeader}>
                    <Tabs orientation="vertical" value={value}>
                      <Tab
                        className={classes.tab}
                        label="Item 1"
                        {...a11yProps(0)}
                      />
                      <Tab
                        className={classes.tab}
                        label="Item 2"
                        {...a11yProps(1)}
                      />
                      <Tab
                        className={classes.tab}
                        label="Item 3"
                        {...a11yProps(2)}
                      />
                      <Tab
                        className={classes.tab}
                        label="Item 4"
                        {...a11yProps(3)}
                      />
                      <Tab
                        className={classes.tab}
                        label="Item 5"
                        {...a11yProps(4)}
                      />
                      <Tab
                        className={classes.tab}
                        label="Item 6"
                        {...a11yProps(5)}
                      />
                      <Tab
                        className={classes.tab}
                        label="Item 7"
                        {...a11yProps(6)}
                      />
                      <Tab
                        className={classes.tab}
                        label="Item 8"
                        {...a11yProps(7)}
                      />
                      <Tab
                        className={classes.tab}
                        label="Item 9"
                        {...a11yProps(8)}
                      />
                      <Tab
                        className={classes.tab}
                        label="Item 10"
                        {...a11yProps(9)}
                      />
                      <Tab
                        className={classes.tab}
                        label="Item 11"
                        {...a11yProps(10)}
                      />
                      <Tab
                        className={classes.tab}
                        label="Item 12"
                        {...a11yProps(11)}
                      />
                    </Tabs>
                  </AppBar>
                </Slide>
              </Box>
            </Box>
            <Slide direction="left" in={hide} container={containerRef.current}>
              <Box sx={{ backGroundColor: "#0F0", width: "77vw" }}>
                OI
                <Box className={classes.boxDocuments}>1</Box>
                <Box className={classes.boxDocuments}>2</Box>
                <Box className={classes.boxDocuments}>3</Box>
                <Box className={classes.boxDocuments}>4</Box>
                <Box className={classes.boxDocuments}>5</Box>
              </Box>
            </Slide>
          </>
        ) : (
          <>
            {/* <Slide direction="right" in={hide} container={containerRef.current}> */}
            {/* ELABORAR UM FOR QUE REDUZA O NÚMERO DA LARGURA QUE NEM NO EXERCÍCIO DO CHATBOT*/}
            <ArrowCircleRightIcon
              className={classes.asideHeaderButtonOpened}
              onClick={handleMenu}
            />
            {/* </Slide> */}

            <Slide direction="right" in={hide} container={containerRef.current}>
              <AppBar className={classes.asideHeader}>
                <Tabs orientation="vertical" value={value}>
                  <Tab
                    className={classes.tab}
                    label="Item 1"
                    {...a11yProps(0)}
                  />
                  <Tab
                    className={classes.tab}
                    label="Item 2"
                    {...a11yProps(1)}
                  />
                  <Tab
                    className={classes.tab}
                    label="Item 3"
                    {...a11yProps(2)}
                  />
                  <Tab
                    className={classes.tab}
                    label="Item 4"
                    {...a11yProps(3)}
                  />
                  <Tab
                    className={classes.tab}
                    label="Item 5"
                    {...a11yProps(4)}
                  />
                  <Tab
                    className={classes.tab}
                    label="Item 6"
                    {...a11yProps(5)}
                  />
                  <Tab
                    className={classes.tab}
                    label="Item 7"
                    {...a11yProps(6)}
                  />
                  <Tab
                    className={classes.tab}
                    label="Item 8"
                    {...a11yProps(7)}
                  />
                  <Tab
                    className={classes.tab}
                    label="Item 9"
                    {...a11yProps(8)}
                  />
                  <Tab
                    className={classes.tab}
                    label="Item 10"
                    {...a11yProps(9)}
                  />
                  <Tab
                    className={classes.tab}
                    label="Item 11"
                    {...a11yProps(10)}
                  />
                  <Tab
                    className={classes.tab}
                    label="Item 12"
                    {...a11yProps(11)}
                  />
                </Tabs>
              </AppBar>
            </Slide>
            {/* <Slide direction="left" in={hide} container={containerRef.current}> */}
            <Box sx={{ width: "100vw" }}>
              TCHAU
              <Box className={classes.boxDocuments}>1</Box>
              <Box className={classes.boxDocuments}>2</Box>
              <Box className={classes.boxDocuments}>3</Box>
              <Box className={classes.boxDocuments}>4</Box>
              <Box className={classes.boxDocuments}>5</Box>
            </Box>
            {/* </Slide> */}
          </>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
