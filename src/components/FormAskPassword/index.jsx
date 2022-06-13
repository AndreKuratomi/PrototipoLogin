import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { usePasswordAsk } from "../../providers/PasswordAsk";
import { useLoading } from "../../providers/Loading";

import { Box, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Form from "../../assets/figma_imgs/Form.png";
import FormMobile from "../../assets/figma_imgs/FormMobile.png";
import Input from "../../assets/figma_imgs/Input.png";
import LogoVestcasa from "../../assets/figma_imgs/LogoVestcasa.png";

import IconUser from "../../assets/figma_imgs/IconUser.png";
import IconUserError from "../../assets/figma_imgs/IconUserError.png";
import IconEmail from "../../assets/figma_imgs/IconEmail.png";
import IconEmailError from "../../assets/figma_imgs/IconEmailError.png";

import { useToast } from "@chakra-ui/react";
import { Article } from "./styles";

const useStyles = makeStyles({
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
  textFieldTest: {
    backgroundImage: `url(${Input})`,
    borderRadius: "1rem",
    // marginLeft: "1.5rem",
    padding: "0.5rem",
    width: "312px",
    "& .MuiInputLabel-formControl": {
      left: "0.25rem",
      // left: "3rem",
      top: "-0.3rem",
    },
    "@media (max-width: 424px)": {
      width: "280px",
    },
  },
  oi: {
    width: "20rem",
    "& .MuiInputBase-input": {
      marginBottom: "0.5rem",
      paddingLeft: "0.4rem",
    },
    "& .MuiFormControl-root": {
      margin: "3px",
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
    width: "200px",
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

        <Box
          className={classes.textFieldTest}
          sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
        >
          {Object.keys(errors).some((elt) => elt === "usuario") ? (
            <img src={IconUserError} alt="UserError" />
          ) : (
            <img src={IconUser} alt="User" />
          )}
          <TextField
            margin="normal"
            variant="standard"
            className={classes.oi}
            type="text"
            label="Digite seu usuário"
            placeholder="usuario"
            {...register("usuario")}
            onInputChange={handleChange}
            error={!!errors.usuario}
          />
        </Box>
        <Box
          className={classes.textFieldTest}
          sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
        >
          {Object.keys(errors).some((elt) => elt === "email") ? (
            <img src={IconEmailError} alt="EmailError" />
          ) : (
            <img src={IconEmail} alt="Email" />
          )}
          <TextField
            margin="normal"
            variant="standard"
            className={classes.oi}
            type="text"
            label="Digite seu email"
            placeholder="email"
            {...register("email")}
            onInputChange={handleChange}
            error={!!errors.email}
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
