import api from "../../services/api";
import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import tableIcons from "../../components/MaterialIconsTable";

function GetAuthors() {
  const [authors, setAuthors] = useState([]);
  //const [columns, setColumns] = useState([]);

  const columns = [
    { title: "ID", field: "id" },
    { title: "Nome", field: "name" },
    { title: "Data de Criação", field: "created_at" },
    { title: "Última Atualização", field: "updated_at" },
  ];

  useEffect(() => {
    async function handleTableData() {
      const response = await api.get("/authors");

      setAuthors(response.data);
    }

    handleTableData();
  }, []);

  return (
    <div id="page-get-author">
      <main>
        <div className="main-content">
          <MaterialTable
            columns={columns}
            data={authors}
            title="Teste"
            options={{ filtering: true }}
            icons={tableIcons}
          />
        </div>
      </main>
    </div>
  );
}

export { GetAuthors };
