import { Switch, Route } from "react-router-dom";
import { Component } from "react";
import RegistrationForm from "./components/RegistrationForm";

import Game from "./components/GreenLightRedLight";

class App extends Component {
  state = { name: "", prevScore: "", newScore: "" };

  render() {
    return (
      <Switch>
        <Route exact path="/" component={RegistrationForm} />
        <Route exact path="/game" component={Game} />
      </Switch>
    );
  }
}

export default App;
