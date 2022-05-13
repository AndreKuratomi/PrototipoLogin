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
  const reducedUUID = uuidv4().substring(0, 13);
  const [toSend, setToSend] = useState({
    user: "",
    email: "",
    random_password: reducedUUID,
    link: "http://localhost:3000/changepassword",
    reply_to: "suporte.vestcasa@gmail.com",
    date: new Date(),
    new_password: "",
  });
  let qwerty = {
    user: "",
    email: "",
    random_password: reducedUUID,
    link: "http://localhost:3000/changepassword",
    reply_to: "suporte.vestcasa@gmail.com",
    date: new Date(),
    new_password: "",
  };
  console.log(toSend);
  // const
  // let selectForm = { ...toSend };
  const onSubmit = (form, e) => {
    console.log(form);
    // console.log(selectForm);
    qwerty.user = form.user;
    qwerty.email = form.email;
    qwerty.new_password = form.repeatNewPassword;
    // setToSend({ ...toSend, ...qwerty });
    e.preventDefault();
    send("service_rvorkr9", "template_jnw65yk", qwerty, "s0HlgmnHFp7vXdTbJ")
      // send("service_rvorkr9", "template_jnw65yk", toSend, "s0HlgmnHFp7vXdTbJ")
      .then((response) => {
        addSuccessToast();
        console.log("Email enviado!", response.status, response.text);
        localStorage.clear();
        navigate("/login");
      })
      .catch((err) => {
        console.log(qwerty);
        // console.log(toSend);
        addFailToast();
        console.log("Algo deu errado!", err);
      });
  };
  // console.log(selectForm);
  // // const {user: 'cvbn', email: 'c@c.c', currentPassword: 'cvbn', newPassword: 'zxcv', repeatNewPassword: 'zxcv'}

  // for (let elem in toSend) {
  //   if (toSend[elem] === toSend["user"]) {
  //     toSend["user"] = selectForm["user"];
  //     // elem = v.user
  //   }
  //   if (toSend[elem] === toSend["email"]) {
  //     toSend["email"] = selectForm["email"];
  //     // elem = v.user
  //   }
  //   if (toSend[elem] === toSend["new_password"]) {
  //     toSend["new_password"] = selectForm["repeatNewPassword"];
  //     // elem = v.user
  //   }
  // }
  const handleChange = (e) => {
    console.log(e);
    // setToSend({ ...toSend, [e.target.placeholder]: e.target.value });
    // setToSend({ ...toSend, ...selectForm });
  };
  console.log(qwerty);

  return (
    <PasswordConfirmContext.Provider value={{ toSend, onSubmit, handleChange }}>
      {children}
    </PasswordConfirmContext.Provider>
  );
};

export const usePasswordConfirm = () => useContext(PasswordConfirmContext);
