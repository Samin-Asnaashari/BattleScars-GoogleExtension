import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import SearchBox from "./searchBox";
import Quote from "./quote";
import Clocks from "./clocks";
import Weathers from "./weathers";
import StickyNote from "./stickyNote"; // -> TODO: possibly move this to My Profile / My Smiles

class MainContent extends Component {
  render() {
    const { currentLocation } = this.props;
    const {
      backgroundImage,
      clockTimezones,
      weatherLocations
    } = this.props.data;

    const dynamicStyles = {
      mainContent: {
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: "cover"
      },
      clockWeatherContainer: {
        top: 0,
        left: 0,
        position: "fixed",
        margin: "10px"
      }
    };

    return (
      <React.Fragment>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={dynamicStyles.mainContent}
        >
          {/* Clock / Weather Container */}
          <Grid item style={dynamicStyles.clockWeatherContainer}>
            {/* Clocks */}
            {/* TODO: loader content */}
            {clockTimezones.length > 0 ? (
              <Clocks clockTimezones={clockTimezones} />
            ) : null}
            {/* Weathers */}
            {/* TODO: loader content */}
            {weatherLocations.length > 0 ? (
              <Weathers weatherLocations={weatherLocations} />
            ) : null}
          </Grid>
          {/* Search */}
          <SearchBox />
          {/* Bookmarks */}
          {/* TODO: create container for list of Bookmarks / slider*/}
          {/* Quote of the day */}
          <Quote />
        </Grid>
        {/* FIXME: My note */}
        {/* <StickyNote /> */}
      </React.Fragment>
    );
  }
}

export default MainContent;
