import React, { Component } from "react";
import "./../styles/mainContent.scss";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import SearchBox from "./searchBox";
import Quote from "./quote";
import Clocks from "./clocks";
import Weathers from "./weathers";
import StickyNote from "./stickyNote";

class MainContent extends Component {
  // TODO set global attributes
  state = {
    currentLocation: undefined,
    weatherLocations: [],
    clockLocations: [
      // http://worldtimeapi.org/api/timezone
      { _id: 1, timezone: "America/Chicago" }
    ]
  };

  componentDidMount() {
    this.getCurrentLocation();
    // this.setClockLocations();
    // this.setWeatherLocations();
  }

  getCurrentLocation = () => {
    // http://maps.googleapis.com
    // navigator.geolocation.getCurrentPosition(position => {
    //   console.log(position, "current location");
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
        console.log(response, "current location");
        this.setState({ currentLocation: response.data });
        console.log(this.state, "dfsdf");
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
        console.log(error);
      });
  };

  setWeatherLocations = () => {};

  setClockLocations = () => {};

  render() {
    return (
      <React.Fragment>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={
            this.props.expanded
              ? "main-content main-content--expanded"
              : "main-content"
          }
        >
          {/* Clock / Weather Container */}
          <Grid
            item
            style={{ top: 0, left: 0, position: "fixed", margin: "10px" }}
          >
            {/* Clocks */}
            {/* TODO loader content */}
            {this.state.clockLocations.length > 0 &&
            this.state.currentLocation ? (
              <Clocks
                clockLocations={this.state.clockLocations}
                currentLocation={this.state.currentLocation}
              />
            ) : null}
            {/* Weathers */}
            {/* TODO loader content */}
            {this.state.weatherLocations.length > 0 ? (
              <Weathers weatherLocations={this.state.weatherLocations} />
            ) : null}
          </Grid>
          {/* Search */}
          <SearchBox />
          {/* Quote of the day */}
          <Quote />
        </Grid>
        {/* My note */}
        {/* <StickyNote /> */}
      </React.Fragment>
    );
  }
}

export default MainContent;
