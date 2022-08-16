import { ContainerLastList } from "../../components/ContainerLastList";
import { HeaderDashExternal } from "../../components/HeaderDashExternal";
import { ContainerLists } from "../../components/ContainerLists";

import { Container } from "@material-ui/core";

const DashboardExternals = () => {
  return (
    <Container>
      <HeaderDashExternal />

      <ContainerLastList />

      <ContainerLists />
    </Container>
  );
};

export default DashboardExternals;
