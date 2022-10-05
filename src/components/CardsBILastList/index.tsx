import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { CardBI } from "../CardBI";

import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { useStarFavorite } from "src/providers/StarFavorite";
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
  const { lastVisited, setLastVisited } = useDashboardVisited();

  // console.log(lastVisited);
  // setLastVisited(
  //   lastVisited.sort((a: any, b: any) => {
  //     return a.last_clicked.localeCompare(b.last_clicked).reverse();
  //   })
  // );

  return (
    <Box className={classes.dashboardLastList}>
      {lastVisited.map((elt: any) => (
        <CardBI elt={elt} key={elt.id} />
        // <CardBI elt={elt} key={elt.last_clicked} />
      ))}
    </Box>
  );
  // }
};
