import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import axios from "axios";

import SideDrawer from "./components/sideDrawer";
import MainContent from "./components/mainContent";

class App extends Component {
  defaultData = {
    backgroundImage: "/static/media/anders-jilden-89745-unsplash.046a9b55.jpg",
    drawerColor1: "#ff9e99",
    drawerColor2: "#8ea6b4",
    theme: "dark", // TODO: add me
    gredientColorEnabled: true,
    clocksEnabled: true, // TODO: do you really want it?
    weathersEnabled: true, // TODO: do you really want it?
    bookmarksEnabled: true
  };
  state = {
    currentLocation: undefined,
    data: {
      backgroundImage: this.defaultData.backgroundImage,
      drawerColor1: this.defaultData.drawerColor1,
      drawerColor2: this.defaultData.drawerColor2,
      theme: this.defaultData.theme,
      gredientColorEnabled: this.defaultData.gredientColorEnabled,
      clocksEnabled: this.defaultData.clocksEnabled,
      clockTimezones: [],
      weathersEnabled: this.defaultData.weathersEnabled,
      weatherLocations: [],
      bookmarksEnabled: this.defaultData.bookmarksEnabled,
      bookmarks: []
      // TODO: Style refactor
      // quoteCategory: "",
      // My Sticky Notes
      // My Smiles / Happiness
      // TODO: My TODOS, My Profile (My Details, Musics - Movies - Travels - Books)
      // TODO: How is your day? Happy Level, Sad Level, Medium. Overal my week, month, year smiles, family/friend/work people and life goals.
    }
  };

  componentDidMount() {
    // this.getStorageData(); TODO: implement
    this.getCurrentLocation();
  }

  getCurrentLocation = () => {
    // TODO: async await? Permission?
    axios
      // http://maps.googleapis.com: navigator.geolocation.getCurrentPosition(position => { position.coords.latitude/longitude } )
      .get(`http://ip-api.com/json`)
      .then(response => {
        console.log(response, "response from current location!");
        this.setState({ currentLocation: response.data });
        if (this.state.data.clocksEnabled) this.setClockLocations();
        if (this.state.data.weathersEnabled) this.setWeatherLocations();
      })
      .catch(error => {
        console.log(error, "Error getCurrentLocation!");
      });
  };

  setClockLocations = () => {
    // TODO: get from storage
    const data = { ...this.state.data };
    data.clockTimezones.push({
      _id: 0,
      timezone: this.state.currentLocation.timezone,
      dateTime: new Date()
    });
    data.clockTimezones.push({
      _id: 1,
      timezone: "America/Chicago"
    });
    this.setState({ data });
  };

  setWeatherLocations = () => {
    // TODO: get from storage
    const data = { ...this.state.data };
    data.weatherLocations.push({
      _id: 0,
      lat: this.state.currentLocation.lat,
      lon: this.state.currentLocation.lon,
      country: this.state.currentLocation.country,
      city: this.state.currentLocation.city
    });
    data.weatherLocations.push({
      _id: 1,
      lat: -0.13,
      lon: 51.51,
      country: "Netherlands",
      city: "Utrecht"
    });
    this.setState({ data });
  };

  /**
   * Save user changes
   * Set to defaut or update data and save it to localstorage
   */
  handleSettingSave = data => {
    console.log("Save Setting!");
  };

  render() {
    const { data, currentLocation } = this.state;
    return (
      <React.Fragment>
        <main>
          {/* TODO: just pass all json data */}
          <MainContent data={data} currentLocation={currentLocation} />
          {/* Search */}
        </main>
        <SideDrawer data={data} currentLocation={currentLocation} />
      </React.Fragment>
    );
  }
}

export default App;
