import { ContainerLastList } from "../../components/ContainerLastList";
import { ContainerLists } from "../../components/ContainerLists";
import { HeaderDashExternal } from "../../components/HeaderDashExternal";
import { ModalBackground } from "../../components/ModalBackground";
import { ModalLeaveAsk } from "../../components/ModalLeaveAsk";

import { Container } from "@material-ui/core";

import { useOpenModal } from "src/providers/ModalOpen";

const DashboardExternals = () => {
  // PROVIDER:
  const { open } = useOpenModal();

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
