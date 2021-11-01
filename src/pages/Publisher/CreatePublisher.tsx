import { FormEvent, useState } from "react";

function CreatePublisher() {
  const [name, setName] = useState("");

  async function handleCreatePublisher(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div id="page-create-publisher">
      <main>
        <div className="main-content">
          <form onSubmit={handleCreatePublisher}>
            <label htmlFor="publisher-name">Editora: </label>
            <input
              type="text"
              name="publisher-name"
              id="publisher-name"
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

export { CreatePublisher };
