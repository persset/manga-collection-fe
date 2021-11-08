import api from "../../services/api";
import MaterialTable from "material-table";
import { useState } from "react";

function GetAuthors() {
  const [authors, setAuthors] = useState([]);

  async function handleGetAllAuthors() {
    const response = await api.get("/authors");

    setAuthors(response.data);
  }

  handleGetAllAuthors();
  return (
    <div id="page-get-author">
      <main>
        <div className="main-content">
          <MaterialTable
            columns={[
              { title: "ID", field: "id" },
              { title: "Nome", field: "name" },
              { title: "Data de Criação", field: "created_at" },
              { title: "Última Atualização", field: "updated_at" },
            ]}
            data={authors}
            title="Teste"
          />
        </div>
      </main>
    </div>
  );
}

export { GetAuthors };
