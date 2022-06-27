import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

import Home from "./pages/Home";
import Prays from "./pages/Prays";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/prays" component={Prays} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
