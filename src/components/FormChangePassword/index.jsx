import { Link, Navigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import Input from "../../assets/figma_imgs/Input.png";
import FormChangePasswordMobile from "../../assets/figma_imgs/FormChangePasswordMobile.png";
import FormChangePasswordDesktop from "../../assets/figma_imgs/FormChangePasswordDesktop.png";

import LogoVestcasa from "../../assets/figma_imgs/LogoVestcasa.png";
import IconUser from "../../assets/figma_imgs/IconUser.png";
import IconUserError from "../../assets/figma_imgs/IconUserError.png";
import IconEmail from "../../assets/figma_imgs/IconEmail.png";
import IconEmailError from "../../assets/figma_imgs/IconEmailError.png";
import IconTemporaryPassword from "../../assets/figma_imgs/IconTemporaryPassword.png";
import IconTemporaryPasswordError from "../../assets/figma_imgs/IconTemporaryPasswordError.png";
import IconPassword from "../../assets/figma_imgs/IconPassword.png";
import IconPasswordError from "../../assets/figma_imgs/IconPasswordError.png";

import { useToast } from "@chakra-ui/react";

import { useAuth } from "../../providers/Auth";
import { usePasswordConfirm } from "../../providers/PasswordConfirm";
import { useTextInput } from "../../providers/TextInput";

import { A, Article } from "./styles";

const useStyles = makeStyles((theme) => ({
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
      // height: "28rem", //sem input email
      height: "36rem",
    },
  },
  image: {
    marginBottom: "1rem",
  },

  textFieldTest: {
    backgroundImage: `url(${Input})`,
    borderRadius: "1rem",
    padding: "0.5rem",
    width: "280px",
    "& .MuiInputLabel-formControl": {
      left: "0.25rem",
      top: "-0.3rem",
    },
    // width: "13rem",
    "@media (min-width: 768px)": {
      margin: "0.5rem 1rem",
      width: "312px",
    },
  },
  button: {
    margin: "0.5rem 0",
    width: "16rem",
    "@media (min-width: 768px)": {
      margin: "1rem 1rem 0 1rem",
      width: "15rem",
    },
  },
  box: {
    display: "flex",
    flexDirection: "column",
  },
  boxAccount: {
    color: "#FFF",
    marginTop: "1rem",
    textAlign: "center",
    textDecoration: "none",
    width: "15rem",
  },
  boxForm: {
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
  boxSuggestion: {
    color: "#FFF",
    // marginTop: "1rem",
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
  buttons: {
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 768px)": {
      flexDirection: "row",
      justifyContent: "space-between",
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
  imaged: {
    width: "10rem",
  },
}));

export const FormChangePassword = () => {
  // const { loading } = useLoading();
  const { onSubmit, loading } = usePasswordConfirm();

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
    // console.log(algo);
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

  // STYLES:
  const classes = useStyles();

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
        <Box className={classes.image}>
          <img
            src={LogoVestcasa}
            alt="Logo Vestcasa"
            className={classes.imaged}
          />
        </Box>
        <Box className={classes.boxForm}>
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
              // onInputChange={handleChange}
              error={!!errors.usuario}
              // helperText={notAskedToast(errors.usuario?.message)}
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
              // onInputChange={handleChange}
              error={!!errors.email}
              // helperText={errors.email?.message}
            />
          </Box>
          <Box
            className={classes.textFieldTest}
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
              className={classes.oi}
              label="Senha provisória"
              margin="normal"
              variant="standard"
              placeholder="senha provisória"
              type="password"
              {...register("currentPassword")}
              error={!!errors.currentPassword}
              // helperText={errors.currentPassword?.message}
            />
          </Box>
          <Box
            className={classes.textFieldTest}
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            {Object.keys(errors).some((elt) => elt === "nova_senha") ? (
              <img src={IconPasswordError} alt="PasswordError" />
            ) : (
              <img src={IconPassword} alt="Password" />
            )}
            <TextField
              className={classes.oi}
              label="Nova senha"
              type="password"
              margin="normal"
              variant="standard"
              placeholder="nova senha"
              {...register("nova_senha")}
              error={!!errors.nova_senha}
              // helperText={protoConflictToast(errors.nova_senha?.message)}
            />
            {/* <Box className={classes.boxSuggestion}>
              <Typography color={"#fff"}>
                Sugestão: usar caracteres especiais/letras maiúsculas/letras
                minúsculas e números
              </Typography>
            </Box> */}
          </Box>
          <Box
            className={classes.textFieldTest}
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            {Object.keys(errors).some((elt) => elt === "repetir_nova_senha") ? (
              <img src={IconPasswordError} alt="PasswordError" />
            ) : (
              <img src={IconPassword} alt="Password" />
            )}
            <TextField
              className={classes.oi}
              label="Repetir nova senha"
              type="password"
              margin="normal"
              variant="standard"
              placeholder="repetir nova senha"
              {...register("repetir_nova_senha")}
              // onInputChange={handleChange}
              error={!!errors.repetir_nova_senha}
              // helperText={errors.repetir_nova_senha?.message}
            />
          </Box>
        </Box>
        <Box className={classes.boxSuggestion}>
          <Box>
            <Typography color={"#fff"}>
              Sugestão: usar caracteres especiais/letras maiúsculas/letras
              minúsculas e números
            </Typography>
          </Box>
          <Box className={classes.buttons}>
            {loading ? (
              // console.log(loading)
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
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                // type="submit"
                variant="contained"
                className={classes.button}
                color="primary"
                size="large"
              >
                {/* Login */}
                <A>Login</A>
              </Button>
            </Link>
            {/* <Box className={classes.boxAccount}>
            <Typography>Já possui conta?</Typography>
            <Typography>
              Então vamos para o{" "}
            </Typography>
          </Box> */}
          </Box>
        </Box>
      </form>
    </Article>
  );
};
