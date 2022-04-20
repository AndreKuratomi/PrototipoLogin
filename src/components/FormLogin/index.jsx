import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Paper, TextField } from "@material-ui/core";

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

  return (
    <Paper>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <TextField
          color="primary"
          label="Username"
          margin="normal"
          variant="filled"
          // required
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
          placeholder="Usuário"
          {...register("username")}
        />
        {/* {errors.username?.message} */}
        <TextField
          label="Password"
          type="password"
          margin="normal"
          variant="filled"
          // required
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          //   placeholder="Senha"
          //   type="password"
          //   {...register("password")}
        />
        {/* {errors.password?.message} */}
        <Button type="submit" variant="contained" color="primary" size="large">
          Entrar
        </Button>
      </form>
    </Paper>
  );
};
