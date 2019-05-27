import React, { Component } from "react";
import "./../styles/weather.scss";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import CustomSlider from "./common/customSlider";

import Weather from "./weather";

class Weathers extends Component {
  state = {
    weatherLocations: this.props.weatherLocations,
    weathers: []
  };

  componentDidMount() {
    this.setWeathers();
  }

  setWeathers = async () => {
    // TODO batch
    const weathers = [...this.state.weathers];
    for (let i = 0; i < this.state.weatherLocations.length; i++) {
      let w = {};
      w._id = this.state.weatherLocations[i]._id;
      if (i === 0) {
        w.show = true;
      } else {
        w.show = false;
      }

      const Api_Key = "d17bdcf059165374cb2375a6a02bffda";
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${
            this.state.weatherLocations[i].lat
          }&lon=${
            this.state.weatherLocations[i].lon
          }&units=metric&appid=${Api_Key}`
        )
        .then(response => {
          console.log(response, "response form weather api");
          w.content = <Weather weather={response.data} id={i} />;
        })
        .catch(error => {
          console.log(error);
        });

      weathers.push(w);
    }
    this.setState({ weathers });
  };

  getWeather = async (lat, lon) => {
    // TODO add to config
    const Api_Key = "d17bdcf059165374cb2375a6a02bffda";
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Api_Key}`
      //   `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
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
        {this.state.weathers.length > 0 ? (
          <CustomSlider items={this.state.weathers} />
        ) : (
          <h6> No weather information!</h6>
        )}
      </Grid>
    );
  }
}

export default Weathers;
