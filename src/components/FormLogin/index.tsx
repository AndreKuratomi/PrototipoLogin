import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../service/api";

import { usePasswordVisible } from "../../providers/PasswordVisibility";
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

import { useToast } from "@chakra-ui/react";

import { A, Article } from "./styles";
import { green, red } from "@mui/material/colors";

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
  },
  formControl: {
    background: "var(--formDarkGreen)",
    backgroundImage:
      "linear-gradient(to bottom left, var(--formDarkGreen), var(--formLightGreen))",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    width: "385px",
    height: "420px",
    "@media (max-width: 424px)": {
      width: "320px",
    },
  },
  image: {
    marginBottom: "1rem",
    width: "200px",
  },
  inputBox: {
    background: "var(--white)",
    borderRadius: "1rem",
    filter: "drop-shadow(0.7rem 0.7rem 0.1rem var(--alphaGray))",
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
    backgroundColor: "var(--shadowBlack)",
    border: "1px solid var(--white)",
    borderRadius: "1rem",
    color: "var(--white)",
    filter: "drop-shadow(0.7rem 0.7rem 0.1rem rgba(3,3,3,8%))",
    marginTop: "1rem",
    width: "15rem",

    "&:hover": {
      color: "var(--hoverBlue)",
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
        const { cnpj, signature_vality, super_user } = response.data;

        // SUPERUSER:
        if (super_user) {
          addSuperUserToast();
          createSuperUserToken(cnpj);
          navigate("/dashboardexternals");
        } else {
          const now = Date.now();

          // CONVERSÃO SIGNATURE PYTHON PARA JS:
          const dateSecondsToMiliseconds: number =
            Math.floor(signature_vality) * 1000;

          const delta = dateSecondsToMiliseconds - now;
          const fithteenInMiliseconds = 60 * 60 * 24 * 15 * 1000;

          if (delta > fithteenInMiliseconds) {
            addSuccessToast();
            userLogged();
            createUserToken(cnpj);
            navigate("/dashboardinternals");
          } else if (delta <= fithteenInMiliseconds && delta > 0) {
            addWarningToast();
            userLogged();
            createUserToken(cnpj);
            navigate("/dashboardinternals");
          }
        }
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 401") {
          addFailToast();
        } else {
          addNonLoggedToast();
        }
      });
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>, func: () => void) => {
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
              {/* <img src={LogoVestcasa} alt="Logo Vestcasa" /> */}
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
                variant="standard"
                {...register("email")}
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
