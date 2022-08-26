import { useOpenModal } from "../../providers/ModalOpen";

import { Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((open) => ({
  paper: {
    display: "block",
    // display: ${(props) => props.open ? (display: "block") : (display: "none")},
  },
}));

export const ModalLeaveAsk = ({ open }: any) => {
  //   LOGOUT:
  const clearLocalStorage = () => {
    console.log("churros");
    localStorage.clear();
    window.location.href = "/";
  };

  // PROVIDER:
  const { setOpen } = useOpenModal();

  // STYLES:
  const classes = useStyles(open);

  return (
    <Paper className={classes.paper}>
      <Typography>Tem certeza que deseja sair?</Typography>
      <Button onClick={clearLocalStorage}>Sair</Button>
      <Button onClick={() => setOpen(false)}>Voltar</Button>
    </Paper>
  );
};
