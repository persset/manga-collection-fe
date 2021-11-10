import { FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { useHistory } from "react-router";
import api from "../../services/api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(event: FormEvent) {
    event.preventDefault();

    let history = useHistory();

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);

    await api.post("/users", data);

    history.push("/");
  }
  return (
    <div id="page-signup">
      <main>
        <div className="main-content">
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Nome"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />

            <Button type="submit">Cadastrar</Button>
          </form>
        </div>
      </main>
    </div>
  );
}

export { Signup };
