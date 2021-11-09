import "../../styles/login.scss";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

function Login() {
  async function handleLogin() {}

  return (
    <div id="page-login">
      <aside>
        <strong>Mantenha suas coleções facilmente</strong>
        <p>Atualize ela em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha" />

            <Button type="submit">Entrar</Button>
          </form>
          <p>
            Não tem uma conta?
            <Link to="/signup">Criar</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export { Login };
