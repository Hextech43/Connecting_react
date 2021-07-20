import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./HerokucCLI/Header";
import Homescreen from "./HerokucCLI/Homescreen";
import TaskInput from "./HerokucCLI/TaskInput";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homescreen} />
          <Route exact path="/addTask" component={TaskInput} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
