import React, { Component } from "react";
import "./../styles/mainContent.scss";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import SearchBox from "./searchBox";
import Quote from "./quote";
import Clocks from "./clocks";
import Weathers from "./weathers";
import StickyNote from "./stickyNote";

// const styles = theme => ({
// const useStyles = makeStyles(theme => ({

class MainContent extends Component {
  render() {
    const { classes, theme, children, ...other } = this.props;
    const {
      backgrundImage,
      clockLocations,
      weatherLocations,
      currentLocation
    } = this.props.data;

    const styles = {
      mainContent: {
        background: `${backgrundImage} no-repeat center center fixed;`,
        backgroundsize: "cover"
      },
      clockWeatherContainer: {
        top: 0,
        left: 0,
        position: "fixed",
        margin: "10px"
      }
    };
    // .main-content {
    //   background: url(../assets/background-images/anders-jilden-89745-unsplash.jpg) no-repeat center center fixed;
    //   background-size: cover;
    //   &--expanded {
    //     // filter: blur(2px);
    //   }
    // }

    return (
      <React.Fragment>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={styles.mainContent}
          // className={
          //   this.props.expanded
          //     ? "main-content main-content--expanded"
          //     : "main-content"
          // }
        >
          {/* Clock / Weather Container */}
          <Grid item style={styles.clockWeatherContainer}>
            {/* Clocks */}
            {/* TODO: loader content */}
            {clockLocations.length > 0 && currentLocation ? (
              <Clocks clockLocations={clockLocations} />
            ) : null}
            {/* Weathers */}
            {/* TODO: loader content */}
            {weatherLocations.length > 0 ? (
              <Weathers weatherLocations={weatherLocations} />
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
// export default withStyles(styles, { withTheme: true })(MainContent);
