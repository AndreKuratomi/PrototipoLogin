import { Box, Button, Card, CardActions, CardMedia } from "@material-ui/core";
import { StarBorderRounded, StarRounded } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";

import { useDashboardVisited } from "../../providers/DashboardVisited";
import { useStarFavorite } from "../../providers/StarFavorite";

interface IDashboardItself {
  id: number;
  category: string;
  is_favorite: boolean;
  name: string;
  url: string;
  created_at: string;
  last_clicked: string;
  supplier_owner: string;
  // elt: IDashboardItself;
}

// interface IDashboard {
//   id: number;
//   category: string;
//   name: string;
//   url: string;
// }

// interface IElt {
//   id: number;
//   is_favorite: boolean;
//   category: string;
//   name: string;
//   url: string;
//   supplier_owner: string;
// }

interface CardBIProps {
  elt: IDashboardItself;
  // key: number;
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
    height: "17.5rem",
    "@media (min-width: 768px)": {
      width: "20rem",
    },
  },
  starIcon: {
    color: "var(--yellow)",
    position: "absolute",
    marginRight: "0vw",
    "@media (min-width: 768px)": {
      marginRight: "0vw",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export const CardBI = (props: CardBIProps) => {
  //PROPS:
  const { elt } = props;

  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { handleLastVisited } = useDashboardVisited();
  const { handleStarClicked } = useStarFavorite();

  return (
    <Card className={classes.cards} key={elt.id}>
      <Box className={classes.cardsContent}>
        <Box onClick={() => handleStarClicked(elt.id)}>
          {elt.is_favorite ? (
            <StarRounded className={classes.starIcon} />
          ) : (
            <StarBorderRounded className={classes.starIcon} />
          )}
        </Box>
        <CardMedia
          component="iframe"
          src={elt.url}
          className={classes.imagePowerBI}
        />
      </Box>
      <CardActions className={classes.cardAction}>
        {window.innerWidth < 768 ? (
          <a target="_self" href="/dashboardsingle">
            <Button
              className={classes.button}
              onClick={() => handleLastVisited(elt)}
            >
              {elt.name}
            </Button>
          </a>
        ) : (
          <a target="_blanck" href="/dashboardsingle">
            <Button
              className={classes.button}
              onClick={() => handleLastVisited(elt)}
            >
              {elt.name}
            </Button>
          </a>
        )}
      </CardActions>
    </Card>
  );
};
