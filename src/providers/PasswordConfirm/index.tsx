import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IConfirmProvider {
  loading: boolean;
  LoadPage: () => void;
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

  // // TOASTS:
  // const toast = useToast();

  // // VARIÁVEL SENHA PROVISÓRIA:
  // const reducedUUID = uuidv4().substring(0, 13);

  // // FORMATAÇÃO DE DATA:
  // const rawDate = new Date();
  // const date0 = rawDate.toLocaleString("pt-BR").split(" ")[0]; // dd/mm/aaaa
  // const date1 = rawDate.toLocaleString("pt-BR").split(" ")[1]; // hh:mm:ss

  // // ENVIO DE EMAIL:
  // let qwerty = {
  //   date0: date0,
  //   date1: date1,
  //   email: "",
  //   link: "http://localhost:3000/changepassword",
  //   random_password: reducedUUID,
  //   repetir_nova_senha: "",
  //   reply_to: "suporte.vestcasa@gmail.com",
  //   usuario: "",
  // };

  // const onSubmit = async (
  //   form: { email: string; repetir_nova_senha: string; usuario: string },
  //   e: { preventDefault: () => void }
  // ) => {
  //   qwerty.email = form.email;
  //   qwerty.repetir_nova_senha = form.repetir_nova_senha;
  //   qwerty.usuario = form.usuario;

  //   e.preventDefault();

  //   await send(
  //     "service_j5y5zw8",
  //     "template_kmnv10u",
  //     qwerty,
  //     "AP4ks7G3vrdRa8AWJ"
  //   )
  //     .then((response) => {
  //       console.log("Email enviado!", response.status, response.text);
  //     })
  //     .catch((err) => {
  //       console.log("Algo deu errado!", err);
  //       setLoading(false);
  //     });
  // };

  return (
    <PasswordConfirmContext.Provider value={{ LoadPage, loading, setLoading }}>
      {children}
    </PasswordConfirmContext.Provider>
  );
};

export const usePasswordConfirm = () => useContext(PasswordConfirmContext);
