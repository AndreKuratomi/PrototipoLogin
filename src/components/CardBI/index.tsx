import { Button, Card, CardActions, CardMedia } from "@material-ui/core";

import { StarBorderRounded, StarRounded } from "@mui/icons-material";

import { makeStyles } from "@material-ui/styles";

import LoremDashboard from "../../assets/figma_imgs/LoremDashboard.png";

interface IProps {
  description: string;
}

const useStyles = makeStyles(() => ({
  cards: {
    marginBottom: "1rem",
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
}));

export const CardBI = ({ description }: IProps) => {
  // STYLES:
  const classes = useStyles();

  return (
    <Card className={classes.cards}>
      <CardMedia
        component="img"
        image={LoremDashboard}
        alt="lorem dashboard"
        className={classes.imagePowerBI}
      />
      <CardActions>
        <Button>{description}</Button>
      </CardActions>
    </Card>
  );
};
