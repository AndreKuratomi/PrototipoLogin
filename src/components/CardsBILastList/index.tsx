import { CardBI } from "../CardBI";

import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { useStarFavorite } from "src/providers/StarFavorite";
import { useEffect } from "react";

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
    // width: "10rem",
    "@media (min-width: 768px)": {
      flexDirection: "row",
      // padding: "1rem 2rem",
    },
  },
}));

export const CardsBILastList = () => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  // const { lastVisited } = useStarFavorite();

  const visited = JSON.parse(
    localStorage.getItem("@LastVisitedList") || "null"
  );
  console.log(visited);

  return (
    <Box className={classes.dashboardLastList}>
      {visited.map((elt: any) => (
        <CardBI elt={elt} key={elt.id} />
      ))}
    </Box>
  );
};
