import { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import api from "../../services/api";

function CreateSeries() {
  const [name, setName] = useState("");
  const [publisher, setPublisher] = useState("Selecione uma editora");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [currentVolumes, setCurrentVolumes] = useState("");
  const [currentOriginVolumes, setCurrentOriginVolumes] = useState("");
  async function handleCreateSeries(event: FormEvent) {
    event.preventDefault();

    try {
      await api.post("/series", {
        name,
        publisher,
        countryOfOrigin,
        currentVolumes,
        currentOriginVolumes,
      });
    } catch (error) {
      const err = error as AxiosError;
      alert(err.response?.data);
    }
  }
  return (
    <div id="page-create-manga">
      <main>
        <div className="main-content">
          <form onSubmit={handleCreateSeries}>
            <label htmlFor="series-name">Nome: </label>
            <input
              type="text"
              name="series-name"
              id="author-name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <label htmlFor="publisher">Editora: </label>
            <select
              name="publisher"
              id="publisher"
              onChange={(event) => setPublisher(event.target.value)}
              value={publisher}
            >
              <option value="change">change</option>
            </select>
            <label htmlFor="country-of-origin">País de Origem: </label>
            <select
              name="country-of-origin"
              id="country-of-origin"
              onChange={(event) => setCountryOfOrigin(event.target.value)}
              value={countryOfOrigin}
            >
              <option value="country">Country</option>
            </select>
            <label htmlFor="current-volumes">
              Quantidade de volumes lançados:
            </label>
            <input
              type="number"
              name="current-volumes"
              id="current-volumes"
              onChange={(event) => setCurrentVolumes(event.target.value)}
              value={currentVolumes}
            />
            <label htmlFor="current-origin-volumes">
              Quantidade de volumes lançados no país de origiem:{" "}
            </label>
            <input
              type="number"
              name="current-origin-volumes"
              id="current-origin-volumes"
              onChange={(event) => setCurrentOriginVolumes(event.target.value)}
              value={currentOriginVolumes}
            />
          </form>
        </div>
      </main>
    </div>
  );
}

export { CreateSeries };
