import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./../styles/mainContent.scss";

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

    return (
      <React.Fragment>
        <img className="main-content__bg" src={backgroundImage} />
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
          <Grid item className="clock-weather-container">
            {/* Clocks */}
            {clockTimezones.length > 0 ? (
              <Clocks clockTimezones={clockTimezones} />
            ) : null}
            {/* Weathers */}
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
