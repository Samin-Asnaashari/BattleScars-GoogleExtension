import React, { Component } from "react";
import "./../styles/mainContent.scss";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import SearchBox from "./searchBox";
import Quote from "./quote";
import Clock from "./clock";
import Weathers from "./weathers";
import StickyNote from "./stickyNote";

class MainContent extends Component {
  state = {
    weatherLocations: [],
    clockLocations: []
  };

  componentDidMount() {
    this.getCurrentLocation();
  }

  // TODO set global attributes

  getCurrentLocation = () => {
    // http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true
    // navigator.geolocation.getCurrentPosition(position => {
    //   console.log(position, "current location");
    //   const weatherLocations = [...this.state.weatherLocations];
    //   const lat = position.coords.latitude;
    //   const lon = position.coords.longitude;
    //   // weatherLocations.splice(0, 0, { _id: 0, lat: lat, lon: lon });
    //   weatherLocations.push({ _id: 0, lat: lat, lon: lon });
    //   // TODO get other weather locations from storage
    //   this.setState({ weatherLocations });
    // });
    axios
      .get(`http://ip-api.com/json`)
      .then(response => {
        console.log(response, "current location");
        const weatherLocations = [...this.state.weatherLocations];
        weatherLocations.push({
          _id: 0,
          lat: response.data.lat,
          lon: response.data.lon,
          country: response.data.country,
          city: response.data.city
        });
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
