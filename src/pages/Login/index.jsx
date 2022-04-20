import { Link } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";

const Login = () => {
  return (
    <section>
      <article>
        <FormLogin />
        <div>
          <p>Não possui conta?</p>{" "}
          <p>
            Então vamos para o <Link to="/signup">Cadastro!</Link>
          </p>
        </div>
      </article>
      <figure>
        <img
          // src={}
          alt=""
        />
        <figcaption>Logo VestCasa</figcaption>
      </figure>
    </section>
  );
};

export default Login;
