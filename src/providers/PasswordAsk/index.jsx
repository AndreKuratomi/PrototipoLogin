import { createContext, useContext, useState } from "react";
import {
  v1 as uuidv1,
  v2 as uuidv2,
  v3 as uuidv3,
  v4 as uuidv4,
  v5 as uuidv5,
} from "uuid";
import bcrypt from "bcryptjs";

import { send } from "emailjs-com";

import { useToast } from "@chakra-ui/react";
import { useLoading } from "../Loading";
import { useNavigate } from "react-router-dom";

export const PasswordAskContext = createContext();

export const PasswordAskProvider = ({ children }) => {
  // const { setLoading, LoadPage } = useLoading();
  const [loading, setLoading] = useState(false);

  const LoadPage = () => {
    setLoading(true);
  };

  // TOASTS:
  const toast = useToast();

  const addSuccessToast = () => {
    toast({
      description: "Confira sua caixa de emails.",
      duration: 5000,
      position: "top",
      status: "success",
      title: "Solicitação enviada com sucesso!",
    });
  };
  const addFailToast = () => {
    toast({
      description:
        "Algo deu errado! Verifique se os dados preenchidos estão corretos ou se o email está cadastrado",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Falha na solicitação!",
    });
  };

  // GERAÇÂO DE 'TOKEN':
  const createAuth = () => {
    // let token = uuidv4();
    const cryptoken = bcrypt.genSaltSync(10);
    localStorage.setItem("@token: NewEmailToken", JSON.stringify(cryptoken));
  };

  const navigate = useNavigate();

  // ENVIO DE EMAIL:
  const reducedUUID = uuidv4().substring(0, 13);

  // Formatação de data:
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
    nova_senha: "",
  };

  const onSubmit = async (form, e) => {
    LoadPage();

    qwerty.usuario = form.usuario;
    qwerty.email = form.email;
    qwerty.new_password = form.repeatNewPassword;

    e.preventDefault();
    // await send(
    //   "service_rvorkr9",
    //   "template_i12spvo",
    //   toSend,
    //   "s0HlgmnHFp7vXdTbJ"
    // )
    console.log(qwerty);
    console.log(form);
    await send(
      "service_j5y5zw8",
      "template_qya1x9k",
      qwerty,
      "AP4ks7G3vrdRa8AWJ"
    )
      .then((response) => {
        addSuccessToast();
        createAuth();
        setLoading(false);
        navigate("/");
        console.log("Email enviado!", response.status, response.text);
      })
      .catch((err) => {
        addFailToast();
        setLoading(false);
        console.log(qwerty);
        console.log("Algo deu errado!", err);
      });
    // }
  };

  const handleChange = (e) => {
    console.log(e);
    // setToSend({ ...toSend, [e.target.placeholder]: e.target.value });
  };

  return (
    <PasswordAskContext.Provider value={{ onSubmit, handleChange, loading }}>
      {children}
    </PasswordAskContext.Provider>
  );
};

export const usePasswordAsk = () => useContext(PasswordAskContext);
