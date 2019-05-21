import React, { Component } from "react";
import "./../styles/clock.scss";

import Grid from "@material-ui/core/Grid";
import moment from "moment/moment.js";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    setInterval(this.update, 1000);
  }

  update = () => {
    this.setState({
      time: new Date()
    });
  };

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className="clock-container"
      >
        {moment(this.state.time).format("MMMM Do YYYY, h:mm:ss a")}
      </Grid>
    );
  }
}

export default Clock;
