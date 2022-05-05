import { useState } from "react";

import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import { useTextInput } from "../../providers/TextInput";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const SnackBarWelcome = () => {
  const { text } = useTextInput();

  const [open, setOpen] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });

  //   const handleClick = (newState) => {
  //     setOpen(true);
  //   };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Seja bem-vindo, {text}!
        </Alert>
      </Snackbar>
    </>
  );
};
