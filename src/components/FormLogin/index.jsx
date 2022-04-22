import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import { A } from "./styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    backgroundColor: "#009E4F",
    borderRadius: "10%",
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

export const FormLogin = () => {
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

  const onSubmitFunction = (data) => {
    //aqui virá a requisição
    console.log(data);
  };

  const classes = useStyles();

  return (
    <article>
      <form
        onSubmit={handleSubmit(onSubmitFunction)}
        className={classes.formControl}
      >
        <div>
          <TextField
            className={classes.textField}
            label="Usuário"
            margin="normal"
            variant="standard"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </div>
        <div>
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
        </div>

        <Button
          type="submit"
          variant="contained"
          className={classes.button}
          color="primary"
          size="large"
        >
          Entrar
        </Button>
        <Box className={classes.box}>
          <Typography>Não possui conta?</Typography>
          {/* //{" "} */}
          <Typography>
            Então vamos para o{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <A>Cadastro</A>
            </Link>
          </Typography>
        </Box>
      </form>
    </article>
  );
};
