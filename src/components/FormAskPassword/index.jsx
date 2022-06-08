import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { usePasswordAsk } from "../../providers/PasswordAsk";
import { useLoading } from "../../providers/Loading";

import { Box, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import FormAskPW from "../../assets/figma_imgs/FormAskPW.png";
import Input from "../../assets/figma_imgs/Input.png";
import LogoVestcasa from "../../assets/figma_imgs/LogoVestcasa.png";

import { useToast } from "@chakra-ui/react";
import { Article } from "./styles";

const useStyles = makeStyles({
  formControl: {
    backgroundImage: `url(${FormAskPW})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    width: "17rem",
    height: "25.55rem",
  },
  textField: {
    backgroundImage: `url(${Input})`,
    borderRadius: "1rem",
    width: "12.5rem",
    padding: "1rem",
    "& .MuiInputLabel-formControl": {
      left: "1rem",
      top: ".25rem",
    },
  },
  button: {
    marginTop: "1rem",
    width: "12.5rem",
  },
  box: {
    color: "#FFF",
    textDecoration: "none",
    marginTop: "1rem",
    textAlign: "center",
  },
  image: {
    marginBottom: "1rem",
  },
});

export const FormAskPassword = () => {
  // const { loading } = useLoading();
  const { handleChange, onSubmit, loading } = usePasswordAsk();

  // TOASTS:
  const toast = useToast();

  const emailErrorToast = (algo) => {
    toast({
      description: algo,
      duration: 3000,
      position: "top",
      status: "error",
      title: "Erro!",
    });
  };

  // LÓGICA FORMULÁRIO:
  const formSchema = yup.object().shape({
    usuario: yup.string().required("Usuario obrigatório!"),
    email: yup.string().email().required("Email obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // COMPORTAMENTO TOASTS DE ACORDO COM ERROS NOS INPUTS:
  if (errors.email && errors.email?.message === "email must be a valid email") {
    emailErrorToast("Email inválido! Favor verificar.");
  }

  // STYLES:
  const classes = useStyles();

  return (
    <Article>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formControl}>
        <Box className={classes.image}>
          <img src={LogoVestcasa} alt="Logo Vestcasa" />
        </Box>
        <Box>
          <TextField
            margin="normal"
            variant="standard"
            className={classes.textField}
            type="text"
            // name="usuario"
            label="Digite aqui seu usuário"
            placeholder="usuario"
            {...register("usuario")}
            // value={toSend.usuario}
            // onChange={handleChange}
            onInputChange={handleChange}
            error={!!errors.usuario}
            // helperText={errors.usuario?.message}
          />
        </Box>
        <Box>
          <TextField
            margin="normal"
            variant="standard"
            className={classes.textField}
            type="text"
            // name="email"
            label="Digite aqui seu email"
            placeholder="email"
            {...register("email")}
            // value={toSend.email}
            // onChange={handleChange}
            onInputChange={handleChange}
            error={!!errors.email}
            // helperText={errors.email?.message}
          />
        </Box>
        {loading ? (
          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            color="primary"
            size="large"
            disabled="true"
          >
            Enviando...
          </Button>
        ) : (
          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            color="primary"
            size="large"
          >
            Enviar
          </Button>
        )}
      </form>
    </Article>
  );
};
