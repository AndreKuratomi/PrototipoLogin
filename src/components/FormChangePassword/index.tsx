import { Link, Navigate, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../providers/Auth";
import { usePasswordConfirm } from "../../providers/PasswordConfirm";
import { usePasswordVisible } from "../../providers/PasswordVisibility";

import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import {
  AccessTime,
  Password,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { green, red } from "@mui/material/colors";

import LogoVestcasa from "../../assets/figma_imgs/LogoVestcasa.png";

import { useToast } from "@chakra-ui/react";

import { A, Article } from "./styles";
import api from "src/service/api";

const useStyles = makeStyles((theme) => ({
  color: {
    color: "#fff",
  },
  // buttonSingle: {
  //   backgroundColor: "#3f51b5",
  //   margin: "0.5rem 0",
  //   width: "16rem",
  //   "@media (min-width: 768px)": {
  //     margin: "1rem 1rem 0 1rem",
  //     width: "15rem",
  //   },
  // },
  // buttons: {
  //   display: "flex",
  //   flexDirection: "column",
  //   "@media (min-width: 768px)": {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //   },
  // },
  formControl: {
    background: "#009E4F",
    backgroundImage: "linear-gradient(to bottom left, #009E4F, #22BA87)",
    borderRadius: "1rem",
    // backgroundImage: `url(${FormChangePasswordMobile})`,
    // borderRadius: "5%",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem",
    width: "20rem",
    "@media (min-width: 768px)": {
      // backgroundImage: `url(${FormChangePasswordDesktop})`,
      // flexWrap: "wrap",
      width: "30rem",
      height: "30rem",
    },
  },
  image: {
    width: "13rem",
  },
  inputBox: {
    // backgroundImage: `url(${Input})`,
    background: "#fff",
    borderRadius: "1rem",
    filter: "drop-shadow(0.7rem 0.7rem 0.1rem rgba(3,3,3,8%))",
    padding: "0 0.5rem",
    width: "280px",
    height: "3.688rem",
    "& .MuiInputLabel-formControl": {
      left: "0.25rem",
      top: "-0.3rem",
    },
    "& .MuiFormControl-marginNormal": {
      // NÃO FUNCIONA!
      marginTop: "10px",
    },
    "@media (min-width: 768px)": {
      margin: "0.5rem 1rem",
      width: "25rem",
    },
  },
  inputsAllBox: {
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 768px)": {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      width: "20rem",
      height: "22rem",
    },
  },
  passwordButton: {
    color: "grey",
    minWidth: "20px",
    padding: "0px",
  },
  submitButton: {
    backgroundColor: "rgba(63 81 181 0.04)",
    border: "1px solid #fff",
    borderRadius: "1rem",
    color: "#fff",
    filter: "drop-shadow(0.7rem 0.7rem 0.1rem rgba(3,3,3,8%))",
    margin: "0 1rem",
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
    marginTop: "1rem",
    // "&:hover": {
    // color: "#3f51b5",
    // },
  },
  suggestionBox: {
    color: "#FFF",
    marginTop: "0.3srem",
    textAlign: "center",
    textDecoration: "none",
    "& .MuiTypography-body1": {
      fontSize: "0.8rem",
    },
    "@media (min-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "20rem",
    },
  },
  textFieldsContent: {
    width: "20rem",
    ".MuiFormControl-marginNormal": {
      marginTop: "16px",
    },
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
  const { loading, setLoading, LoadPage } = usePasswordConfirm();
  const {
    visible1,
    setVisible1,
    userVisible1,
    userUnvisible1,
    visible2,
    setVisible2,
    userVisible2,
    userUnvisible2,
    visible3,
    setVisible3,
    userVisible3,
    userUnvisible3,
  } = usePasswordVisible();

  // TOASTS:
  const toast = useToast();

  const addSuccessToast = () => {
    toast({
      description: "Senha alterada com sucesso!",
      duration: 5000,
      position: "top",
      status: "success",
      title: "Alteração feita com sucesso!",
    });
  };
  const addFailToast = () => {
    toast({
      description:
        "Algo deu errado! Verifique se os dados preenchidos estão corretos.",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Falha na alteração!",
    });
  };

  const notAskedToast = () => {
    toast({
      description: "O usuário não fez pedido de alteração de senha.",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Não autorizado",
    });
  };
  // const emailErrorToast = (algo: string) => {
  //   toast({
  //     description: algo,
  //     duration: 3000,
  //     position: "top",
  //     status: "error",
  //     title: "Erro!",
  //   });
  // };
  const protoConflictToast = (algo: string) => {
    toast({
      description: algo,
      duration: 3000,
      position: "top",
      status: "error",
      title: "Erro!",
    });
  };
  const repeatPasswordToast = (algo: string) => {
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
    password_provisional: yup
      .string()
      .required("Senha provisória obrigatória!"),
    new_password: yup
      .string()
      .notOneOf(
        [yup.ref("password_provisional")],
        "A nova senha não deve ser igual à provisória!"
      )
      .required("Nova senha obrigatória!"),
    repeat_new_password: yup
      .string()
      .oneOf([yup.ref("new_password")], "As senhas devem ser iguais!")
      .required("Repetir nova senha obrigatória!"),
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

  // COMPORTAMENTO TOASTS DE ACORDO COM ERROS NOS INPUTS:
  if (
    errors.new_password &&
    errors.new_password?.message ===
      "A nova senha não deve ser igual à provisória!"
  ) {
    protoConflictToast(errors.new_password?.message);
  }
  if (
    errors.repeat_new_password &&
    errors.repeat_new_password?.message === "As senhas devem ser iguais!"
  ) {
    repeatPasswordToast(errors.repeat_new_password?.message);
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

  // LÓGICA SUBMISSÃO PARA ENVIO EMAIL:
  const onSubmit = (data: Object) => {
    LoadPage();
    api
      .post("change/", data)
      .then((response) => {
        addSuccessToast();
        localStorage.clear();
        navigate("/");
        setLoading(false);
        console.log(response);
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 500") {
          protoConflictToast("Verificar senha provisória fornecida por email.");
        } else {
          addFailToast();
          console.log(err);
        }
        setLoading(false);
      });
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>, func: () => void) => {
    console.log(e);
  };

  return (
    <Article>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formControl}>
        <Box sx={{ marginBottom: "1rem" }}>
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
            {Object.keys(errors).some(
              (elt) => elt === "password_provisional"
            ) ? (
              <AccessTime sx={{ color: red[500] }} />
            ) : (
              <AccessTime sx={{ color: green[700] }} />
            )}
            <TextField
              className={classes.textFieldsContent}
              error={!!errors.password_provisional}
              label="Senha provisória"
              placeholder="senha provisória"
              margin="normal"
              type={visible1 ? "text" : "password"}
              variant="standard"
              {...register("password_provisional")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    {visible1 ? (
                      <Button
                        className={classes.passwordButton}
                        onClick={(e) => handleClick(e, userUnvisible1)}
                      >
                        <VisibilityOff />
                      </Button>
                    ) : (
                      <Button
                        className={classes.passwordButton}
                        onClick={(e) => handleClick(e, userVisible1)}
                      >
                        <Visibility />
                      </Button>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            className={classes.inputBox}
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            {Object.keys(errors).some(
              (elt) => elt === "password_provisional"
            ) ? (
              <Password sx={{ color: red[500] }} />
            ) : (
              <Password sx={{ color: green[700] }} />
            )}
            <TextField
              className={classes.textFieldsContent}
              error={!!errors.new_password}
              label="Nova senha"
              margin="normal"
              placeholder="nova senha"
              variant="standard"
              type={visible2 ? "text" : "password"}
              {...register("new_password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    {visible2 ? (
                      <Button
                        className={classes.passwordButton}
                        onClick={(e) => handleClick(e, userUnvisible2)}
                      >
                        <VisibilityOff />
                      </Button>
                    ) : (
                      <Button
                        className={classes.passwordButton}
                        onClick={(e) => handleClick(e, userVisible2)}
                      >
                        <Visibility />
                      </Button>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            className={classes.inputBox}
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            {Object.keys(errors).some(
              (elt) => elt === "password_provisional"
            ) ? (
              <Password sx={{ color: red[500] }} />
            ) : (
              <Password sx={{ color: green[700] }} />
            )}
            <TextField
              className={classes.textFieldsContent}
              error={!!errors.repeat_new_password}
              label="Repetir nova senha"
              margin="normal"
              placeholder="repetir nova senha"
              type={visible3 ? "text" : "password"}
              variant="standard"
              {...register("repeat_new_password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    {visible3 ? (
                      <Button
                        className={classes.passwordButton}
                        onClick={(e) => handleClick(e, userUnvisible3)}
                      >
                        <VisibilityOff />
                      </Button>
                    ) : (
                      <Button
                        className={classes.passwordButton}
                        onClick={(e) => handleClick(e, userVisible3)}
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
        <Box className={classes.suggestionBox}>
          <Box>
            <Typography className={classes.color}>
              Sugestão: usar caracteres especiais/letras maiúsculas/letras
              minúsculas e números
            </Typography>
          </Box>
          <Box className={classes.submitButtonBox}>
            {loading ? (
              <Button
                className={classes.submitButton}
                color="primary"
                disabled={true}
                size="large"
                variant="contained"
                type="submit"
              >
                Enviando...
              </Button>
            ) : (
              <Button
                className={classes.submitButton}
                color="primary"
                size="large"
                variant="outlined"
                type="submit"
              >
                Enviar
              </Button>
            )}
          </Box>
        </Box>
      </form>
    </Article>
  );
};
