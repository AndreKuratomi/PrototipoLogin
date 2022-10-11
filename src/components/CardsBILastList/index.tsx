import { CardBI } from "../CardBI";

import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { useDashboardVisited } from "src/providers/DashboardVisited";

interface IElem {
  id: number;
  category: string;
  name: string;
  url: string;
}

const useStyles = makeStyles(() => ({
  dashboardLastList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginBottom: "1rem",
    "@media (min-width: 768px)": {
      flexDirection: "row",
    },
  },
}));

export const CardsBILastList = () => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { lastVisited } = useDashboardVisited();

  return (
    <Box className={classes.dashboardLastList}>
      {lastVisited.map((elt: any) => (
        <CardBI elt={elt} key={elt.id} />
      ))}
    </Box>
  );
};
