import { CardsBIListByCategory } from "../CardsBIListByCategory";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "var(--lightGreen)",
    marginBottom: "1rem",
    paddingTop: "1rem",
  },
}));

export const ContainerCategoryList = () => {
  // STYLES:
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <CardsBIListByCategory />
    </Container>
  );
};
