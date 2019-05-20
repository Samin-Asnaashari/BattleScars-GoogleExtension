import React, { Component } from "react";
import "./../styles/weather.scss";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";
import AutorenewIcon from "@material-ui/icons/Autorenew";

class Weather extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    const Api_Key = "d17bdcf059165374cb2375a6a02bffda";
    // const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    const city = "Amsterdam";
    const country = "The Netherland";
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
    );
    const response = await api_call.json();
    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    });
    console.log(response);
  };

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className="weather-container"
      >
        <IconButton
          aria-label="Refresh Weather"
          onClick={() => this.getWeather()}
        >
          <AutorenewIcon />
          Weather
        </IconButton>
      </Grid>
    );
  }
}

export default Weather;
