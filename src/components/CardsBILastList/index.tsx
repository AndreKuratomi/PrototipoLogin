import { CardBI } from "../CardBI";

import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  dashboardLastList: {
    display: "flex",
    flexDirection: "column",
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

export const CardsBILastList = () => {
  // STYLES:
  const classes = useStyles();

  return (
    <Box className={classes.dashboardLastList}>
      <CardBI description={"1"} />
      <CardBI description={"2"} />
      <CardBI description={"3"} />
    </Box>
  );
};
