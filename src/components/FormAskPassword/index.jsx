import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { usePasswordAsk } from "../../providers/PasswordAsk";

import { Box, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Form from "../../assets/figma_imgs/Form.png";
import FormMobile from "../../assets/figma_imgs/FormMobile.png";
import IconUser from "../../assets/figma_imgs/IconUser.png";
import IconUserError from "../../assets/figma_imgs/IconUserError.png";
import IconEmail from "../../assets/figma_imgs/IconEmail.png";
import IconEmailError from "../../assets/figma_imgs/IconEmailError.png";
import Input from "../../assets/figma_imgs/Input.png";
import LogoVestcasa from "../../assets/figma_imgs/LogoVestcasa.png";

import { useToast } from "@chakra-ui/react";

import { Article } from "./styles";

const useStyles = makeStyles({
  button: {
    marginTop: "1rem",
    width: "12.5rem",
  },
  formControl: {
    backgroundImage: `url(${Form})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    width: "385px",
    height: "420px",
    "@media (max-width: 424px)": {
      backgroundImage: `url(${FormMobile})`,
      width: "320px",
    },
  },
  image: {
    marginBottom: "1rem",
    width: "200px",
  },
  inputBox: {
    backgroundImage: `url(${Input})`,
    borderRadius: "1rem",
    padding: "0.5rem",
    width: "312px",
    "& .MuiInputLabel-formControl": {
      left: "0.25rem",
      top: "-0.3rem",
    },
    "@media (max-width: 424px)": {
      width: "280px",
    },
  },
  textFieldsContent: {
    width: "20rem",
    "& .MuiFormControl-root": {
      margin: "3px",
    },
    "& .MuiInputBase-input": {
      marginBottom: "0.5rem",
      paddingLeft: "0.4rem",
    },
  },
});

export const FormAskPassword = () => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { onSubmit, loading } = usePasswordAsk();

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

  return (
    <Article>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formControl}>
        <Box className={classes.image}>
          <img src={LogoVestcasa} alt="Logo Vestcasa" />
        </Box>

        <Box
          className={classes.inputBox}
          sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
        >
          {Object.keys(errors).some((elt) => elt === "usuario") ? (
            <img src={IconUserError} alt="UserError" />
          ) : (
            <img src={IconUser} alt="User" />
          )}
          <TextField
            className={classes.textFieldsContent}
            error={!!errors.usuario}
            label="Digite seu usuário"
            margin="normal"
            placeholder="usuario"
            variant="standard"
            type="text"
            {...register("usuario")}
          />
        </Box>
        <Box
          className={classes.inputBox}
          sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
        >
          {Object.keys(errors).some((elt) => elt === "email") ? (
            <img src={IconEmailError} alt="EmailError" />
          ) : (
            <img src={IconEmail} alt="Email" />
          )}
          <TextField
            className={classes.textFieldsContent}
            error={!!errors.email}
            label="Digite seu email"
            margin="normal"
            placeholder="email"
            variant="standard"
            type="text"
            {...register("email")}
          />
        </Box>
        {loading ? (
          <Button
            className={classes.button}
            color="primary"
            disabled="true"
            size="large"
            type="submit"
            variant="contained"
          >
            Enviando...
          </Button>
        ) : (
          <Button
            className={classes.button}
            color="primary"
            size="large"
            type="submit"
            variant="contained"
          >
            Enviar
          </Button>
        )}
      </form>
    </Article>
  );
};
