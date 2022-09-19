import { Navigate } from "react-router-dom";

import { ContainerLastList } from "../../components/ContainerLastList";
import { ContainerLists } from "../../components/ContainerLists";
import { HeaderDashExternal } from "../../components/HeaderDashExternal";
import { ModalBackground } from "../../components/ModalBackground";
import { ModalLeaveAsk } from "../../components/ModalLeaveAsk";

import { Container } from "@material-ui/core";

import { useToast } from "@chakra-ui/react";

import { useOpenModal } from "src/providers/ModalOpen";
import { useUserLogin } from "src/providers/UserLogin";

const DashboardExternals = () => {
  // TOASTS:
  const toast = useToast();

  const notAskedToast = () => {
    toast({
      description: "O usuário não fez login.",
      duration: 5000,
      position: "top",
      status: "error",
      title: "Não autorizado",
    });
  };

  // PROVIDERS:
  const { open } = useOpenModal();
  const { userLogged } = useUserLogin();

  // AUTENTICAÇÃO PARA VERIFICAR SE O USUÁRIO FEZ O PEDIDO DE ALTERAÇÃO:

  const cnpj = JSON.parse(
    localStorage.getItem("@SuperUserLoggedToken:cnpj") || "null"
  );
  //

  //

  if (cnpj) {
    userLogged();
  } else {
    notAskedToast();
    return <Navigate to="/" />;
  }

  return (
    <Container>
      {open ? (
        <ModalBackground children={<ModalLeaveAsk open={open} />} />
      ) : (
        <></>
      )}

      <HeaderDashExternal />

      <ContainerLastList />

      <ContainerLists />
    </Container>
  );
};

export default DashboardExternals;
