import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  contentHeader: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space",
    "@media (min-width: 768px)": {
      // justifyContent: "space-between",
      flexDirection: "row",
      // padding: "1rem 2rem",
    },
  },
  dashboardSearch: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    margin: "1rem 0",
    "@media (min-width: 768px)": {
      justifyContent: "space-between",
      flexDirection: "row",
      // padding: "1rem 2rem",
    },
  },
  selectedButtons: {
    backgroundColor: "var(--white)",
    border: "1px solid var(--externalDashboardGreen)",
    borderRadius: "1rem",
    color: "#1A202C",
    marginBottom: "1rem",
    padding: "0.5rem 2rem",
    "&:hover": {
      backgroundColor: "var(--hoverGreen)",
    },
    "@media (min-width: 768px)": {
      margin: "0 1rem",
      marginBottom: "0rem",
    },
  },
}));

export const HeaderDashContent = () => {
  // STYLES:
  const classes = useStyles();

  return (
    <Box className={classes.contentHeader}>
      <Box className={classes.dashboardSearch}>
        <Button className={classes.selectedButtons}>Selecionado</Button>
        <Button className={classes.selectedButtons}>Filtro</Button>
        <Button className={classes.selectedButtons}>Favoritos</Button>
      </Box>
    </Box>
  );
};
