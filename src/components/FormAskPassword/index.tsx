import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../service/api";

import { usePasswordAsk } from "../../providers/PasswordAsk";

import { Box, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Email } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";

import FormMobile from "../../assets/figma_imgs/FormMobile.png";
import LogoVestcasa from "../../assets/figma_imgs/LogoVestcasa.png";

import { useToast } from "@chakra-ui/react";

import { A, Article } from "./styles";

const useStyles = makeStyles({
  forgetPasswordBoxContent: {
    fontSize: "0.8rem",
    display: "flex",
    flexDirection: "column",
  },
  forgetPasswordExtraPageBox: {
    color: "var(--white)",
    textDecoration: "none",
    marginTop: "1rem",
    textAlign: "center",
  },
  forgetPasswordInstructionsBox: {
    color: "var(--white)",
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
    background: "var(--formDarkGreen)",
    backgroundImage:
      "linear-gradient(to bottom left, var(--formDarkGreen), var(--formLightGreen))",
    borderRadius: "1rem",
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
    background: "var(--white)",
    borderRadius: "1rem",
    filter: "drop-shadow(0.7rem 0.7rem 0.1rem var(--alphaGray))",
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
  returnToLogin: {
    marginTop: "1rem",
  },
  returnToLoginContent: {
    fontSize: "0.9375rem",
    display: "flex",
    flexDirection: "column",
  },
  submitButton: {
    backgroundColor: "var(--shadowBlack)",
    border: "1px solid var(--white)",
    borderRadius: "1rem",
    color: "var(--white)",
    filter: "drop-shadow(0.7rem 0.7rem 0.1rem var(--alphaGray))",
    marginTop: "1rem",
    width: "15rem",

    "&:hover": {
      color: "var(--hoverBlue)",
    },
  },
  textFieldsContent: {
    marginTop: "0px",
    marginBottom: "0px",
    width: "20rem",
    "& label + .MuiInput-formControl": {
      marginTop: "0px",
    },
    "& .MuiInputBase-input": {
      marginBottom: "0.5rem",
      paddingLeft: "0.4rem",
    },
    "& .MuiFormControl-root": {
      margin: "1px",
    },
    "& .MuiInputLabel-formControl": {
      top: "-0.5rem",
      left: "0.25rem",
    },
  },
});

export const FormAskPassword = () => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { createAuth, loading, setLoading, LoadPage } = usePasswordAsk();

  // TOASTS:
  const toast = useToast();

  const addSuccessToast = () => {
    toast({
      description: "Confira sua caixa de emails.",
      duration: 5000,
      position: "top",
      status: "success",
      title: "Solicitação enviada com sucesso!",
    });
  };

  const emailErrorToast = (algo: string) => {
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

  // VARIÁVEL USENAVIGATE:
  const navigate = useNavigate();
  // LÓGICA SUBMISSÃO FORMULÁRIO:
  const onSubmitFunction = (data: Object) => {
    LoadPage();
    api
      .post("ask/", data)
      .then((_) => {
        addSuccessToast();
        createAuth();
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        emailErrorToast("Email inválido! Favor verificar.");
        setLoading(false);
      });
  };

  return (
    <Article>
      <form
        className={classes.formControl}
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <Box className={classes.image}>
          {/* <img src={LogoVestcasa} alt="Logo Vestcasa" /> */}
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
            {...register("email")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {loading ? (
            <Button
              className={classes.submitButton}
              color="primary"
              disabled={true}
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
        </Box>
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
