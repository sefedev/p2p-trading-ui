import React, { Component } from "react";
import AdBoard from "./AdBoard";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route path="/" component={AdBoard} exact />
						<Login path="/Login" component={Login} exact />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
