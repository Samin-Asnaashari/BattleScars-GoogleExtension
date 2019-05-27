import React, { Component } from "react";
import "./../styles/weather.scss";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import CustomSlider from "./common/customSlider";
import Weather from "./weather";

class Weathers extends Component {
  state = {
    weathers: []
  };

  componentDidMount() {
    this.setWeathers();
  }

  setWeathers = async () => {
    // TODO batch
    const weathers = [...this.state.weathers];
    for (let i = 0; i < this.props.weatherLocations.length; i++) {
      let w = {};
      w._id = this.props.weatherLocations[i]._id;
      if (i === 0) {
        w.show = true;
      } else {
        w.show = false;
      }

      // TODO add to secret config file
      const Api_Key = "d17bdcf059165374cb2375a6a02bffda";
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${
            this.props.weatherLocations[i].lat
          }&lon=${
            this.props.weatherLocations[i].lon
          }&units=metric&appid=${Api_Key}`
        )
        .then(response => {
          console.log(response, "response form weather api");
          w.content = (
            <Weather
              weather={response.data}
              country={this.props.weatherLocations[i].country}
              city={this.props.weatherLocations[i].city}
              id={i}
            />
          );
        })
        .catch(error => {
          console.log(error);
        });

      weathers.push(w);
    }
    this.setState({ weathers });
  };

  getWeather = async (lat, lon) => {
    // TODO add to secret config file
    const Api_Key = "d17bdcf059165374cb2375a6a02bffda";
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Api_Key}`
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
