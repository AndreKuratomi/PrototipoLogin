import { Dispatch, SetStateAction, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { getDashboards } from "../../utils";

import { Box, Button, Card, CardActions, CardMedia } from "@material-ui/core";
import { StarBorderRounded, StarRounded } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";

import { useDashboardVisited } from "../../providers/DashboardVisited";
import { useStarFavorite } from "../../providers/StarFavorite";
import { useDashboard } from "src/providers/Dashboard";

interface IDashboard {
  id: number;
  category: string;
  name: string;
  url: string;
}

interface IElt {
  id: number;
  isFavorite: boolean;
  category: string;
  name: string;
  url: string;
}

interface IProps {
  //MAS POR QUE ASSIM FUNCIONA E ACIMA NÃO????
  elt: any;
  // state: boolean;
  // setState: Dispatch<SetStateAction<boolean>>;
  // id: number;
}

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: "var(--gray)",
    width: "83vw",
    "@media (min-width: 768px)": {
      width: "20rem",
    },
    "&:hover": {
      backgroundColor: "var(--gray)",
    },
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 0",
    "@media (min-width: 768px)": {
      margin: "1rem",
    },
  },
  cardAction: {
    padding: "0",
  },
  cardsContent: {
    maxHeight: "26vh",
    "@media (min-width: 768px)": {
      maxHeight: "180.5px",
    },
  },
  imagePowerBI: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
    width: "83vw",
    height: "13.5rem",
    "@media (min-width: 768px)": {
      width: "20rem",
    },
  },
  starIcon: {
    color: "var(--yellow)",
    position: "absolute",
    // marginRight: "0vw",
    marginLeft: "76vw",
    "@media (min-width: 768px)": {
      // marginRight: "0vw",
      marginLeft: "15.5vw",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export const CardBI = ({ elt }: IProps) => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { dashboard } = useDashboard();
  const { handleLastVisited } = useDashboardVisited();
  const { handleFavorite, handleDesFavorite } = useStarFavorite();

  // TENTATIVA INDIVIDUALIZAR:

  // ENVIO URL:
  const sendURL = () => {
    const urlFound: any = dashboard.find((elem: any) => elem.url === elt.url);
    localStorage.setItem("@pbi_url: PowerBI URL", JSON.stringify(urlFound.url));
  };

  return (
    <Card className={classes.cards} key={elt.id}>
      <Box className={classes.cardsContent}>
        {elt.isFavorite ? ( //INDIVIDUALIZAR O EFEITO DO CLIQUE!
          <Box onClick={() => handleDesFavorite(elt)}>
            <StarRounded className={classes.starIcon} />
          </Box>
        ) : (
          <Box onClick={() => handleFavorite(elt)}>
            <StarBorderRounded className={classes.starIcon} />
          </Box>
        )}
        <CardMedia
          component="iframe"
          src={elt.url}
          // alt="lorem dashboard"
          className={classes.imagePowerBI}
        />
      </Box>
      <CardActions className={classes.cardAction}>
        {window.innerWidth < 768 ? (
          <a target="_self" href="/dashboardsingle">
            <Button
              className={classes.button}
              onClick={() => handleLastVisited(elt, sendURL)}
            >
              {elt.name}
            </Button>
          </a>
        ) : (
          <a target="_blanck" href="/dashboardsingle">
            <Button
              className={classes.button}
              onClick={() => handleLastVisited(elt, sendURL)}
            >
              {elt.name}
            </Button>
          </a>
        )}
      </CardActions>
    </Card>
  );
};
