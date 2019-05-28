import React, { Component } from "react";
import "./../styles/clock.scss";
import axios from "axios";
import moment from "moment/moment.js";
import Grid from "@material-ui/core/Grid";

import CustomSlider from "./common/customSlider";

class Clocks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
      clocks: []
    };
  }

  componentDidMount() {
    this.setClocks();
    setInterval(this.update, 1000);
  }

  update = () => {
    this.setState({
      time: new Date()
    });
  };

  setClocks = async () => {
    // TODO batch
    const clocks = [...this.state.clocks];
    clocks.splice(0, 0, {
      _id: 0,
      show: true,
      content: (
        <h4>
          {this.props.currentLocation.timezone} -{" "}
          {moment(this.state.time).format("MMMM Do YYYY, h:mm:ss a")}
        </h4>
      )
    });
    for (let i = 0; i < this.props.clockLocations.length; i++) {
      let c = {};
      c._id = this.props.clockLocations[i]._id;
      c.show = false;

      await axios
        .get(
          `http://worldtimeapi.org/api/timezone/${
            this.props.clockLocations[i].timezone
          }`
        )
        .then(response => {
          console.log(response, "response form clock api");
          console.log(this.state.time, "responsdfsdfsdfapi ");
          c.content = (
            <h4>
              {response.data.timezone} -{" "}
              {moment(response.data.datetime).format("MMMM Do YYYY, h:mm:ss a")}
            </h4>
          );
        })
        .catch(error => {
          console.log(error);
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
        className="clock-container"
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
