import { useState } from "react";
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
  // https://medium.com/geekculture/how-to-send-emails-from-a-form-in-react-emailjs-6cdd21bb4190
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefaut();
    send("service_rvorkr9", "template_i12spvo", toSend, "s0HlgmnHFp7vXdTbJ")
      .then((response) => {
        console.log("Email enviado!", response.status, response.text);
      })
      .catch((err) => {
        console.log("Algo deu errado!", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const classes = useStyles();

  return (
    <article>
      <form>
        <TextField
          margin="normal"
          variant="standart"
          className={classes.textField}
          type="text"
          label="from"
          placeholder="from"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          variant="standart"
          className={classes.textField}
          type="text"
          label="to"
          placeholder="to"
          value={toSend.to_name}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          variant="standart"
          className={classes.textField}
          type="text"
          label="message"
          placeholder="message"
          value={toSend.message}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          variant="standart"
          className={classes.textField}
          type="text"
          label="reply_to"
          placeholder=""
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          className={classes.button}
          color="primary"
          size="large"
        >
          Cadastrar
        </Button>
        {/* <Box>
        <Typography>
          Olá, {text}! Recebemos seu pedido por nova senha.
        </Typography>
      </Box>
      <Box>
        <Typography>
          Segue abaixo a senha provisória mais o link para alteração de senha:
        </Typography>
        <Typography>Senha provisória: {uuidv4()}</Typography>
        <Typography>Link para alteração de senha: (link)</Typography>
      </Box>
      <Box>
        <Typography>À disposição,</Typography>
        <Typography>Suporte VestCasa</Typography>
      </Box> */}
      </form>
    </article>
  );
};

export default Email;
