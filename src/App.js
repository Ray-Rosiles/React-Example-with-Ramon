import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  const [num, setNum] = useState(2);

  function numM() {
    setNum(3);
  }

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/home">
            <Header />
          </Route>
          <Route path="/results"></Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
