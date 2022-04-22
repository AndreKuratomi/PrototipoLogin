import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";

const Login = () => {
  return (
    <section>
      <FormLogin />

      <figure>
        <img
          // src={}
          alt="Logo VestCasa"
        />
        <figcaption>Logo VestCasa</figcaption>
      </figure>
    </section>
  );
};

export default Login;
