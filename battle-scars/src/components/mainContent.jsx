import React, { Component } from "react";
import "./../styles/mainContent.scss";
import Grid from "@material-ui/core/Grid";

import SearchBox from "./searchBox";
import Quote from "./quote";
import Clock from "./clock";
import Weather from "./weather";
import StickyNote from "./stickyNote";

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
