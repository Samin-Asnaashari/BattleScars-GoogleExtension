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
    weathers: [
      { _id: 0, country: "The Netherland", city: "Amsterdam" },
      { _id: 1, country: "The Netherland", city: "Utrecht" },
      { _id: 2, country: "The Netherland", city: "Eindhoven" }
    ]
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
          <Weathers locations={this.state.weathers} />
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
