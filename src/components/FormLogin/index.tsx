import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../service/api";

import { usePasswordVisible } from "../../providers/PasswordVisibility";
// import { useTextInput } from "../../providers/TextInput";
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
import React from "react";

const useStyles = makeStyles({
  forgetPasswordBox: {
    color: "var(--white)",
    textDecoration: "none",
    marginTop: "0.5rem",
    textAlign: "end",
  },
  forgetPasswordExtraPageBox: {
    color: "var(--white)",
    textDecoration: "none",
    marginTop: "1rem",
    textAlign: "center",
  },
  forgetPasswordBoxContent: {
    display: "flex",
    flexDirection: "column",
    fontSize: "0.8rem",
    // marginLeft: "1rem",
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
    background: "var(--white)",
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
    border: "1px solid var(--white)",
    borderRadius: "1rem",
    color: "var(--white)",
    filter: "drop-shadow(0.7rem 0.7rem 0.1rem rgba(3,3,3,8%))",
    marginTop: "1rem",
    width: "15rem",

    "&:hover": {
      color: "#3f51b5",
    },
  },

  textFieldsContent: {
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

export const FormLogin = () => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { visible, userVisible, userUnvisible } = usePasswordVisible();
  // const { text, setUsername } = useTextInput();
  const { userLogged, createUserToken, createSuperUserToken } = useUserLogin();

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

  const addSuperUserToast = () => {
    toast({
      description: "Seja bem-vindo(a)!",
      duration: 3000,
      position: "top",
      status: "success",
      title: "Login feito com sucesso!",
    });
  };

  const addWarningToast = () => {
    //E COMO COLOCAR ELA PARA SER EXIBIDA UMA VEZ SÓ? PENSAR NUMA LISTA.
    toast({
      description:
        "Sua assinatura está próxima ao vencimento. Contatar suporte.",
      duration: 7000,
      position: "top",
      status: "warning",
      title: "Atenção!",
    });
  };

  const addFailToast = () => {
    toast({
      description: "Assinatura vencida! Contate suporte.",
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

  // VARIÁVEL USENAVIGATE:
  const navigate = useNavigate();

  // LÓGICA SUBMISSÃO FORMULÁRIO:
  const onSubmitFunction = (data: Object, text: any) => {
    api
      .post("login/", data)
      .then((response) => {
        // console.log(response);
        const { signature_vality, super_user, cnpj, token } = response.data;

        // SUPERUSER:
        if (super_user) {
          // console.log("churros");
          addSuperUserToast();
          createSuperUserToken();
          navigate("/dashboardexternals");
        } else {
          // console.log("mortais");
          const now = Date.now();
          // console.log(now);

          // CONVERSÃO SIGNATURE PYTHON PARA JS:
          const dateSecondsToMiliseconds: number =
            Math.floor(signature_vality) * 1000;
          console.log(dateSecondsToMiliseconds);

          const delta = dateSecondsToMiliseconds - now;
          // console.log(delta);
          const fithteenInMiliseconds = 60 * 60 * 24 * 15 * 1000;
          // console.log(fithteenInMiliseconds);

          if (delta > fithteenInMiliseconds) {
            // console.log("em dia");
            addSuccessToast();
            userLogged();
            createUserToken(cnpj);
            navigate("/dashboardinternals");
          } else if (delta <= fithteenInMiliseconds && delta > 0) {
            console.log("perto de vencer");
            addWarningToast();
            userLogged();
            createUserToken(cnpj);
            navigate("/dashboardinternals");
          }
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.message === "Request failed with status code 401") {
          addFailToast();
        } else {
          addNonLoggedToast();
        }
      });
  };
  // console.log(errors);

  const handleClick = (e: React.MouseEvent<HTMLElement>, func: () => void) => {
    console.log(e);
    func();
  };

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
                // onChange={(evt) => setUsername(evt)}
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
                          onClick={(e) => handleClick(e, userUnvisible)}
                        >
                          <VisibilityOff />
                        </Button>
                      ) : (
                        <Button
                          className={classes.passwordButton}
                          onClick={(e) => handleClick(e, userVisible)}
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
          <Box
            // className={classes.submitButtonBox}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
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
