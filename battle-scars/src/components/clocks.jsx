import React, { Component } from "react";
import "./../styles/clock.scss";
import axios from "axios";
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
    const clocks = [...this.state.clocks];
    // TODO: batch
    clocks.splice(0, 0, {
      _id: 0,
      show: true,
      content: (
        <Clock
          timeZone={this.props.clockTimezones[0].timezone}
          dateTime={this.props.clockTimezones[0].dateTime}
          isCurrent={true}
        />
      )
    });
    for (let i = 1; i < this.props.clockTimezones.length; i++) {
      let c = {};
      c._id = this.props.clockTimezones[i]._id;
      c.show = false;

      // TODO: add to secret config file
      var key = "NWGYO055DP5P";
      await axios
        .get(
          `http://api.timezonedb.com/v2.1/get-time-zone?key=${key}&format=json&by=zone&zone=${
            this.props.clockTimezones[i].timezone
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
