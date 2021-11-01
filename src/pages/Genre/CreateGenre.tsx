import { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import api from "../../services/api";

function CreateGenre() {
  const [name, setName] = useState("");

  async function handleCreateGenre(event: FormEvent) {
    event.preventDefault();

    try {
      await api.post("/genres", { name });
    } catch (error) {
      const err = error as AxiosError;
      alert(err.response?.data);
    }
  }

  return (
    <div id="page-create-genre">
      <main>
        <div className="main-content">
          <form onSubmit={handleCreateGenre}>
            <label htmlFor="genre-name">Gênero: </label>
            <input
              type="text"
              name="genre-name"
              id="genre-name"
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

export { CreateGenre };
