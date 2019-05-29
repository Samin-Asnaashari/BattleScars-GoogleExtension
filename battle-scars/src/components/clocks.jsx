import React, { Component } from "react";
import "./../styles/clock.scss";
import axios from "axios";
import moment from "moment/moment.js";
import Grid from "@material-ui/core/Grid";

import CustomSlider from "./common/customSlider";
import Clock from "./clock";

class Clocks extends Component {
  state = {
    clocks: []
  };

  componentDidMount() {
    this.setClocks();
  }

  setClocks = async () => {
    // TODO batch
    const clocks = [...this.state.clocks];
    clocks.splice(0, 0, {
      _id: 0,
      show: true,
      content: (
        <Clock
          timeZone={this.props.currentLocation.timezone}
          dateTime={new Date()}
          isCurrent={true}
        />
      )
    });
    for (let i = 0; i < this.props.clockLocations.length; i++) {
      let c = {};
      c._id = this.props.clockLocations[i]._id;
      c.show = false;

      var key = "NWGYO055DP5P";
      await axios
        // https://worldtimeapi.org/api/timezone/
        .get(
          `http://api.timezonedb.com/v2.1/get-time-zone?key=${key}&format=json&by=zone&zone=${
            this.props.clockLocations[i].timezone
          }`
        )
        .then(response => {
          console.log(response, "response form clock api in setClocks!");
          c.content = (
            <Clock
              timeZone={response.data.zoneName}
              dateTime={response.data.formatted}
              isCurrent={false}
            />
          );
        })
        .catch(error => {
          console.log(error, "Error setClocks!");
        });

      clocks.push(c);
    }
    this.setState({ clocks });
  };

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className="clocks-container"
      >
        {this.state.clocks.length > 0 ? (
          <CustomSlider items={this.state.clocks} />
        ) : (
          <h6> No clocks information!</h6>
        )}
      </Grid>
    );
  }
}

export default Clocks;
