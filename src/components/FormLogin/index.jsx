import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "../../assets/figma_imgs/Form.png";
import FormMobile from "../../assets/figma_imgs/FormMobile.png";
import Input from "../../assets/figma_imgs/Input.png";
import LogoVestcasa from "../../assets/figma_imgs/LogoVestcasa.png";
import IconUser from "../../assets/figma_imgs/IconUser.png";
import IconUserError from "../../assets/figma_imgs/IconUserError.png";
import IconPassword from "../../assets/figma_imgs/IconPassword.png";
import IconPasswordError from "../../assets/figma_imgs/IconPasswordError.png";

import { api } from "../../service/api";

import { Box, Button, TextField, Typography } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import { AccountCircle } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";

import { AiOutlineUser } from "react-icons/ai";

import { useToast } from "@chakra-ui/react";

import { useTextInput } from "../../providers/TextInput";
import { useUserLogin } from "../../providers/UserLogin";

import { A, Article, Image, ImageError } from "./styles";

const useStyles = makeStyles({
  forgetPasswordBox: {
    color: "#FFF",
    textDecoration: "none",
    marginTop: "1rem",
    textAlign: "center",
  },
  forgetPasswordBoxContent: {
    fontSize: "0.8rem",
    display: "flex",
    flexDirection: "column",
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
  submitButton: {
    marginTop: "1rem",
  },
  textFieldsContent: {
    width: "20rem",
    "& .MuiInputBase-input": {
      marginBottom: "0.5rem",
      paddingLeft: "0.4rem",
    },
    "& .MuiFormControl-root": {
      margin: "3px",
    },
  },
});

export const FormLogin = ({ error, ...rest }) => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { text, setUsername } = useTextInput();
  const { userLogged, createUserToken } = useUserLogin();

  // TOASTS:
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

  // LÓGICA FORMULÁRIO:
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

  // VARIÁVEL USENAVIGATE:
  const navigate = useNavigate();

  // LÓGICA SUBMISSÃO FORMULÁRIO:
  const onSubmitFunction = (data, text) => {
    userLogged();
    createUserToken();

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

  return (
    <>
      <Article>
        <form
          className={classes.formControl}
          onSubmit={handleSubmit(onSubmitFunction)}
        >
          <Box className={classes.image}>
            <img src={LogoVestcasa} alt="Logo Vestcasa" />
          </Box>

          <Box
            className={classes.inputBox}
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            {Object.keys(errors).some((elt) => elt === "username") ? (
              <img src={IconUserError} alt="UserError" />
            ) : (
              <img src={IconUser} alt="User" />
            )}
            <TextField
              label="Usuário"
              {...register("username")}
              error={!!errors.username}
              variant="standard"
              onChange={setUsername}
              value={text}
              className={classes.textFieldsContent}
            />
          </Box>

          <Box
            className={classes.inputBox}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {Object.keys(errors).some((elt) => elt === "password") ? (
              <img src={IconPasswordError} alt="PasswordError" />
            ) : (
              <img src={IconPassword} alt="Password" />
            )}
            <TextField
              label="Senha"
              type="password"
              variant="standard"
              {...register("password")}
              error={!!errors.password}
              className={classes.textFieldsContent}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            className={classes.submitButton}
            color="primary"
            size="large"
          >
            Entrar
          </Button>
          <Box className={classes.forgetPasswordBox}>
            <Typography className={classes.forgetPasswordBoxContent}>
              <Link to="/email">
                <A>Esqueci minha senha</A>
              </Link>
              ou
              <A target="_blanck" href="https://suporte.vestcasa.com.br">
                Abra um chamado conosco
              </A>
            </Typography>
          </Box>
        </form>
      </Article>
    </>
  );
};
