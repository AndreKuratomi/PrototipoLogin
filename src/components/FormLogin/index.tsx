import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../service/api";

import { usePasswordVisible } from "../../providers/PasswordVisibility";
import { useTextInput } from "../../providers/TextInput";
import { useUserLogin } from "../../providers/UserLogin";

import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import {
  Password,
  Person,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

import LogoVestcasa from "../../assets/figma_imgs/LogoVestcasa.png";

import { useToast } from "@chakra-ui/react";

import { A, Article } from "./styles";
import { green, red } from "@mui/material/colors";

const useStyles = makeStyles({
  forgetPasswordBox: {
    color: "#FFF",
    textDecoration: "none",
    marginTop: "0.5rem",
    textAlign: "end",
  },
  forgetPasswordExtraPageBox: {
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
    background: "#009E4F",
    backgroundImage: "linear-gradient(to bottom left, #009E4F, #22BA87)",
    borderRadius: "1rem",
    // backgroundImage: `url(${Form})`,
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    padding: "2rem",
    width: "385px",
    height: "420px",
    "@media (max-width: 424px)": {
      // backgroundImage: `url(${FormMobile})`,
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
  passwordButton: {
    color: "grey",
    minWidth: "20px",
    padding: "0px",
  },
  subForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

export const FormLogin = () => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { visible, userVisible, userUnvisible } = usePasswordVisible();
  const { text, setUsername } = useTextInput();
  const { userLogged, createUserToken } = useUserLogin();

  // TOASTS:
  const toast = useToast();

  const addSuccessToast = () => {
    toast({
      description: "Seja bem-vindo(a), fornecedor(a)!",
      duration: 3000,
      position: "top",
      status: "success",
      title: "Login feito com sucesso!",
    });
  };

  const addWarningToast = (person) => {
    toast({
      description:
        "Atenção, " +
        person.target[0].value +
        "!" +
        "Sua assinatura está próxima ao vencimento. Contatar suporte.",
      duration: 7000,
      position: "top",
      status: "warning",
      title: "Assinatura próxima de renovar!",
    });
  };

  const addFailToast = (person, date) => {
    toast({
      description:
        "Assinatura vencida, " + person.target[0].value + "desde " + date + "!",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Acesso bloqueado!",
    });
  };

  const addNonLoggedToast = () => {
    toast({
      description: "Usuário não cadastrado! Verificar dados.",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Acesso bloqueado!",
    });
  };

  // LÓGICA FORMULÁRIO:
  const formSchema = yup.object().shape({
    email: yup.string().email().required("Usuário obrigatório!"),
    password: yup.string().required("Senha obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // // COMPORTAMENTO TOASTS DE ACORDO COM ERROS NOS INPUTS:
  // if (errors.email && errors.email?.message === "email must be a valid email") {
  //   addNonLoggedToast();
  //   console.log("sdfgcx");
  //   console.log(addNonLoggedToast());
  // }
  // if (errors.senha && errors.senha?.message === "Senha obrigatória!") {
  //   addNonLoggedToast();
  //   console.log(addNonLoggedToast());
  // }
  // if (
  //   errors.repetir_nova_senha &&
  //   errors.repetir_nova_senha?.message === "As senhas devem ser iguais!"
  // ) {
  //   addNonLoggedToast();
  // }

  // VARIÁVEL USENAVIGATE:
  const navigate = useNavigate();

  // LÓGICA SUBMISSÃO FORMULÁRIO:
  const onSubmitFunction = (data, text) => {
    // navigate("/dashboardinternals");
    // userLogged();
    // createUserToken();
    console.log(data);
    // addNonLoggedToast();
    api
      .post("login/", data)
      .then((response) => {
        console.log(response);
        // const { token, user } = response.data;
        addSuccessToast();
        navigate("/dashboardinternals");
        userLogged();
        createUserToken();
        // // setAuthenticated(true);
        const now = Date.now();

        // let delta = user.signature_vality - now;
        // console.log(delta);

        // if (delta > 15) {
        //   addSuccessToast(user.username);
        //   userLogged();
        //   createUserToken();
        //   navigate("/dashboardinternals");
        // } else if (delta <= 15 && delta > 0) {
        //   addWarningToast(user.username);
        //   userLogged();
        //   createUserToken();
        //   navigate("/dashboardinternals");
        // } else {
        //   addFailToast(user.signature_vality);
        // }
      })
      .catch((err) => {
        console.log(err);
        addNonLoggedToast();
      });
  };
  console.log(errors);

  return (
    <>
      <Article>
        <form
          className={classes.formControl}
          onSubmit={handleSubmit(onSubmitFunction)}
        >
          <Box className={classes.subForm}>
            <Box className={classes.image}>
              <img src={LogoVestcasa} alt="Logo Vestcasa" />
            </Box>

            <Box
              className={classes.inputBox}
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              {Object.keys(errors).some((elt) => elt === "email") ? (
                <Person sx={{ color: red[500] }} />
              ) : (
                <Person sx={{ color: green[700] }} />
              )}
              <TextField
                className={classes.textFieldsContent}
                error={!!errors.email}
                label="Email"
                onChange={(evt) => setUsername(evt)}
                variant="standard"
                {...register("email")}
                // value={text}
              />
            </Box>

            <Box
              className={classes.inputBox}
              sx={{ display: "flex", alignItems: "center" }}
            >
              {Object.keys(errors).some((elt) => elt === "password") ? (
                <Password sx={{ color: red[500] }} />
              ) : (
                <Password sx={{ color: green[700] }} />
              )}
              <TextField
                className={classes.textFieldsContent}
                error={!!errors.password}
                label="Senha"
                type={visible ? "text" : "password"}
                variant="standard"
                {...register("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      {visible ? (
                        <Button
                          className={classes.passwordButton}
                          onClick={userUnvisible}
                        >
                          <VisibilityOff />
                        </Button>
                      ) : (
                        <Button
                          className={classes.passwordButton}
                          onClick={userVisible}
                        >
                          <Visibility />
                        </Button>
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
          <Box className={classes.forgetPasswordBox}>
            <Typography className={classes.forgetPasswordBoxContent}>
              <Link to="/email">
                <A>Esqueceu a senha?</A>
              </Link>
            </Typography>
          </Box>
          <Box className={classes.submitButtonBox}>
            <Button
              className={classes.submitButton}
              color="primary"
              size="large"
              type="submit"
              variant="outlined"
            >
              Entrar
            </Button>
          </Box>
          <Box className={classes.forgetPasswordExtraPageBox}>
            <Typography className={classes.forgetPasswordBoxContent}>
              Problemas em realizar o login?
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
