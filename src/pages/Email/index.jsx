import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  v1 as uuidv1,
  v2 as uuidv2,
  v3 as uuidv3,
  v4 as uuidv4,
  v5 as uuidv5,
} from "uuid";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { usePasswordAsk } from "../../providers/PasswordAsk";

const useStyles = makeStyles({
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
});

// import { useTextInput } from "../../providers/TextInput";

const Email = () => {
  // const { text } = useTextInput();
  const { handleChange, onSubmit, toSend, handleClick } = usePasswordAsk();

  //   //

  // const [open, setOpen] = useState(false);

  // const openSnack = () => {
  //   setOpen(true);
  // };

  const formSchema = yup.object().shape({
    user: yup.string().required("Usuário obrigatório!"),
    email: yup.string().email().required("Email obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // if (auth) {
  // }

  const classes = useStyles();

  return (
    <article>
      {/* {!email && <SnackBarComponent duration={5000} severity={"error"} text={"Algo deu errado! Confira os dados digitados e/ou se o usuaŕio está cadastrado."}/>} */}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formControl}>
        <Box>
          <TextField
            margin="normal"
            variant="standard"
            className={classes.textField}
            type="text"
            // name="user"
            label="Digite aqui seu usuário"
            placeholder="user"
            {...register("user")}
            value={toSend.user}
            onChange={handleChange}
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
            // name="email"
            label="Digite aqui seu email"
            placeholder="email"
            {...register("email")}
            value={toSend.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          className={classes.button}
          color="primary"
          size="large"
        >
          Enviar
        </Button>
      </form>
    </article>
  );
};

export default Email;
