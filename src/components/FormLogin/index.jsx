import * as yup from yup;
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

export const FormLogin = () => {
    const formSchema = yup.object().shape({
        username: yup.string().required("Usuário obrigatório!"),
        password: yup.string().required("Senha obrigatória!")
    })

    const {register, handleSubmit} = useForm({resolver: yupResolver(formSchema)})

    const onSubmitFunction = (data) => {
        //aqui virá a requisição
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <input placeholder="Usuário" {...register("username")}/>
            {errors.username?.message}
            <input placeholder="Senha" type="password" {...register("password")}/>
            {errors.password?.message}
            <button type="submit">Entrar</button>
        </form>
    )
}