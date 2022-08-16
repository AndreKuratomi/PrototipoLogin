import { Box, Button, Card, CardActions, CardMedia } from "@material-ui/core";
import { StarBorderRounded, StarRounded } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";

import { useStarFavorite } from "../../providers/StarFavorite";

import LoremDashboard from "../../assets/figma_imgs/LoremDashboard.png";

interface IProps {
  description: string;
}

const useStyles = makeStyles(() => ({
  cards: {
    marginBottom: "1rem",
  },
  cardsContent: {
    display: "flex",
  },
  imagePowerBI: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
    width: "16rem",
    "@media (min-width: 768px)": {
      width: "20rem",
    },
  },
  starIcon: {
    color: "var(--yellow)",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export const CardBI = ({ description }: IProps) => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { clicked, starClicked, starUnClicked } = useStarFavorite();

  const handleClick = (func: () => void) => {
    // console.log(e);
    func();
  };

  return (
    <Card className={classes.cards}>
      <Box className={classes.cardsContent}>
        <CardMedia
          component="img"
          image={LoremDashboard}
          alt="lorem dashboard"
          className={classes.imagePowerBI}
        />

        {clicked ? ( //INDIVIDUALIZAR O EFEITO DO CLIQUE!
          <StarRounded
            className={classes.starIcon}
            onClick={() => handleClick(starUnClicked)}
          />
        ) : (
          <StarBorderRounded
            className={classes.starIcon}
            onClick={() => handleClick(starClicked)}
          />
        )}
      </Box>
      <CardActions>
        <Button>{description}</Button>
      </CardActions>
    </Card>
  );
};
