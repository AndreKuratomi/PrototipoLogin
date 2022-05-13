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

export const PasswordAskContext = createContext();

export const PasswordAskProvider = ({ children }) => {
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

  // STATE PARA CARREGAMENTO:
  const [loading, setLoading] = useState(false);
  const LoadPage = () => {
    setLoading(true);
  };

  // GERAÇÂO DE 'TOKEN':
  const createAuth = () => {
    // let token = uuidv4();
    const cryptoken = bcrypt.genSaltSync(10);
    localStorage.setItem("@token: NewEmailToken", JSON.stringify(cryptoken));
  };

  // ENVIO DE EMAIL:
  const [toSend, setToSend] = useState({
    user: "",
    email: "",
    random_password: uuidv4(),
    link: "http://localhost:3000/changepassword",
    reply_to: "suporte.vestcasa@gmail.com",
    date: new Date(),
    new_password: "",
  });

  const onSubmit = async (form, e) => {
    console.log(form);
    LoadPage();
    e.preventDefault();
    await send(
      "service_rvorkr9",
      "template_i12spvo",
      toSend,
      "s0HlgmnHFp7vXdTbJ"
    )
      .then((response) => {
        addSuccessToast();
        createAuth();
        setLoading(false);
        console.log("Email enviado!", response.status, response.text);
      })
      .catch((err) => {
        addFailToast();
        setLoading(false);
        console.log("Algo deu errado!", err);
      });
    // }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.placeholder]: e.target.value });
  };

  return (
    <PasswordAskContext.Provider
      value={{ toSend, onSubmit, handleChange, loading, LoadPage }}
    >
      {children}
    </PasswordAskContext.Provider>
  );
};

export const usePasswordAsk = () => useContext(PasswordAskContext);
