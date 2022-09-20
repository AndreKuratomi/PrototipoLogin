import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { CardBI } from "../CardBI";

import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { useStarFavorite } from "src/providers/StarFavorite";

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

  const last_visited = JSON.parse(
    localStorage.getItem("@LastVisitedList") || "null"
  );

  console.log(last_visited);

  return (
    <Box className={classes.dashboardLastList}>
      {last_visited.map(
        (
          elt: any
          // state: boolean,
          // setState: Dispatch<SetStateAction<boolean>>
        ) => (
          <CardBI
            elt={elt}
            key={elt.id}
            // state={clicked}
            // setState={setClicked}
          />
        )
      )}
    </Box>
  );
  // }
};
