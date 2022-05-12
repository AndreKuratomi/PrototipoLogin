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

export const PasswordConfirmContext = createContext();

export const PasswordConfirmProvider = ({ children }) => {
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
  const [toSend, setToSend] = useState({
    user: "",
    email: "",
    random_password: uuidv4(),
    link: "http://localhost:3000/changepassword",
    reply_to: "suporte.vestcasa@gmail.com",
    date: new Date(),
    new_password: "",
  });

  const onSubmit = (form, e) => {
    e.preventDefault();
    send("service_rvorkr9", "template_jnw65yk", toSend, "s0HlgmnHFp7vXdTbJ")
      .then((response) => {
        addSuccessToast();
        console.log("Email enviado!", response.status, response.text);
        localStorage.clear();
        navigate("/login");
      })
      .catch((err) => {
        addFailToast();
        console.log("Algo deu errado!", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.placeholder]: e.target.value });
  };

  return (
    <PasswordConfirmContext.Provider value={{ toSend, onSubmit, handleChange }}>
      {children}
    </PasswordConfirmContext.Provider>
  );
};

export const usePasswordConfirm = () => useContext(PasswordConfirmContext);
