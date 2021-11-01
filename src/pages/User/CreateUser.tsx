import { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import api from "../../services/api";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    try {
      await api.post("/users", { name, email, password });
    } catch (error) {
      const err = error as AxiosError;
      alert(err.response?.data);
    }
  }

  return (
    <div id="page-create-user">
      <main>
        <div className="main-content">
          <form onSubmit={handleCreateUser}>
            <label htmlFor="user-name">Nome: </label>
            <input
              type="text"
              name="user-name"
              id="user-name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <label htmlFor="user-email">Email: </label>
            <input
              type="email"
              name="user-email"
              id="user-email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <label htmlFor="user-password">Senha: </label>
            <input
              type="password"
              name="user-password"
              id="user-password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export { CreateUser };
