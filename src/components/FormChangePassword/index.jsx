import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link, useNavigate } from "react-router-dom";

import { useTextInput } from "../../providers/TextInput";

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
    textDecoration: "none",
    marginTop: "1rem",
    textAlign: "center",
  },
}));

export const FormChangePassword = () => {
  const { text, setUsername } = useTextInput();

  const formSchema = yup.object().shape({
    username: yup.string().required("Usuário obrigatório!"),
    currentPassword: yup.string().required("Senha atual obrigatória!"),
    // username: yup.string().required("Usuário obrigatório!"),
    password: yup.string().required("Senha obrigatória!"),
    repeatPassword: yup.string().required("Repetir senha obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const onSubmitFunction = (data) => {
    //aqui virá a requisição
    console.log(data);
    navigate("/login");
  };

  const classes = useStyles();

  return (
    <article>
      <form
        onSubmit={handleSubmit(onSubmitFunction)}
        className={classes.formControl}
      >
        <Box>
          <TextField
            className={classes.textField}
            label="Usuário"
            margin="normal"
            variant="standard"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
            onChange={setUsername}
            value={text}
          />
        </Box>
        <Box>
          <TextField
            className={classes.textField}
            label="Senha atual"
            margin="normal"
            variant="standard"
            {...register("email")}
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
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Box>
        <Box>
          <TextField
            className={classes.textField}
            label="Repetir senha"
            type="password"
            margin="normal"
            variant="standard"
            {...register("repeatPassword")}
            error={!!errors.repeatPassword}
            helperText={errors.repeatPassword?.message}
          />
        </Box>
        <Box className={classes.box}>
          <Typography color={"#fff"}>
            Sugestão: usar caracteres especiais/letras maiúsculas/letras
            minúsculas e números
          </Typography>
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
