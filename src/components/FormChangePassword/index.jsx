import { Link, Navigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../providers/Auth";
import { usePasswordConfirm } from "../../providers/PasswordConfirm";

import { Box, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import FormChangePasswordMobile from "../../assets/figma_imgs/FormChangePasswordMobile.png";
import FormChangePasswordDesktop from "../../assets/figma_imgs/FormChangePasswordDesktop.png";
import IconUser from "../../assets/figma_imgs/IconUser.png";
import IconUserError from "../../assets/figma_imgs/IconUserError.png";
import IconEmail from "../../assets/figma_imgs/IconEmail.png";
import IconEmailError from "../../assets/figma_imgs/IconEmailError.png";
import IconTemporaryPassword from "../../assets/figma_imgs/IconTemporaryPassword.png";
import IconTemporaryPasswordError from "../../assets/figma_imgs/IconTemporaryPasswordError.png";
import IconPassword from "../../assets/figma_imgs/IconPassword.png";
import IconPasswordError from "../../assets/figma_imgs/IconPasswordError.png";
import Input from "../../assets/figma_imgs/Input.png";
import LogoVestcasa from "../../assets/figma_imgs/LogoVestcasa.png";

import { useToast } from "@chakra-ui/react";

import { A, Article } from "./styles";

const useStyles = makeStyles((theme) => ({
  buttonSingle: {
    backgroundColor: "#3f51b5",
    margin: "0.5rem 0",
    width: "16rem",
    "@media (min-width: 768px)": {
      margin: "1rem 1rem 0 1rem",
      width: "15rem",
    },
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 768px)": {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  formControl: {
    backgroundImage: `url(${FormChangePasswordMobile})`,
    borderRadius: "5%",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem",
    width: "20rem",
    "@media (min-width: 768px)": {
      backgroundImage: `url(${FormChangePasswordDesktop})`,
      flexWrap: "wrap",
      width: "47rem",
      height: "36rem",
    },
  },
  image: {
    width: "10rem",
  },
  inputBox: {
    backgroundImage: `url(${Input})`,
    borderRadius: "1rem",
    padding: "0.5rem",
    width: "280px",
    "& .MuiInputLabel-formControl": {
      left: "0.25rem",
      top: "-0.3rem",
    },
    "@media (min-width: 768px)": {
      margin: "0.5rem 1rem",
      width: "312px",
    },
  },
  inputsAllBox: {
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 768px)": {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      width: "43rem",
      height: "22rem",
    },
  },
  suggestionBox: {
    color: "#FFF",
    textAlign: "center",
    textDecoration: "none",
    "& .MuiTypography-body1": {
      fontSize: "0.75rem",
    },
    "@media (min-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "30rem",
    },
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
}));

export const FormChangePassword = () => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { onSubmit, loading } = usePasswordConfirm();
  // const { loading } = useLoading();

  // TOASTS:
  const toast = useToast();

  const notAskedToast = () => {
    toast({
      description: "O usuário não fez pedido de alteração de senha.",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Não autorizado",
    });
  };
  const emailErrorToast = (algo) => {
    toast({
      description: algo,
      duration: 3000,
      position: "top",
      status: "error",
      title: "Erro!",
    });
  };
  const protoConflictToast = (algo) => {
    toast({
      description: algo,
      duration: 3000,
      position: "top",
      status: "error",
      title: "Erro!",
    });
  };
  const repeatPasswordToast = (algo) => {
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
    usuario: yup.string().required("Usuário obrigatório!"),
    email: yup.string().email().required("Email obrigatório!"),
    currentPassword: yup.string().required("Senha provisória obrigatória!"),
    nova_senha: yup
      .string()
      .notOneOf(
        [yup.ref("currentPassword")],
        "A nova senha não deve ser igual à provisória!"
      )
      .required("Nova senha obrigatória!"),
    repetir_nova_senha: yup
      .string()
      .oneOf([yup.ref("nova_senha")], "As senhas devem ser iguais!")
      .required("Repetir nova senha obrigatória!"),
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
  if (
    errors.nova_senha &&
    errors.nova_senha?.message ===
      "A nova senha não deve ser igual à provisória!"
  ) {
    protoConflictToast(errors.nova_senha?.message);
  }
  if (
    errors.repetir_nova_senha &&
    errors.repetir_nova_senha?.message === "As senhas devem ser iguais!"
  ) {
    repeatPasswordToast(errors.repetir_nova_senha?.message);
  }

  // AUTENTICAÇÃO PARA VERIFICAR SE O USUÁRIO FEZ O PEDIDO DE ALTERAÇÃO:
  const { setAuth } = useAuth();

  const token = JSON.parse(
    localStorage.getItem("@token: NewEmailToken") || "null"
  );

  if (token) {
    setAuth(true);
  } else {
    notAskedToast();
    return <Navigate to="/" />;
  }

  return (
    <Article>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formControl}>
        <Box>
          <img
            src={LogoVestcasa}
            alt="Logo Vestcasa"
            className={classes.image}
          />
        </Box>
        <Box className={classes.inputsAllBox}>
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
              type="text"
              variant="standard"
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
              type="text"
              variant="standard"
              {...register("email")}
            />
          </Box>
          <Box
            className={classes.inputBox}
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            {Object.keys(errors).some((elt) => elt === "currentPassword") ? (
              <img
                src={IconTemporaryPasswordError}
                alt="TemporaryPasswordError"
              />
            ) : (
              <img src={IconTemporaryPassword} alt="TemporaryPassword" />
            )}
            <TextField
              className={classes.textFieldsContent}
              error={!!errors.currentPassword}
              label="Senha provisória"
              placeholder="senha provisória"
              margin="normal"
              type="password"
              variant="standard"
              {...register("currentPassword")}
            />
          </Box>
          <Box
            className={classes.inputBox}
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            {Object.keys(errors).some((elt) => elt === "nova_senha") ? (
              <img src={IconPasswordError} alt="PasswordError" />
            ) : (
              <img src={IconPassword} alt="Password" />
            )}
            <TextField
              className={classes.textFieldsContent}
              error={!!errors.nova_senha}
              label="Nova senha"
              margin="normal"
              placeholder="nova senha"
              variant="standard"
              type="password"
              {...register("nova_senha")}
            />
          </Box>
          <Box
            className={classes.inputBox}
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            {Object.keys(errors).some((elt) => elt === "repetir_nova_senha") ? (
              <img src={IconPasswordError} alt="PasswordError" />
            ) : (
              <img src={IconPassword} alt="Password" />
            )}
            <TextField
              className={classes.textFieldsContent}
              error={!!errors.repetir_nova_senha}
              label="Repetir nova senha"
              margin="normal"
              placeholder="repetir nova senha"
              type="password"
              variant="standard"
              {...register("repetir_nova_senha")}
            />
          </Box>
        </Box>
        <Box className={classes.suggestionBox}>
          <Box>
            <Typography color={"#fff"}>
              Sugestão: usar caracteres especiais/letras maiúsculas/letras
              minúsculas e números
            </Typography>
          </Box>
          <Box className={classes.buttons}>
            {loading ? (
              <Button
                className={classes.buttonSingle}
                color="primary"
                disabled="true"
                size="large"
                variant="contained"
                type="submit"
              >
                Enviando...
              </Button>
            ) : (
              <Button
                className={classes.buttonSingle}
                color="primary"
                size="large"
                variant="contained"
                type="submit"
              >
                Enviar
              </Button>
            )}
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                className={classes.buttonSingle}
                size="large"
                variant="contained"
              >
                <A>Login</A>
              </Button>
            </Link>
          </Box>
        </Box>
      </form>
    </Article>
  );
};
