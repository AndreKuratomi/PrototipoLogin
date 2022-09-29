import { Navigate } from "react-router-dom";

import { ContainerLastList } from "../../components/ContainerLastList";
import { ContainerLists } from "../../components/ContainerLists";
import { ContainerCategoryList } from "../../components/ContainerCategoryList";
import { HeaderDashExternal } from "../../components/HeaderDashExternal";
import { ModalBackground } from "../../components/ModalBackground";
import { ModalLeaveAsk } from "../../components/ModalLeaveAsk";

import { Container } from "@material-ui/core";

import { useToast } from "@chakra-ui/react";

import { useDashboard } from "src/providers/Dashboard";
import { useOpenModal } from "src/providers/ModalOpen";
import { useUserLogin } from "src/providers/UserLogin";
import { useTextInput } from "src/providers/TextInput";

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
  // const { selectedDashboard } = useDashboard();
  const { userLogged } = useUserLogin();
  const { finalText, text } = useTextInput();

  // AUTENTICAÇÃO PARA VERIFICAR SE O USUÁRIO ESTÁ LOGADO:
  const cnpj = JSON.parse(
    localStorage.getItem("@SuperUserLoggedToken:cnpj") || "null"
  );

  if (cnpj) {
    userLogged();
  } else {
    notAskedToast();
    return <Navigate to="/" />;
  }
  // console.log(selectedDashboard);
  return (
    <Container>
      {open ? (
        <ModalBackground children={<ModalLeaveAsk open={open} />} />
      ) : (
        <></>
      )}

      <HeaderDashExternal />

      <ContainerLastList />

      {finalText ? <ContainerCategoryList /> : <ContainerLists />}
      {/* {text ? <ContainerCategoryList /> : <ContainerLists />} */}
    </Container>
  );
};

export default DashboardExternals;
