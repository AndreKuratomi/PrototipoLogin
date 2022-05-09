import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  v1 as uuidv1,
  v2 as uuidv2,
  v3 as uuidv3,
  v4 as uuidv4,
  v5 as uuidv5,
} from "uuid";

import { Box, Button, TextField, Typography } from "@material-ui/core";

import { useTextInput } from "../../providers/TextInput";
import { makeStyles } from "@material-ui/styles";

import { send } from "emailjs-com";

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
  const { text } = useTextInput();
  //   // https://medium.com/geekculture/how-to-send-emails-from-a-form-in-react-emailjs-6cdd21bb4190
  const [toSend, setToSend] = useState({
    user: "",
    to: "",
    random_password: uuidv4(),
    link: "http://localhost:3000/changepassword",
    reply_to: "suporte.vestcasa@gmail.com",
    date: new Date(),
  });

  // const formSchema = yup.object().shape({
  //   user: yup.string().required("Remetente obrigatório!"),
  //   to: yup.string().required("Destinatário obrigatório!"),
  //   message: yup.string().required("Menssagem obrigatória!"),
  //   reply_to: yup.string().required("Cópia obrigatória!"),
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(formSchema),
  // });

  // const navigate = useNavigate();
  console.log(toSend);

  // const onSubmitFunction = (data) => {
  //   console.log(text);

  //   navigate("/dashboard");
  // };

  const onSubmit = (e) => {
    // console.log(e);
    e.preventDefault();
    send("service_rvorkr9", "template_i12spvo", toSend, "s0HlgmnHFp7vXdTbJ")
      .then((response) => {
        console.log("Email enviado!", response.status, response.text);
      })
      .catch((err) => {
        console.log("Algo deu errado!", err);
      });
  };
  // console.log(onSubmit);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.placeholder]: e.target.value });
  };

  const classes = useStyles();

  return (
    <article>
      <form
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={onSubmit}
        className={classes.formControl}
      >
        <Box>
          <TextField
            margin="normal"
            variant="standard"
            className={classes.textField}
            type="text"
            name="user"
            label="Digite aqui seu usuário"
            placeholder="user"
            value={toSend.user}
            onChange={handleChange}
            // {...register("from")}
            // error={!!errors.from}
            // helperText={errors.from?.message}
          />
        </Box>
        <Box>
          <TextField
            margin="normal"
            variant="standard"
            className={classes.textField}
            type="text"
            name="to"
            label="Digite aqui seu email"
            placeholder="to"
            value={toSend.to}
            onChange={handleChange}
            // {...register("to")}
            // error={!!errors.to}
            // helperText={errors.to?.message}
          />
        </Box>
        {/* <Box>
          <TextField
            margin="normal"
            variant="standard"
            className={classes.textField}
            type="text"
            name="message"
            label="message"
            placeholder="message"
            value={toSend.message}
            onChange={handleChange}
            // {...register("message")}
            // error={!!errors.message}
            // helperText={errors.message?.message}
          />
        </Box>
        <Box>
          <TextField
            margin="normal"
            variant="standard"
            className={classes.textField}
            type="text"
            name="reply_to"
            label="reply_to"
            placeholder="reply_to"
            value={toSend.reply_to}
            onChange={handleChange}
            // {...register("reply_to")}
            // error={!!errors.reply_to}
            // helperText={errors.reply_to?.message}
          />
        </Box> */}
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
