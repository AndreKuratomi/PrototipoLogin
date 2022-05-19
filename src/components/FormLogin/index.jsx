import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// import FormLogin from "../../assets/figma_imgs/FormLogin.png";
import FormLoginError from "../../assets/figma_imgs/FormLoginError.png";
import InputLogin from "../../assets/figma_imgs/InputLogin.png";
import Input from "../../assets/figma_imgs/Input.png";
import ButtonFigma from "../../assets/figma_imgs/ButtonFigma.png";

import { api } from "../../service/api";

import {
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { useToast } from "@chakra-ui/react";

import { A } from "./styles";
import { useTextInput } from "../../providers/TextInput";

const useStyles = makeStyles({
  formControl: {
    // backgroundImage: (props) =>
    //   props.errors ? `url(${formLoginError})` : `url(${formLogin})`,
    backgroundImage: `url(${FormLoginError})`,
    // backgroundImage: `url(${formLogin})`,
    // backgroundColor: (props) => props.color,
    // borderRadius: "10%",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    width: "15rem",
    height: "30.5rem",
  },
  textField: {
    // backgroundColor: "#FFF",
    backgroundImage: `url(${Input})`,
    borderRadius: "1rem",
    padding: "1rem",
    "& .MuiInputLabel-formControl": {
      left: "1rem",
      top: ".25rem",
    },
  },
  button: {
    backgroundImage: `url(${ButtonFigma})`,
    marginTop: "1rem",
  },
  box: {
    color: "#FFF",
    textDecoration: "none",
    marginTop: "1rem",
    textAlign: "center",
  },
  textBox: {
    fontSize: "0.8rem",
  },
});

// const Alert = (props) => {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// };

export const FormLogin = ({ ...props }) => {
  // console.log(props);
  const classes = useStyles(props);
  // const formControl = useStyles(props);
  // console.log(formControl);

  const { text, setUsername } = useTextInput();

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
  const addFailToast = () => {
    toast({
      description:
        "Algo deu errado! Verifique se os dados preenchidos estão corretos.",
      duration: 3000,
      position: "top",
      status: "error",
      title: "Falha no login!",
    });
  };

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

  const navigate = useNavigate();

  const onSubmitFunction = (data, text) => {
    console.log(text.target[0].value);

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
  // addSuccessToast(text);
  console.log(errors);
  console.log(errors !== {});
  return (
    <>
      {/* {errors ? <h1>Eita!</h1> : <h3>Churros!</h3>} */}
      <article>
        <form
          className={classes.formControl}
          // className={`${formControl}`}
          onSubmit={handleSubmit(onSubmitFunction)}
          // error={!!errors}
          // color="red"
          // color={"#009E4F"}
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
              label="Senha"
              type="password"
              margin="normal"
              variant="standard"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            color="primary"
            size="large"
            // onClick={handleClick}
          >
            Entrar
          </Button>
          <Box className={classes.box}>
            <Typography className={classes.textBox}>
              Esqueceu a senha?
            </Typography>
            <Typography className={classes.textBox}>
              Solicite a alteração de senha por{" "}
              <Link to="/email">
                <A>aqui</A>
              </Link>
            </Typography>
            <Typography className={classes.textBox}>
              Ou contate a central de suporte clicando{" "}
              <A target="_blanck" href="https://suporte.vestcasa.com.br">
                aqui
              </A>
            </Typography>
          </Box>
        </form>
      </article>
    </>
  );
};
