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
  const { handleChange, onSubmit, toSend, loading } = usePasswordAsk();

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
        {loading ? (
          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            color="primary"
            size="large"
            disabled="true"
          >
            Enviando...
          </Button>
        ) : (
          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            color="primary"
            size="large"
          >
            Enviar
          </Button>
        )}
      </form>
    </article>
  );
};

export default Email;
