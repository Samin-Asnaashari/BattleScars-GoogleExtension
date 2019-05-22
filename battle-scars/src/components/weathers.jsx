import React, { Component } from "react";
import "./../styles/weather.scss";

import Grid from "@material-ui/core/Grid";
import CustomSlider from "./common/customSlider";

import Weather from "./weather";

class Weathers extends Component {
  state = {
    weathers: []
  };

  //   weathers: [
  //     { _id: 0, content: <Weather counter="1" />, show: true },
  //     { _id: 2, content: <Weather counter="2" />, show: false },
  //     { _id: 3, content: <Weather counter="3" />, show: false }
  //   ]

  constructor(props) {
    super(props);
    this.setWeathers();
  }

  setWeathers = () => {
    // var weathers = this.props.weathers;
    // for (let i = 0; i < weathers.length; i++) {
    //   var weather = this.getWeather(weathers[i].country, weathers[i].city);
    //   weather._id = 0;
    //   weather.this.state.weathers.push();
    // }
  };

  getWeather = async (country, city) => {
    const Api_Key = "d17bdcf059165374cb2375a6a02bffda";
    // const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    // const city = "Amsterdam";
    // const country = "The Netherland";
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
        <CustomSlider itmes={this.state.weathers} />
      </Grid>
    );
  }
}

export default Weathers;
