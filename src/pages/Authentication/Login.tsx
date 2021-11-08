import "../../styles/login.css";

function Login() {
  async function handleLogin() {}
  return (
    <div id="page-login">
      <main>
        <div className="main-content">
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Insira o seu nome de usuário!" />
            <input type="password" placeholder="Insira a sua senha!" />

            <button type="submit">Entrar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export { Login };
