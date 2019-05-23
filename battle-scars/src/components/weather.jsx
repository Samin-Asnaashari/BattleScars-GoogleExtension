import React, { Component } from "react";
import "./../styles/weather.scss";

import Grid from "@material-ui/core/Grid";

class Weather extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  //   this.setState({
  //     temperature: response.main.temp,
  //     city: response.name,
  //     country: response.sys.country,
  //     humidity: response.main.humidity,
  //     description: response.weather[0].description,
  //     error: ""
  //   });

  render() {
    return <Grid item>{this.props.id}</Grid>;
  }
}

export default Weather;
