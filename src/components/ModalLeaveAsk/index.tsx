import { useOpenModal } from "../../providers/ModalOpen";

import { Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface IModalProp {
  open: boolean;
}

const useStyles = makeStyles(() => ({
  buttonBack: {
    color: "var(--externalDashboardGreen)",
    "&:hover": {
      backgroundColor: "var(--white)",
    },
  },
  buttonLeave: {
    backgroundColor: "var(--externalDashboardGreen)",
    color: "var(--white)",
    filter: "drop-shadow(0.7rem 0.7rem 0.1rem var(--alphaGray))",
    fontSize: "1rem",
    marginBottom: "1rem",
    "&:hover": {
      backgroundColor: "var(--hoverGreen)",
    },
  },
  paper: {
    color: "var(--externalDashboardGreen)",
    display: "flex",
    flexDirection: "column",
    height: "50vh",
    minWidth: "90vw",
    maxWidth: "90vw",
    padding: "1rem",
    textAlign: "center",
    "@media (min-width: 768px)": {
      minWidth: "30vw",

      width: "30vw",
    },
  },
  typo: {
    fontSize: "2rem",
    fontWeight: 500,
    marginBottom: "2rem",
    "@media (min-width: 768px)": {
      fontSize: "2.5rem",
    },
  },
}));

export const ModalLeaveAsk = (prop: IModalProp) => {
  const { open } = prop;

  //   LOGOUT:
  const clearLocalStorage = () => {
    console.log("churros");
    localStorage.removeItem("@SuperUserLoggedToken:cnpj");
    window.location.href = "/";
  };

  // PROVIDER:
  const { setOpen } = useOpenModal();

  // STYLES:
  const classes = useStyles(open);

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.typo}>
        Tem certeza que deseja sair?
      </Typography>

      <Button
        className={classes.buttonLeave}
        color="secondary"
        onClick={clearLocalStorage}
        variant="contained"
      >
        Sair
      </Button>
      <Button className={classes.buttonBack} onClick={() => setOpen(false)}>
        Voltar
      </Button>
    </Paper>
  );
};
