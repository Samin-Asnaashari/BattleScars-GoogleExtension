import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import logo from "./logo.svg";
import axios from "axios";
import SideDrawer from "./components/sideDrawer";
import MainContent from "./components/mainContent";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import classNames from "classnames";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

class App extends Component {
  // TODO set global attributes
  iconClass = "menu__icon fa fa-2x fa";
  state = {
    defaultBackgroundImage:
      "/static/media/anders-jilden-89745-unsplash.046a9b55.jpg",
    drawerColor: "",
    bookmarkEnabled: true,
    bookmarks: [],
    currentLocation: undefined,
    weatherLocations: [],
    clockLocations: [{ _id: 1, timezone: "America/Chicago" }]
    // quoteCategory: "",
    // My Profile (My Details, Musics - Movies - Travels - Books - Bookmarks)
  };

  componentDidMount() {
    this.getCurrentLocation();
    // this.setClockLocations();
    // this.setWeatherLocations();
  }

  getCurrentLocation = () => {
    // http://maps.googleapis.com
    // navigator.geolocation.getCurrentPosition(position => {
    //   const weatherLocations = [...this.state.weatherLocations];
    //   const lat = position.coords.latitude;
    //   const lon = position.coords.longitude;
    //   // weatherLocations.splice(0, 0, { _id: 0, lat: lat, lon: lon });
    //   weatherLocations.push({ _id: 0, lat: lat, lon: lon });
    //   this.setState({ weatherLocations });
    // });
    axios
      .get(`http://ip-api.com/json`)
      .then(response => {
        console.log(response, "response from current location!");
        this.setState({ currentLocation: response.data });
        const weatherLocations = [...this.state.weatherLocations];
        weatherLocations.push({
          _id: 0,
          lat: response.data.lat,
          lon: response.data.lon,
          country: response.data.country,
          city: response.data.city
        });
        // TODO get other weather locations from storage
        weatherLocations.push({
          _id: 1,
          lat: -0.13,
          lon: 51.51,
          country: "Netherlands",
          city: "Utrecht"
        });
        this.setState({ weatherLocations });
      })
      .catch(error => {
        console.log(error, "Error getCurrentLocation!");
      });
  };

  setWeatherLocations = () => {};

  setClockLocations = () => {};

  /**
   * Save user changes
   * data are: Drawer color gradient picker, background image, enable/disable bookmark, manage bookmark, quote category, add more weather, add more time
   */
  handleSettingSave = data => {
    console.log("Save Setting!");
  };

  render() {
    return (
      <React.Fragment>
        <main>
          <MainContent
            currentLocation={this.state.currentLocation}
            clockLocations={this.state.clockLocations}
            weatherLocations={this.state.weatherLocations}
          />
          {/* Search */}
        </main>
        <SideDrawer
          menuItems={this.menuItems}
          handleSettingSave={this.handleSettingSave}
        />
      </React.Fragment>
    );
  }
}

export default App;
