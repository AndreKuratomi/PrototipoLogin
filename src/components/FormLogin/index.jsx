import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, FormControl, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// import { Form } from "./styles";

const useStyles = makeStyles((theme) => ({
  formControl: { backgroundColor: "#009E4F", padding: "" },
  textField: { backgroundColor: "#FFF", borderRadius: 3 },
}));

export const FormLogin = () => {
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

  const onSubmitFunction = (data) => {
    //aqui virá a requisição
    console.log(data);
  };

  const classes = useStyles();

  return (
    // <Paper>
    <FormControl
      onSubmit={handleSubmit(onSubmitFunction)}
      className={classes.formControl}
    >
      <div>
        <TextField
          className={classes.textField}
          label="Username"
          margin="normal"
          variant="filled"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
      </div>
      <div>
        <TextField
          className={classes.textField}
          label="Password"
          type="password"
          margin="normal"
          variant="filled"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <Button type="submit" variant="contained" color="primary" size="large">
        Entrar
      </Button>
    </FormControl>
    // </Paper>
  );
};
