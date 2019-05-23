import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import logo from "./logo.svg";
import SideDrawer from "./components/sideDrawer";
import MainContent from "./components/mainContent";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import classNames from "classnames";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <MainContent />
          {/* Search */}
        </main>
        <SideDrawer />
      </React.Fragment>
    );
  }
}

export default App;
// export default withStyles(styles, { withTheme: true })(App);
