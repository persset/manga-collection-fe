import { FormEvent, useState } from "react";
import api from "../../services/api";

function CreateCategory() {
  const [name, setName] = useState("");

  async function handleCreateCategory(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div id="page-create-category">
      <main>
        <div className="main-content">
          <form onSubmit={handleCreateCategory}>
            <label htmlFor="category-name">Categoria: </label>
            <input
              type="text"
              name="category-name"
              id="category-name"
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

export { CreateCategory };
