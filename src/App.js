import { Switch, Route } from "react-router-dom";
import "./App.css";
import Customer from "./pages/Customer";
import Home from "./Components/Home";
import Company from "./pages/Company";
import members from "./Components/Members";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/customer/:id">
          <Customer members={members} />
        </Route>
        <Route exact path="/company/:id">
          <Company members={members} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
