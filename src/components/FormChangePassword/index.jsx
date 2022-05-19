import { Link, Navigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import Input from "../../assets/figma_imgs/Input.png";
import FormChangePasswordFigma from "../../assets/figma_imgs/FormChangePasswordFigma.png";

import { useToast } from "@chakra-ui/react";

import { useAuth } from "../../providers/Auth";
import { useLoading } from "../../providers/Loading";
import { usePasswordConfirm } from "../../providers/PasswordConfirm";

import { A } from "./styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    backgroundColor: "#009E4F",
    // backgroundImage: `url(${FormChangePasswordFigma})`,
    borderRadius: "5%",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem",
    width: "20rem",
    "@media (min-width: 768px)": {
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2rem",
      width: "38rem",
      height: "28rem",
    },
  },
  textField: {
    backgroundColor: "#FFF",
    // backgroundImage: `url(${Input})`,
    borderRadius: "1rem",
    margin: "1rem",
    padding: "1rem",
    "& .MuiInputLabel-formControl": {
      left: "1rem",
      top: ".25rem",
    },
    width: "15rem",
  },
  button: {
    marginTop: "1rem",
    width: "15rem",
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
      width: "35rem",
      height: "9rem",
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
    width: "15rem",
  },
}));

export const FormChangePassword = () => {
  // const { loading } = useLoading();
  const { handleChange, onSubmit, loading } = usePasswordConfirm();

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
  // console.log(data);

  const classes = useStyles();

  // AUTENTICAÇÃO PARA VERIFICAR SE O USUÁRIO FEZ O PEDIDO DE ALTERAÇÃO
  const { setAuth } = useAuth();

  const token = JSON.parse(
    localStorage.getItem("@token: NewEmailToken") || "null"
  );

  if (token) {
    setAuth(true);
  } else {
    notAskedToast();
    // return <Navigate to="/login" />;
  }

  return (
    <article>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formControl}>
        <Box className={classes.boxForm}>
          <Box>
            <TextField
              margin="normal"
              variant="standard"
              className={classes.textField}
              type="text"
              label="Digite aqui seu usuário"
              placeholder="usuario"
              {...register("usuario")}
              onInputChange={handleChange}
              error={!!errors.usuario}
              // helperText={errors.usuario?.message}
            />
          </Box>
          {/* <Box>
          <TextField
            margin="normal"
            variant="standard"
            className={classes.textField}
            type="text"
            label="Digite aqui seu email"
            placeholder="email"
            {...register("email")}
            onInputChange={handleChange}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Box> */}
          <Box>
            <TextField
              className={classes.textField}
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
          <Box>
            <TextField
              className={classes.textField}
              label="Nova senha"
              type="password"
              margin="normal"
              variant="standard"
              placeholder="nova senha"
              {...register("nova_senha")}
              error={!!errors.nova_senha}
              // helperText={errors.nova_senha?.message}
            />
            {/* <Box className={classes.boxSuggestion}>
              <Typography color={"#fff"}>
                Sugestão: usar caracteres especiais/letras maiúsculas/letras
                minúsculas e números
              </Typography>
            </Box> */}
          </Box>
          <Box>
            <TextField
              className={classes.textField}
              label="Repetir nova senha"
              type="password"
              margin="normal"
              variant="standard"
              placeholder="repetir nova senha"
              {...register("repetir_nova_senha")}
              onInputChange={handleChange}
              error={!!errors.repetir_nova_senha}
              // helperText={errors.repetir_nova_senha?.message}
            />
          </Box>
        </Box>
        <Box className={classes.boxSuggestion}>
          <Box className={classes.boxSuggestion}>
            <Typography color={"#fff"}>
              Sugestão: usar caracteres especiais/letras maiúsculas/letras
              minúsculas e números
            </Typography>
          </Box>
          <Box>
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
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              color="primary"
              size="large"
            >
              {/* Login */}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <A>Login</A>
              </Link>
            </Button>
            {/* <Box className={classes.boxAccount}>
            <Typography>Já possui conta?</Typography>
            <Typography>
              Então vamos para o{" "}
            </Typography>
          </Box> */}
          </Box>
        </Box>
      </form>
    </article>
  );
};
