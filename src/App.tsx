import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CreateAuthor } from "./pages/Author/CreateAuthor";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/authors/create" exact component={CreateAuthor} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
