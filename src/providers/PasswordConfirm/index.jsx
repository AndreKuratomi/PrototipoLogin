import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import {
  v1 as uuidv1,
  v2 as uuidv2,
  v3 as uuidv3,
  v4 as uuidv4,
  v5 as uuidv5,
} from "uuid";
import { send } from "emailjs-com";

import { useToast } from "@chakra-ui/react";

import { useAuth } from "../Auth";
import { useLoading } from "../Loading";

export const PasswordConfirmContext = createContext();

export const PasswordConfirmProvider = ({ children }) => {
  // const { setLoading, LoadPage } = useLoading();
  const [loading, setLoading] = useState(false);

  const LoadPage = () => {
    setLoading(true);
  };

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

  const navigate = useNavigate();

  // ENVIO DE EMAIL:
  const reducedUUID = uuidv4().substring(0, 13);

  const rawDate = new Date();
  const date0 = rawDate.toLocaleString("pt-BR").split(" ")[0]; // dd/mm/aaaa
  const date1 = rawDate.toLocaleString("pt-BR").split(" ")[1]; // hh:mm:ss

  let qwerty = {
    usuario: "",
    email: "",
    random_password: reducedUUID,
    link: "http://localhost:3000/changepassword",
    reply_to: "suporte.vestcasa@gmail.com",
    date0: date0,
    date1: date1,
    repetir_nova_senha: "",
  };
  console.log(qwerty.date0);
  console.log(qwerty.date1);

  const onSubmit = (form, e) => {
    LoadPage();
    console.log(e);
    console.log(form);
    qwerty.usuario = form.usuario;
    qwerty.email = form.email;
    qwerty.repetir_nova_senha = form.repetir_nova_senha;
    // setToSend({ ...toSend, ...qwerty });
    e.preventDefault();

    // Lógica para toasts erro formulário:
    // if (
    //   errors.nova_senha &&
    //   errors.nova_senha?.message ===
    //     "A nova senha não deve ser igual à provisória!"
    // ) {
    //   f1(errors.nova_senha?.message);
    // }

    // if (
    //   errors.repetir_nova_senha &&
    //   errors.repetir_nova_senha?.message === "As senhas devem ser iguais!"
    // ) {
    //   f2(errors.repetir_nova_senha?.message);
    // }

    send("service_j5y5zw8", "template_kmnv10u", qwerty, "AP4ks7G3vrdRa8AWJ")
      // send("service_rvorkr9", "template_jnw65yk", toSend, "s0HlgmnHFp7vXdTbJ")
      .then((response) => {
        addSuccessToast();
        setLoading(false);
        console.log("Email enviado!", response.status, response.text);
        localStorage.clear();
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        // console.log(toSend);
        addFailToast();
        setLoading(false);
        console.log("Algo deu errado!", err);
      });
  };

  const handleChange = (e) => {
    console.log(e);
    // setToSend({ ...toSend, [e.target.placeholder]: e.target.value });
    // setToSend({ ...toSend, ...selectForm });
  };

  return (
    <PasswordConfirmContext.Provider
      value={{ onSubmit, handleChange, loading }}
    >
      {children}
    </PasswordConfirmContext.Provider>
  );
};

export const usePasswordConfirm = () => useContext(PasswordConfirmContext);
