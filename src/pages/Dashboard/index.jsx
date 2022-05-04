import { useRef, useState } from "react";

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
import { Box, FormControlLabel, Slide, Switch } from "@mui/material";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import { HeaderTop } from "../../components/HeaderTop";
import { SnackBarWelcome } from "../../components/SnackBarWelcome";

const useStyles = (hide = false) =>
  makeStyles({
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
    // asideHeaderOpened: {
    //   backgroundColor: "#009E4F",
    //   right: "auto",
    //   position: "relative",
    //   zIndex: 2,
    //   width: "4.5rem",
    //   // width: hide ? 0 : "4.5rem",
    // },
    // asideHeaderClosed: {
    //   backgroundColor: "#009E4F",
    //   right: "auto",
    //   // position: "relative", //?????????????!!!!!!!!!!
    //   zIndex: 2,
    //   width: 0,
    //   // width: hide ? 0 : "4.5rem",
    // },
    asideHeaderButtonClosed: {
      color: "#000",
      backgroundColor: "#FFF",
      borderRadius: "1rem",
      position: "absolute",
      // left: hide ? 0 : "3.4rem",
      left: 0,
      top: "4.65rem",
      // transition: "all .4s ease-in-out",
      zIndex: 3,
      "@media (min-width: 383px)": {
        top: "3.5rem",
      },
    },
    asideHeaderButtonOpened: {
      color: "#000",
      backgroundColor: "#FFF",
      borderRadius: "1rem",
      position: "absolute",
      // left: hide ? 0 : "3.4rem",
      left: "3.4rem",
      top: "4.65rem",
      // transition: "all .4s ease-in-out",
      zIndex: 3,
      "@media (min-width: 383px)": {
        top: "3.5rem",
      },
    },
    tab: {
      "& .MuiTab-wrapper": {
        alignItems: "start",
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
        maxWidth: "80vw",
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
      width: "39vw",
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
      width: "39vw",
      height: "20vh",
      margin: "1rem",
    },
  });

const Dashboard = () => {
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
  // console.log(classes);

  return (
    <>
      <SnackBarWelcome />

      <HeaderTop />

      <Box sx={{ display: "flex", width: "100vw" }}>
        {!!hide ? (
          <>
            <Box>
              <Slide
                direction="right"
                in={hide}
                container={containerRef.current}
              >
                <ArrowCircleLeftIcon
                  className={classes.asideHeaderButtonOpened}
                  onClick={handleMenu}
                />
              </Slide>
              <Slide
                direction="right"
                in={hide}
                container={containerRef.current}
              >
                <AppBar className={classes.asideHeaderOpened}>
                  {/* <AppBar className={classes(!hide).asideHeader}> */}
                  <Tabs
                    orientation="vertical"
                    value={value}
                    sx={{ width: "5rem" }}
                  >
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
            {/* <Slide direction="left" in={hide} container={containerRef.current}> */}
            <Box className={classes.boxDocumentsWithAsideOpened}>
              <Box className={classes.boxMenuWAMOpened}>1</Box>
              <Box className={classes.boxGraphicWAMOpened}>2</Box>
              <Box className={classes.boxTopWAMOpened}>3</Box>
              <Box className={classes.boxVendasSemanaWAMOpened}>4</Box>
              {/* <Box className={classes.box}>5</Box> */}
            </Box>
            {/* </Slide> */}
          </>
        ) : (
          <>
            <Box>
              {/* ELABORAR UM FOR QUE REDUZA O NÚMERO DA LARGURA QUE NEM NO EXERCÍCIO DO CHATBOT*/}
              {/* <Slide
                direction="left"
                in={hide}
                container={containerRef.current}
              > */}
              <ArrowCircleRightIcon
                className={classes.asideHeaderButtonClosed}
                onClick={handleMenu}
              />
              {/* </Slide> */}
              <Slide
                direction="right"
                in={hide}
                container={containerRef.current}
              >
                {/* <AppBar className={classes.asideHeaderClosed} sx={{ width: 0 }}> */}
                <AppBar className={classes(hide).asideHeader} sx={{ width: 0 }}>
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
              <Box className={classes.boxDocumentsWithAsideClosed}>
                <Box className={classes.boxMenuWAMClosed}>1</Box>
                <Box className={classes.boxGraphicWAMClosed}>2</Box>
                <Box className={classes.boxTopWAMClosed}>3</Box>
                <Box className={classes.boxVendasSemanaWAMClosed}>4</Box>
                {/* <Box className={classes.box}>5</Box> */}
              </Box>
              {/* </Slide> */}
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
