import React from "react";
import AdBoard from "./AdBoard";
import Login from "./Login";
//import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={AdBoard} exact/>
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
