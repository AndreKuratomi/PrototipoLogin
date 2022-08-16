import { CardBI } from "../CardBI";

import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// import LoremDashboard from "../../assets/figma_imgs/LoremDashboard.png";

const useStyles = makeStyles(() => ({
  dashboardList: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: "1rem",
    // width: "10rem",
    "@media (min-width: 768px)": {
      justifyContent: "space-between",
      flexDirection: "row",
      // padding: "1rem 2rem",
    },
  },
}));

export const CardsBIList = () => {
  // STYLES:
  const classes = useStyles();

  return (
    <Box className={classes.dashboardList}>
      <CardBI description={"1"} />
      <CardBI description={"2"} />
      <CardBI description={"3"} />
      <CardBI description={"4"} />
      <CardBI description={"5"} />
      <CardBI description={"6"} />
    </Box>
  );
};
