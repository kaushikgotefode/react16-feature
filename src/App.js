import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "./../src/components/featureComponents/featureComponents.scss";

import Header from "./components/layoutComponents/header/Header";
import BasicFormComponents from "./components/featureComponents/BasicFormComponents";
import ContainerComponent from "./components/hodComponents/ContainerComponent";
import BurgerBuilderProject from "./components/featureComponents/BurgerBuilderProject";
import ReactHooks from "./components/featureComponents/ReactHooks/ReactHooks";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <div className="welcome-page">Welcome to React</div>
          </Route>
          <Route path="/form-basics">
            <ContainerComponent classes="container feature-page">
              <BasicFormComponents />
            </ContainerComponent>
          </Route>
          <Route path="/react-hooks">
            <ContainerComponent classes="container feature-page">
              <ReactHooks />
            </ContainerComponent>
          </Route>
          <Route path="/burger-builder">
            <ContainerComponent classes="container feature-page">
              <BurgerBuilderProject />
            </ContainerComponent>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
