import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  v1 as uuidv1,
  v2 as uuidv2,
  v3 as uuidv3,
  v4 as uuidv4,
  v5 as uuidv5,
} from "uuid";

import { send } from "emailjs-com";

import { useToast } from "@chakra-ui/react";

export const PasswordConfirmContext = createContext();

export const PasswordConfirmProvider = ({ children }) => {
  // STATE PARA PROCESSAMENTO INFORMAÇÕES FORMULÁRIO:
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

  // VARIÁVEL USENAVIGATE:
  const navigate = useNavigate();

  // VARIÁVEL SENHA PROVISÓRIA:
  const reducedUUID = uuidv4().substring(0, 13);

  // FORMATAÇÃO DE DATA:
  const rawDate = new Date();
  const date0 = rawDate.toLocaleString("pt-BR").split(" ")[0]; // dd/mm/aaaa
  const date1 = rawDate.toLocaleString("pt-BR").split(" ")[1]; // hh:mm:ss

  // ENVIO DE EMAIL:
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

  // LÓGICA SUBMISSÃO PARA ENVIO EMAIL:
  const onSubmit = (form, e) => {
    LoadPage();

    qwerty.usuario = form.usuario;
    qwerty.email = form.email;
    qwerty.repetir_nova_senha = form.repetir_nova_senha;

    e.preventDefault();

    send("service_j5y5zw8", "template_kmnv10u", qwerty, "AP4ks7G3vrdRa8AWJ")
      .then((response) => {
        addSuccessToast();
        setLoading(false);
        console.log("Email enviado!", response.status, response.text);
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        addFailToast();
        setLoading(false);
        console.log("Algo deu errado!", err);
      });
  };

  return (
    <PasswordConfirmContext.Provider value={{ onSubmit, loading }}>
      {children}
    </PasswordConfirmContext.Provider>
  );
};

export const usePasswordConfirm = () => useContext(PasswordConfirmContext);
