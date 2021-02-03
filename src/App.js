import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./page/Home/Home.jsx";
import About from "./page/About/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
