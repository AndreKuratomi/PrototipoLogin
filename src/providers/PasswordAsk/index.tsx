import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  v1 as uuidv1,
  // v2 as uuidv2,
  v3 as uuidv3,
  v4 as uuidv4,
  v5 as uuidv5,
} from "uuid";

import bcrypt from "bcryptjs";

import { send } from "emailjs-com";

import { useToast } from "@chakra-ui/react";

interface IAskProvider {
  loading: boolean;
  onSubmit: (form: any, e: any) => Promise<void>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

interface IAskProviderProps {
  children: ReactNode;
}

export const PasswordAskContext = createContext({} as IAskProvider);

export const PasswordAskProvider = ({ children }: IAskProviderProps) => {
  // STATE PARA PROCESSAMENTO INFORMAÇÕES FORMULÁRIO:
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

  // GERAÇÂO DE 'TOKEN' E ALOCAÇÃO NO LOCALSTORAGE:
  const createAuth = () => {
    const cryptoken = bcrypt.genSaltSync(10);
    localStorage.setItem("@token: NewEmailToken", JSON.stringify(cryptoken));
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
    date0: date0,
    date1: date1,
    email: "",
    link: "http://localhost:3000/changepassword",
    nova_senha: "",
    random_password: reducedUUID,
    reply_to: "suporte.vestcasa@gmail.com",
    usuario: "",
  };

  const onSubmit = async (
    form: { email: string; repeatNewPassword: any; usuario: string },
    e: { preventDefault: () => void }
  ) => {
    LoadPage();

    qwerty.email = form.email;
    qwerty.nova_senha = form.repeatNewPassword;
    qwerty.usuario = form.usuario;

    e.preventDefault();

    await send(
      "service_j5y5zw8",
      "template_qya1x9k",
      qwerty,
      "AP4ks7G3vrdRa8AWJ"
    )
      .then((response) => {
        addSuccessToast();
        console.log("Email enviado!", response.status, response.text);
        createAuth();
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        addFailToast();
        console.log("Algo deu errado!", err);
        setLoading(false);
      });
  };

  return (
    <PasswordAskContext.Provider value={{ onSubmit, loading, setLoading }}>
      {children}
    </PasswordAskContext.Provider>
  );
};

export const usePasswordAsk = () => useContext(PasswordAskContext);
