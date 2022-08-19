import { Link, useNavigate } from "react-router-dom";

import { getDashboards } from "../../utils";

import { Box, Button, Card, CardActions, CardMedia } from "@material-ui/core";
import { StarBorderRounded, StarRounded } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";

import { useStarFavorite } from "../../providers/StarFavorite";

import LoremDashboard from "../../assets/figma_imgs/LoremDashboard.png";

interface IProps {
  description: string;
  link: string;
}

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: "var(--gray)",
    width: "16rem",
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
    marginBottom: "1rem",
  },
  cardAction: {
    padding: "0",
  },
  cardsContent: {
    maxHeight: "142.5px",
    "@media (min-width: 768px)": {
      maxHeight: "180.5px",
    },
  },
  imagePowerBI: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
    width: "16rem",
    height: "13.5rem",
    "@media (min-width: 768px)": {
      width: "20rem",
    },
  },
  starIcon: {
    color: "var(--yellow)",
    position: "absolute",
    marginLeft: "6.5rem",
    "@media (min-width: 768px)": {
      marginLeft: "18.5rem",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export const CardBI = ({ description, link }: IProps) => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { clicked, starClicked, starUnClicked } = useStarFavorite();

  const handleClick = (func: () => void) => {
    // console.log(e);
    func();
  };

  // URLs:
  let dashboards = getDashboards();

  // ENVIO URL:
  const sendURL = () => {
    const urlFound: any = dashboards.find((elem: any) => elem.url === link);
    localStorage.setItem("@pbi_url: PowerBI URL", JSON.stringify(urlFound.url));
  };

  return (
    <Card className={classes.cards}>
      <Box className={classes.cardsContent}>
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
        <CardMedia
          component="iframe"
          src={link}
          // alt="lorem dashboard"
          className={classes.imagePowerBI}
        />
      </Box>
      <CardActions className={classes.cardAction}>
        <Link to="/dashboardsingle">
          <Button className={classes.button} onClick={sendURL}>
            {/* COMO MANDAR LINK VIA PROPS PARA PÁGINA DASHBOARDSINGLE???*/}
            {description}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
