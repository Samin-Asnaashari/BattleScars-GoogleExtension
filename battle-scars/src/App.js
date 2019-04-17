import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import SideBar from "./components/sideBar";
import MainContent from "./components/mainContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggleSidebar() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
  render() {
    return (
      <React.Fragment>
        <main className="container">
          {/* <Switch>
          <Route path="/extraExercise" component={ExtraExercise} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="movies" />
          <Redirect from="/not-found" />
        </Switch> */}
          <SideBar
            toggleSidebar={this.toggleSidebar.bind(this)}
            expanded={this.state.expanded}
          />
          <MainContent expanded={this.state.expanded} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
