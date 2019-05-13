import React, { Component } from "react";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./../styles/mainContent.scss";
import SearchBox from "./searchBox";
import Quote from "./quote";

class MainContent extends Component {
  render() {
    return (
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
        <SearchBox />
        <Quote />
      </Grid>
    );
  }
}

export default MainContent;
