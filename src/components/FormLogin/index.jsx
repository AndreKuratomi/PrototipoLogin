import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "../../service/api";

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
import { useTextInput } from "../../providers/TextInput";

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

  const { text, setUsername } = useTextInput();

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

  const navigate = useNavigate();

  const onSubmitFunction = (data) => {
    console.log(text);

    navigate("/dashboard");

    // api
    //   .post("/login", data)
    //   .then((response) => {
    //     const { token, user } = response.data;

    //     setAuthenticated(true);

    //     const now = Date.now();
    //     let delta = user.signature.deadline - now;

    //     // WARNING
    //     if (delta <= 15) {
    //       <Snackbar
    //         open={open}
    //         anchorOrigin={{ vertical: "top", horizontal: "right" }}
    //         autoHideDuration={6000}
    //         onClose={handleClose}
    //       >
    //         <Alert onClose={handleClose} severity="warning">
    //           AVISO: Sua assinatura vence em {delta} dias! Fique atento!
    //         </Alert>
    //       </Snackbar>;
    //     }

    //     if (delta < 0) {
    //       <Snackbar
    //         open={open}
    //         anchorOrigin={{ vertical: "top", horizontal: "right" }}
    //         autoHideDuration={6000}
    //         onClose={handleClose}
    //       >
    //         <Alert onClose={handleClose} severity="error">
    //           AVISO: Sua assinatura está vencida desde {user.signature.deadline}
    //           ! Contate setor responsável!
    //         </Alert>
    //       </Snackbar>;
    //     }

    //     // SUCCESS
    //     if (user.sex === "female") {
    //       <Snackbar
    //         open={open}
    //         anchorOrigin={{ vertical: "top", horizontal: "right" }}
    //         autoHideDuration={3000}
    //         onClose={handleClose}
    //       >
    //         <Alert onClose={handleClose} severity="success">
    //           Seja bem-vinda, {user.name}! //
    //         </Alert>
    //       </Snackbar>;
    //     }
    //     <Snackbar
    //       open={open}
    //       anchorOrigin={{ vertical: "top", horizontal: "right" }}
    //       autoHideDuration={3000}
    //       onClose={handleClose}
    //     >
    //       <Alert onClose={handleClose} severity="success">
    //         Seja bem-vindo, {user.name}! //
    //       </Alert>
    //     </Snackbar>;
    //   })
    //   .catch((err) => {
    //     // ERROR
    //     <Snackbar
    //       open={open}
    //       anchorOrigin={{ vertical: "top", horizontal: "right" }}
    //       autoHideDuration={3000}
    //       onClose={handleClose}
    //     >
    //       <Alert onClose={handleClose} severity="error">
    //         AVISO: Dados incorretos ou Usuário não cadastrado! Verificar dados
    //         digitados!
    //       </Alert>
    //     </Snackbar>;
    //     // if (usuário não cadastrado) { PRECISA OU ESTÁ SUBENTENDIDO NO DE CIMA?
    //     //   <Snackbar
    //     //     open={open}
    //     //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
    //     //     autoHideDuration={3000}
    //     //     onClose={handleClose}
    //     //   >
    //     //     <Alert onClose={handleClose} severity="error">
    //     //       AVISO: Usuário não cadastrado! Verificar dados digitados!
    //     //     </Alert>
    //     //   </Snackbar>
    //     // }
    //   });
  };

  const classes = useStyles();

  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={handleClose}
        // props={data.username}
      >
        <Alert onClose={handleClose} severity="success">
          Senha alterada com sucesso, {text}!
        </Alert>
      </Snackbar>

      <article>
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
              onChange={setUsername}
              value={text}
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
              Contate a central de suporte clicando{" "}
              <A target="_blanck" href="https://suporte.vestcasa.com.br">
                aqui
              </A>
            </Typography>
            <Typography>
              Ou solicite a alteração de senha por{" "}
              <Link to="/email">
                <A>aqui</A>
              </Link>
            </Typography>
          </Box>
        </form>
      </article>
    </>
  );
};
