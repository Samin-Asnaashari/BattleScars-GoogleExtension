import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import axios from "axios";
// import store from "redux/store.js";

import SideDrawer from "./components/sideDrawer";
import MainContent from "./components/mainContent";

class App extends Component {
  defaultData = {
    backgroundImage: "/static/media/anders-jilden-89745-unsplash.046a9b55.jpg", // anna-yenina-1342958-unsplash.jpg
    drawerColor1: "#ff9e99",
    drawerColor2: "#8ea6b4",
    theme: "dark", // dark | light :TODO: implement
    gradientColorEnabled: true,
    clocksEnabled: true, // TODO: do you really want it?
    weathersEnabled: true, // TODO: do you really want it?
    bookmarksEnabled: true,
    quoteEnabled: true,
    greetingsEnabled: true
  };
  state = {
    currentLocation: undefined,
    data: {
      backgroundImage: this.defaultData.backgroundImage,
      drawerColor1: this.defaultData.drawerColor1,
      drawerColor2: this.defaultData.drawerColor2,
      theme: this.defaultData.theme,
      gradientColorEnabled: this.defaultData.gradientColorEnabled,
      clocksEnabled: this.defaultData.clocksEnabled,
      clockTimezones: [],
      weathersEnabled: this.defaultData.weathersEnabled,
      weatherLocations: [],
      bookmarksEnabled: this.defaultData.bookmarksEnabled,
      bookmarks: [],
      quoteEnabled: this.defaultData.quoteEnabled,
      greetingsEnabled: this.defaultData.greetingsEnabled
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
      dateTime: new Date(),
      value: this.state.currentLocation.timezone,
      label: this.state.currentLocation.timezone
    });
    data.clockTimezones.push({
      _id: 1,
      timezone: "America/Chicago",
      value: "America/Chicago",
      label: "America/Chicago"
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
      city: this.state.currentLocation.city,
      value: `${this.state.currentLocation.city} ${
        this.state.currentLocation.country
      }`,
      label: `${this.state.currentLocation.city} ${
        this.state.currentLocation.country
      }`
    });
    data.weatherLocations.push({
      _id: 1,
      lat: -0.13,
      lon: 51.51,
      country: "Netherlands",
      city: "Utrecht",
      value: "Utrecht (Netherlands)",
      label: "Utrecht (Netherlands)"
    });
    this.setState({ data });
  };

  /**
   * Save user changes
   * Set to defaut or update data and save it to localstorage
   */
  handleSettingSave = data => {
    // TODO: check data, FIXME:
    console.log(data, "Save Setting!");
    // TODO: Save to Storage
    Object.keys(data).map(key => {
      if (this.state.data.hasOwnProperty(key)) {
        this.setState(prevState => ({
          data: {
            ...prevState.data,
            [key]: data[key]
          }
        }));
        console.log(this.state, "After change!");
      }
    });
  };

  render() {
    const { data, currentLocation } = this.state;
    return (
      <React.Fragment>
        <main>
          <MainContent data={data} currentLocation={currentLocation} />
        </main>
        <SideDrawer
          data={data}
          currentLocation={currentLocation}
          onSettingSave={this.handleSettingSave}
        />
      </React.Fragment>
    );
  }
}

export default App;
