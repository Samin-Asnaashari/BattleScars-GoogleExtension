import React, { Component } from "react";
import "./../styles/weather.scss";

import Grid from "@material-ui/core/Grid";
import CustomSlider from "./common/customSlider";

import Weather from "./weather";

class Weathers extends Component {
  state = {
    weatherLocations: this.props.locations,
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

  componentDidMount = () => {
    // this.setWeathers();
  };

  setWeathers = () => {
    const weathers = [...this.state.weathers];
    for (let i = 0; i < this.state.weatherLocations.length; i++) {
      const w = {};
      w._id = i;
      w.response = this.getWeather(
        this.state.weatherLocations[i].country,
        this.state.weatherLocations[i].city
      );
      w.content = <Weather id={i} />;
      if (i === 0) {
        w.show = true;
      } else {
        w.show = false;
      }
      weathers.push(w);
    }
    console.log(weathers, "weathers to pass to slider");
    this.state.weathers = weathers;
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
    console.log(response, "response form weather api");
    return response;
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
        <CustomSlider items={this.state.weathers} />
      </Grid>
    );
  }
}

export default Weathers;
