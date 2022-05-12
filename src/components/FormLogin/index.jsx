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

import { useToast } from "@chakra-ui/react";

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

// const Alert = (props) => {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// };

export const FormLogin = () => {
  const { text, setUsername } = useTextInput();

  const toast = useToast();

  const addSuccessToast = (person) => {
    toast({
      description: "Seja bem-vindo, " + person.target[0].value + "!",
      duration: 2000,
      position: "top",
      status: "success",
      title: "Login feito com sucesso!",
    });
  };
  const addFailToast = () => {
    toast({
      description:
        "Algo deu errado! Verifique se os dados preenchidos estão corretos.",
      duration: 3000,
      position: "top",
      status: "error",
      title: "Falha no login!",
    });
  };

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

  const onSubmitFunction = (data, text) => {
    console.log(text.target[0].value);

    navigate("/dashboard");

    addSuccessToast(text);
    // api
    //   .post("/login", data)
    //   .then((response) => {
    //     const { token, user } = response.data;

    //     setAuthenticated(true);

    //     const now = Date.now();
    //     let delta = user.signature.deadline - now;
    //    if () {}

    //   })
    //   .catch((err) => {
    // addFailToast();
    //   });
  };
  // addSuccessToast(text);

  const classes = useStyles();

  return (
    <>
      <article>
        <form
          onSubmit={handleSubmit(onSubmitFunction)}
          className={classes.formControl}
        >
          <Box>
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
          </Box>
          <Box>
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
          </Box>

          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            color="primary"
            size="large"
            // onClick={handleClick}
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
