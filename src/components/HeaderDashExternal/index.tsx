import { InputSearch } from "../InputSearch";

import { AppBar, Box, CardMedia } from "@material-ui/core";

import { ExitToAppRounded } from "@mui/icons-material";

import { makeStyles } from "@material-ui/styles";

import LogoVestcasaNovo from "../../assets/figma_imgs/LogoVestcasaNovo.png";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "var(--white)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    position: "relative",
    "& .MuiPaper-elevation4": {
      boxShadow: "undefined",
    },
    "@media (min-width: 768px)": {
      justifyContent: "space-between",
      flexDirection: "row",
      padding: "0",
    },
  },
  imageLogo: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
    width: "10rem",
    "@media (min-width: 768px)": {
      width: "15rem",
    },
  },
  leaveIcon: {
    color: "var(--externalDashboardGreen)",
    position: "absolute",
    right: 0,
    top: 0,
  },
  // subHeader: {
  //   color: "var(--black)",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // },
}));

export const HeaderDashExternal = () => {
  // STYLES:
  const classes = useStyles();

  //   LOGOUT:
  const clearLocalStorage = () => {
    // clearTimeout(action);
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <AppBar className={classes.header} elevation={0} position="static">
      <CardMedia
        component="img"
        image={LogoVestcasaNovo}
        alt="logo vestcasa"
        className={classes.imageLogo}
      />

      {/* <Box className={classes.subHeader}> */}
      <InputSearch />
      {/* </Box> */}
      <ExitToAppRounded
        className={classes.leaveIcon}
        onClick={clearLocalStorage}
      />
    </AppBar>
  );
};
