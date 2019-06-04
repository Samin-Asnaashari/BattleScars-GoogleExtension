import React, { Component } from "react";
import "./../styles/mainContent.scss";
import Grid from "@material-ui/core/Grid";

import SearchBox from "./searchBox";
import Quote from "./quote";
import Clocks from "./clocks";
import Weathers from "./weathers";
import StickyNote from "./stickyNote";

class MainContent extends Component {
  render() {
    const { clockLocations, weatherLocations, currentLocation } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="main-content"
      >
        asd
      </Grid>
      // <React.Fragment>
      //   <Grid
      //     container
      //     direction="column"
      //     justify="center"
      //     alignItems="center"
      //     className={
      //       this.props.expanded
      //         ? "main-content main-content--expanded"
      //         : "main-content"
      //     }
      //   >
      //     {/* Clock / Weather Container */}
      //     <Grid
      //       item
      //       style={{ top: 0, left: 0, position: "fixed", margin: "10px" }}
      //     >
      //       {/* Clocks */}
      //       {/* TODO loader content */}
      //       {clockLocations.length > 0 && currentLocation ? (
      //         <Clocks
      //           clockLocations={clockLocations}
      //           currentLocation={currentLocation}
      //         />
      //       ) : null}
      //       {/* Weathers */}
      //       {/* TODO loader content */}
      //       {weatherLocations.length > 0 ? (
      //         <Weathers weatherLocations={weatherLocations} />
      //       ) : null}
      //     </Grid>
      //     {/* Search */}
      //     <SearchBox />
      //     {/* Quote of the day */}
      //     <Quote />
      //   </Grid>
      //   {/* My note */}
      //   {/* <StickyNote /> */}
      // </React.Fragment>
    );
  }
}

export default MainContent;
