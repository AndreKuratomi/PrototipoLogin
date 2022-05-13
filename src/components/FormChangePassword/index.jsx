import { Link, Navigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import { useToast } from "@chakra-ui/react";

import { useAuth } from "../../providers/Auth";
import { usePasswordConfirm } from "../../providers/PasswordConfirm";

import { A } from "./styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    backgroundColor: "#009E4F",
    borderRadius: "5%",
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
    marginTop: "1rem",
    textAlign: "center",
    textDecoration: "none",
  },
  boxSuggestion: {
    color: "#FFF",
    // marginTop: "1rem",
    textAlign: "center",
    textDecoration: "none",
    "& .MuiTypography-body1": {
      fontSize: "0.75rem",
    },
  },
}));

export const FormChangePassword = () => {
  const { handleChange, onSubmit, toSend } = usePasswordConfirm();
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
    user: yup.string().required("Usuário obrigatório!"),
    email: yup.string().email().required("Email obrigatório!"),
    currentPassword: yup.string().required("Senha provisória obrigatória!"),
    newPassword: yup
      .string()
      .notOneOf(
        [yup.ref("currentPassword")],
        "A nova senha não deve ser igual à provisória!"
      )
      .required("Nova senha obrigatória!"),
    repeatNewPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "As senhas devem ser iguais!")
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
    // notAskedToast();
    // return <Navigate to="/login" />;
  }

  return (
    <article>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formControl}>
        <Box>
          <TextField
            margin="normal"
            variant="standard"
            className={classes.textField}
            type="text"
            label="Digite aqui seu usuário"
            placeholder="user"
            {...register("user")}
            // value={toSend.user}
            // onChange={}
            onInputChange={handleChange}
            error={!!errors.user}
            helperText={errors.user?.message}
          />
        </Box>
        <Box>
          <TextField
            margin="normal"
            variant="standard"
            className={classes.textField}
            type="text"
            label="Digite aqui seu email"
            placeholder="email"
            {...register("email")}
            // value={toSend.email}
            // onChange={handleChange}
            onInputChange={handleChange}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Box>
        <Box>
          <TextField
            className={classes.textField}
            label="Senha provisória"
            margin="normal"
            variant="standard"
            placeholder="current_password"
            type="password"
            {...register("currentPassword")}
            error={!!errors.currentPassword}
            helperText={errors.currentPassword?.message}
          />
        </Box>
        <Box>
          <TextField
            className={classes.textField}
            label="Senha"
            type="password"
            margin="normal"
            variant="standard"
            placeholder="new_password"
            {...register("newPassword")}
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message}
          />
        </Box>
        <Box className={classes.boxSuggestion}>
          <Typography color={"#fff"}>
            Sugestão: usar caracteres especiais/letras maiúsculas/letras
            minúsculas e números
          </Typography>
        </Box>
        <Box>
          <TextField
            className={classes.textField}
            label="Repetir senha"
            type="password"
            margin="normal"
            variant="standard"
            placeholder="new_password"
            {...register("repeatNewPassword")}
            // value={toSend.new_password}
            // onChange={handleChange}
            onInputChange={handleChange}
            error={!!errors.repeatNewPassword}
            helperText={errors.repeatNewPassword?.message}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          className={classes.button}
          color="primary"
          size="large"
        >
          Cadastrar
        </Button>
        <Box className={classes.box}>
          <Typography>Já possui conta?</Typography>
          <Typography>
            Então vamos para o{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <A>Login</A>
            </Link>
          </Typography>
        </Box>
      </form>
    </article>
  );
};
