import React, { Component } from "react";
import "./../styles/clock.scss";
import moment from "moment/moment.js";
import Grid from "@material-ui/core/Grid";
import ScheduleIcon from "@material-ui/icons/Schedule";

/**
 * Clock component
 */
class Clock extends Component {
  state = {
    // TODO: update all clocks instead of just isCurrent
    isCurrent: this.props.isCurrent,
    dateTime: this.props.dateTime,
    timeZone: this.props.timeZone
  };

  componentDidMount() {
    if (this.state.isCurrent) {
      this.myInterval = setInterval(this.update, 1000);
    }
  }

  componentWillUnmount() {
    if (this.state.isCurrent) {
      clearInterval(this.myInterval);
    }
  }

  update = () => {
    this.setState({
      dateTime: new Date()
    });
  };

  render() {
    return (
      <Grid item>
        <h5 className="timeZone">{this.state.timeZone}</h5>
        <span className="dateTime-container">
          <ScheduleIcon className="dateTime-icon" />:
          <h4 className="dateTime">
            {moment(this.state.dateTime).format("MMMM D, YYYY - h:mm:ss a")}
          </h4>
        </span>
      </Grid>
    );
  }
}

export default Clock;
