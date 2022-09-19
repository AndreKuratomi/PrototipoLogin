import { Link, useNavigate } from "react-router-dom";

import { getDashboards } from "../../utils";

import { Box, Button, Card, CardActions, CardMedia } from "@material-ui/core";
import { StarBorderRounded, StarRounded } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";

import { useDashboardVisited } from "../../providers/DashboardVisited";
import { useStarFavorite } from "../../providers/StarFavorite";

interface IDashboard {
  id: number;
  category: string;
  name: string;
  url: string;
}

interface IElt {
  id: number;
  category: string;
  name: string;
  url: string;
}

interface IProps {
  //MAS POR QUE ASSIM FUNCIONA E ACIMA NÃO????
  elt: any;
  // id: number;
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
    margin: "1rem 0",
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

export const CardBI = ({ elt }: IProps) => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { setCardId, clicked, handleFavorite, handleDesFavorite } =
    useStarFavorite();

  const { visited, setVisited } = useDashboardVisited();
  console.log(visited);
  // localStorage.setItem("@LastVisitedList", JSON.stringify(visited));

  // TENTATIVA INDIVIDUALIZAR:
  // const visited: Object[] = [];
  // URLs:
  let dashboards = getDashboards();

  // INCLUSÃO DE VISITADOS:
  const handleLastVisited = async (num: IDashboard, func: () => void) => {
    func();
    const dashboard = dashboards.find((elem: Object) => elem === num);
    if (dashboard) {
      console.log(visited);
      if (!visited.includes(num)) {
        if (visited.length < 3) {
          // const last_visited = JSON.parse(
          //   localStorage.getItem("@LastVisitedList") || "null"
          // );
          setVisited([...visited, dashboard]);
          console.log(visited);

          localStorage.setItem("@LastVisitedList", JSON.stringify(visited));
        } else {
          // const last_visited = JSON.parse(
          //   localStorage.getItem("@LastVisitedList") || "null"
          // );
          // let filtro = setVisited(filter(
          //   (elt: Object) => elt !== visited[0]
          // );
          // visited.push(dashboard);
          setVisited([...visited, dashboard]);
          visited.shift();
          localStorage.setItem("@LastVisitedList", JSON.stringify(visited));

          // return filtro;
        }
      }
    }
  };

  // ENVIO URL:
  const sendURL = () => {
    const urlFound: IElt = dashboards.find(
      (elem: IElt) => elem.url === elt.url
    );
    localStorage.setItem("@pbi_url: PowerBI URL", JSON.stringify(urlFound.url));
  };

  return (
    <Card className={classes.cards} key={elt.id}>
      <Box className={classes.cardsContent}>
        {clicked ? ( //INDIVIDUALIZAR O EFEITO DO CLIQUE!
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
        <a target="_blanck" href="/dashboardsingle">
          <Button
            className={classes.button}
            onClick={() => handleLastVisited(elt, sendURL)}
          >
            {elt.name}
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};
