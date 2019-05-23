import React, { Component } from "react";
import "./../styles/mainContent.scss";

import Grid from "@material-ui/core/Grid";

import SearchBox from "./searchBox";
import Quote from "./quote";
import Clock from "./clock";
import Weathers from "./weathers";
import StickyNote from "./stickyNote";

class MainContent extends Component {
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
      // http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true
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
          lat: -0.13,
          lon: 51.51
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
          <Clock />
          {/* Weathers */}
          {/* TODO loader content */}
          {this.state.weatherLocations.length > 0 ? (
            <Weathers weatherLocations={this.state.weatherLocations} />
          ) : null}

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
