import { Link } from "react-router-dom";

import { Box, Typography } from "@material-ui/core";

import { FormLogin } from "../../components/FormLogin";

const Login = () => {
  return (
    <section>
      <FormLogin />

      {/* <figure>
        <img
          // src={}
          alt="Logo VestCasa"
        />
        <figcaption>Logo VestCasa</figcaption>
      </figure> */}
      {/* <Typography>
        Vamos para{" "}
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </Typography> */}
    </section>
  );
};

export default Login;
