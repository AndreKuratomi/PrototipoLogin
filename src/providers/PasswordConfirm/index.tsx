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

import { send } from "emailjs-com";

import { useToast } from "@chakra-ui/react";

interface IConfirmProvider {
  loading: boolean;
  onSubmit: (form: any, e: any) => Promise<void>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

interface IConfirmProviderProps {
  children: ReactNode;
}

export const PasswordConfirmContext = createContext({} as IConfirmProvider);

export const PasswordConfirmProvider = ({
  children,
}: IConfirmProviderProps) => {
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
    date0: date0,
    date1: date1,
    email: "",
    link: "http://localhost:3000/changepassword",
    random_password: reducedUUID,
    repetir_nova_senha: "",
    reply_to: "suporte.vestcasa@gmail.com",
    usuario: "",
  };

  // LÓGICA SUBMISSÃO PARA ENVIO EMAIL:
  const onSubmit = async (
    form: { email: string; repetir_nova_senha: string; usuario: string },
    e: { preventDefault: () => void }
  ) => {
    LoadPage();

    qwerty.email = form.email;
    qwerty.repetir_nova_senha = form.repetir_nova_senha;
    qwerty.usuario = form.usuario;

    e.preventDefault();

    await send(
      "service_j5y5zw8",
      "template_kmnv10u",
      qwerty,
      "AP4ks7G3vrdRa8AWJ"
    )
      .then((response) => {
        addSuccessToast();
        console.log("Email enviado!", response.status, response.text);
        localStorage.clear();
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
    <PasswordConfirmContext.Provider value={{ onSubmit, loading, setLoading }}>
      {children}
    </PasswordConfirmContext.Provider>
  );
};

export const usePasswordConfirm = () => useContext(PasswordConfirmContext);
