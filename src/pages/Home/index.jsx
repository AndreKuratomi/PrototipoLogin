import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Box>
        {/* <Typography>Não possui conta?</Typography> */}
        {/* //{" "} */}
        <Typography>
          Vamos para o{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Cadastro
          </Link>
        </Typography>
        <Typography>
          Vamos para o{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Home;
