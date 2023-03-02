import "./App.css";
import Hello from "./component/Hello";
import Login from "./component/Login";
import AddProject from "./component/AddProject";
import Socket from "./component/Socket";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/log" component={Hello} />
          <Route exact path="/" component={Socket} />
          <Route path="/reg" component={Login} />
          <Route path="/AddProject" component={AddProject} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
