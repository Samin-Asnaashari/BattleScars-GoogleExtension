import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import "./App.scss";
import logo from "./logo.svg";
import SideDrawer from "./components/sideDrawer";
import MainContent from "./components/mainContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  // toggleSidebar() {
  //   this.setState({
  //     expanded: !this.state.expanded
  //   });
  // }

  render() {
    return (
      <React.Fragment>
        <main>
          {/* <SideBar
            toggleSidebar={this.toggleSidebar.bind(this)}
            expanded={this.state.expanded}
          /> */}
          <MainContent expanded={this.state.expanded} />
        </main>
        <SideDrawer />
      </React.Fragment>
    );
  }
}

export default App;
// export default withStyles(styles, { withTheme: true })(App);
