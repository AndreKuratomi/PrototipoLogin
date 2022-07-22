import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { usePasswordAsk } from "../../providers/PasswordAsk";

import { Box, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Email } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";

import Form from "../../assets/figma_imgs/Form.png";
import FormMobile from "../../assets/figma_imgs/FormMobile.png";
import IconUser from "../../assets/figma_imgs/IconUser.png";
import IconUserError from "../../assets/figma_imgs/IconUserError.png";
import IconEmail from "../../assets/figma_imgs/IconEmail.png";
import IconEmailError from "../../assets/figma_imgs/IconEmailError.png";
import Input from "../../assets/figma_imgs/Input.png";
import LogoVestcasa from "../../assets/figma_imgs/LogoVestcasa.png";

import { useToast } from "@chakra-ui/react";

import { A, Article } from "./styles";

const useStyles = makeStyles({
  // button: {
  //   marginTop: "1rem",
  //   width: "12.5rem",
  // },
  forgetPasswordBoxContent: {
    fontSize: "0.8rem",
    display: "flex",
    flexDirection: "column",
  },
  forgetPasswordExtraPageBox: {
    color: "#FFF",
    textDecoration: "none",
    marginTop: "1rem",
    textAlign: "center",
  },
  forgetPasswordInstructionsBox: {
    color: "#FFF",
    textDecoration: "none",
    margin: "1rem 0 2rem 0",
    textAlign: "center",
  },
  forgetPasswordInstructionsBoxContent: {
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  formControl: {
    background: "#009E4F",
    backgroundImage: "linear-gradient(to bottom left, #009E4F, #22BA87)",
    borderRadius: "1rem",
    // backgroundImage: `url(${Form})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    width: "385px",
    height: "460px",
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
    // backgroundImage: `url(${Input})`,
    background: "#fff",
    borderRadius: "1rem",
    filter: "drop-shadow(0.7rem 0.7rem 0.1rem rgba(3,3,3,8%))",
    padding: "0 0.5rem",
    width: "312px",
    "& .MuiInputLabel-formControl": {
      left: "0.25rem",
      top: "-0.3rem",
    },
    "@media (max-width: 424px)": {
      width: "280px",
    },
  },
  returnToLogin: {
    marginTop: "1rem",
  },
  returnToLoginContent: {
    fontSize: "0.9375rem",
    display: "flex",
    flexDirection: "column",
  },
  submitButton: {
    backgroundColor: "rgba(63 81 181 0.04)",
    border: "1px solid #fff",
    borderRadius: "1rem",
    color: "#fff",
    filter: "drop-shadow(0.7rem 0.7rem 0.1rem rgba(3,3,3,8%))",
    marginTop: "1rem",
    width: "10rem",

    "& .MuiButton-outlinedPrimary:hover": {
      //NÃO FUNCIONA!
      color: "#3f51b5",
    },
    "& .MuiButton-label:hover": {
      //GUAMBIARRA
      color: "#3f51b5",
    },
  },
  submitButtonBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    // "&:hover": {
    // color: "#3f51b5",
    // },
  },
  textFieldsContent: {
    width: "20rem",
    "& .MuiFormControl-marginNormal": {
      //NÃO FUNCIONA!
      marginTop: "8px",
    },
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
        <Box className={classes.forgetPasswordInstructionsBox}>
          <Typography className={classes.forgetPasswordInstructionsBoxContent}>
            Insira seus dados para redefinir a senha
          </Typography>
        </Box>
        <Box
          className={classes.inputBox}
          sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
        >
          {Object.keys(errors).some((elt) => elt === "email") ? (
            <Email sx={{ color: red[500] }} />
          ) : (
            <Email sx={{ color: green[700] }} />
          )}
          <TextField
            className={classes.textFieldsContent}
            error={!!errors.email}
            label="Email"
            margin="normal"
            placeholder="email"
            variant="standard"
            type="text"
            {...register("email")}
          />
        </Box>
        {loading ? (
          <Button
            className={classes.submitButton}
            color="primary"
            disabled="true"
            size="large"
            type="submit"
            variant="outlined"
          >
            Enviando...
          </Button>
        ) : (
          <Button
            className={classes.submitButton}
            color="primary"
            size="large"
            type="submit"
            variant="outlined"
          >
            Enviar
          </Button>
        )}
        <Box className={classes.returnToLogin}>
          <Typography className={classes.returnToLoginContent}>
            <Link to="/">
              <A>VOLTAR</A>
            </Link>
          </Typography>
        </Box>
        <Box className={classes.forgetPasswordExtraPageBox}>
          <Typography className={classes.forgetPasswordBoxContent}>
            Problemas em realizar a redefinição de senha?
            <A target="_blanck" href="https://suporte.vestcasa.com.br">
              Abra um chamado conosco
            </A>
          </Typography>
        </Box>
      </form>
    </Article>
  );
};
