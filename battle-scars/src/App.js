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
  state = {
    weatherLocations: []
  };

  componentDidMount() {
    this.getCurrentLocation();
  }

  // TODO set global attributes

  getCurrentLocation = () => {
    // http://ip-api.com/docs/api:json
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position, "current location");
        const weatherLocations = [...this.state.weatherLocations];
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // weatherLocations.splice(0, 0, { _id: 0, lat: lat, lon: lon });
        weatherLocations.push({ _id: 0, lat: lat, lon: lon });
        // TODO get other weather locations from storage
        weatherLocations.push({
          _id: 1,
          lat: 52.066869700000005,
          lon: 5.0845505
        });
        weatherLocations.push({
          _id: 2,
          lat: 52.066869700000005,
          lon: 5.0845505
        });
        this.setState({ weatherLocations });
      });
    } else {
      console.error("Geolocation is not supported by this browser!");
      return false;
    }
  };

  render() {
    return (
      <React.Fragment>
        <main>
          {this.state.weatherLocations.length > 0 ? (
            <MainContent weatherLocations={this.state.weatherLocations} />
          ) : null}
          {/* Search */}
        </main>
        <SideDrawer />
      </React.Fragment>
    );
  }
}

export default App;
// export default withStyles(styles, { withTheme: true })(App);
