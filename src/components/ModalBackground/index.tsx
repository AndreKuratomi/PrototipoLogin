import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface IProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((open) => ({
  modal: {
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    // display: ${(props) => props.open ? (display: "block") : (display: "none")},
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 900,
  },
}));

export const ModalBackground = ({ children }: IProps) => {
  const classes = useStyles();

  return <Box className={classes.modal}>{children}</Box>;
};
