import { useState } from "react";

import { Link } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MuiAlert from "@material-ui/lab/Alert";

import { A } from "./styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    backgroundColor: "#009E4F",
    borderRadius: "10%",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    width: "15rem",
  },
  textField: {
    backgroundColor: "#FFF",
    borderRadius: "1rem",
    padding: "1rem",
    "& .MuiInputLabel-formControl": {
      left: "1rem",
      top: ".25rem",
    },
  },
  button: {
    marginTop: "1rem",
  },
  box: {
    color: "#FFF",
    textDecoration: "none",
    marginTop: "1rem",
    textAlign: "center",
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const FormLogin = () => {
  const [open, setOpen] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });

  const handleClick = (newState) => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const successButton = () => {
    return (
      <>
        {/* {banco.sex == female ? (
        <> */}
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Seja bem-vinda, Fulana!{/* {} */}
          </Alert>
        </Snackbar>
        {/* </>
      ) : (
        <> */}
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Seja bem-vindo, Fulano!{/* {} */}
          </Alert>
        </Snackbar>

        {/* </>
      )} */}
      </>
    );
  };

  const warnButton = (
    <>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          AVISO: Sua assinatura vence em X dias! Fique atento!
        </Alert>
      </Snackbar>
    </>
  );

  const failButton = (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          AVISO: Sua assinatura está vencida desde DATA! Contate setor
          responsável!
        </Alert>
      </Snackbar>
    </>
  );

  const formSchema = yup.object().shape({
    username: yup.string().required("Usuário obrigatório!"),
    password: yup.string().required("Senha obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    //aqui virá a requisição
    console.log(data);
    // successButton();
    // <Snackbar
    //   open={open}
    //   anchorOrigin={{ vertical: "top", horizontal: "right" }}
    //   autoHideDuration={3000}
    //   onClose={handleClose}
    //   vertical="top"
    //   horizontal="right"
    // >
    //   <Alert onClose={handleClose} severity="success">
    //     EM TESTE
    //   </Alert>
    // </Snackbar>;
  };

  const classes = useStyles();

  return (
    <article>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={handleClose}
        vertical="top"
        horizontal="right"
      >
        <Alert onClose={handleClose} severity="success">
          EM TESTE
        </Alert>
      </Snackbar>
      ;
      <form
        onSubmit={handleSubmit(onSubmitFunction)}
        className={classes.formControl}
      >
        <div>
          <TextField
            className={classes.textField}
            label="Usuário"
            margin="normal"
            variant="standard"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </div>
        <div>
          <TextField
            className={classes.textField}
            label="Senha"
            type="password"
            margin="normal"
            variant="standard"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          className={classes.button}
          color="primary"
          size="large"
          onClick={handleClick}
        >
          Entrar
        </Button>
        <Box className={classes.box}>
          <Typography>Esqueceu a senha?</Typography>
          <Typography>
            Clique{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <A>aqui</A>
            </Link>
          </Typography>
        </Box>
      </form>
    </article>
  );
};
