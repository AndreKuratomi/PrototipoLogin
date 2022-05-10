import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Button, TextField, Typography } from "@material-ui/core";

import { usePasswordAsk } from "../../providers/PasswordAsk";
import { makeStyles } from "@material-ui/styles";

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

const Email = () => {
  // const { text } = useTextInput();
  const { handleChange, onSubmit, toSend } = usePasswordAsk();
  //   // https://medium.com/geekculture/how-to-send-emails-from-a-form-in-react-emailjs-6cdd21bb4190

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

  // const navigate = useNavigate();

  // const onSubmitFunction = (data) => {
  //   //aqui virá a requisição
  //   console.log(data);
  //   navigate("/login");
  // };

  const classes = useStyles();

  return (
    <article>
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
