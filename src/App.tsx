import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CreateAuthor } from "./pages/Author/CreateAuthor";
import { Login } from "./pages/Authentication/Login";
import { GetAuthors } from "./pages/Author/GetAuthors";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/authors/create" exact component={CreateAuthor} />
        <Route path="/authors/get" exact component={GetAuthors} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
