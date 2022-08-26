import { InputSearch } from "../InputSearch";

import { AppBar, Box, CardMedia } from "@material-ui/core";
import { ExitToAppRounded } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";

import LogoVestcasaNovo from "../../assets/figma_imgs/LogoVestcasaNovo.png";

import { useOpenModal } from "src/providers/ModalOpen";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "var(--white)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    "@media (min-width: 768px)": {
      justifyContent: "space-between",
      flexDirection: "row",
      padding: "1rem 2rem",
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
  },
  subHeader: {
    color: "var(--black)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const HeaderDashExternal = () => {
  // PROVIDER:
  const { setOpen } = useOpenModal();

  // STYLES:
  const classes = useStyles();

  return (
    <AppBar className={classes.header} position="static">
      <CardMedia
        component="img"
        image={LogoVestcasaNovo}
        alt="logo vestcasa"
        className={classes.imageLogo}
      />

      <Box className={classes.subHeader}>
        <InputSearch />
        <ExitToAppRounded
          className={classes.leaveIcon}
          onClick={() => setOpen(true)}
        />
      </Box>
    </AppBar>
  );
};
