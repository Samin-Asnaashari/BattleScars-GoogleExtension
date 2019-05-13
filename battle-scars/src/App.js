import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.scss";
import logo from "./logo.svg";
import SideDrawer from "./components/sideDrawer";
import MainContent from "./components/mainContent";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <MainContent />
        </main>
        <SideDrawer />
      </React.Fragment>
    );
  }
}

export default App;
// export default withStyles(styles, { withTheme: true })(App);
