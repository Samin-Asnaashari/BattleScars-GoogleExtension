import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./../styles/mainContent.scss";

import SearchBox from "./searchBox";
import Quote from "./quote";
import StickyNote from "./stickyNote";
import Clock from "./clock";
import Weather from "./weather";

class MainContent extends Component {
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
          <Weather />
          <SearchBox />
          <Quote />
        </Grid>
        {/* <StickyNote /> */}
      </React.Fragment>
    );
  }
}

export default MainContent;
