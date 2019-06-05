import React, { Component } from "react";
import "./../styles/clock.scss";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import CustomSlider from "./common/customSlider";
import Clock from "./clock";

class Clocks extends Component {
  clocks = [];

  componentDidMount() {
    this.setClocks();
  }

  setClocks = async () => {
    // TODO: batch
    this.clocks.splice(0, 0, {
      _id: 0,
      show: true,
      content: (
        <Clock
          timeZone={this.props.clockLocations[0].timezone}
          dateTime={this.props.clockLocations[0].time}
          isCurrent={true}
        />
      )
    });
    for (let i = 1; i < this.props.clockLocations.length; i++) {
      let c = {};
      c._id = this.props.clockLocations[i]._id;
      c.show = false;

      // TODO: add to secret config file
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

      this.clocks.push(c);
    }
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
        {this.clocks.length > 0 ? (
          <CustomSlider items={this.clocks} />
        ) : (
          // TODO: default no data component
          <h6> No clocks information!</h6>
        )}
      </Grid>
    );
  }
}

export default Clocks;
