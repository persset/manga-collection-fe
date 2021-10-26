import { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import api from "../../services/api";

function CreateAuthor() {
  const [name, setName] = useState("");
  async function handleCreateAuthor(event: FormEvent) {
    event.preventDefault();

    try {
      await api.post("/authors", { name });
    } catch (error) {
      const err = error as AxiosError;
      alert(err.response?.data);
    } finally {
    }
  }

  return (
    <div id="page-create-author">
      <main>
        <div className="main-content">
          <form onSubmit={handleCreateAuthor}>
            <label htmlFor="author_name">Nome: </label>
            <input
              type="text"
              name="author_name"
              id="author_name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export { CreateAuthor };
