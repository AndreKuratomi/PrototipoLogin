import { createContext, useContext, useState } from "react";
import {
  v1 as uuidv1,
  v2 as uuidv2,
  v3 as uuidv3,
  v4 as uuidv4,
  v5 as uuidv5,
} from "uuid";

import { send } from "emailjs-com";

export const PasswordConfirmContext = createContext();

export const PasswordConfirmProvider = ({ children }) => {
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
        console.log("Email enviado!", response.status, response.text);
      })
      .catch((err) => {
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
