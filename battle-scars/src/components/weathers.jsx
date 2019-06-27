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
    const weathers = [...this.state.weathers];
    // TODO: batch
    for (let i = 0; i < this.props.weatherLocations.length; i++) {
      let w = {};
      w._id = this.props.weatherLocations[i]._id;
      w.show = true ? i === 0 : false;

      // TODO: add to secret config file
      const Api_Key = "d17bdcf059165374cb2375a6a02bffda";
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            this.props.weatherLocations[i].lat
          }&lon=${
            this.props.weatherLocations[i].lon
          }&units=metric&appid=${Api_Key}`
        )
        .then(response => {
          console.log(response, "response form weather api in setWeathers!");
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
          console.log(error, "Error setWeathers!");
        });

      weathers.push(w);
    }
    this.setState({ weathers });
  };
  /**
   * Example of other option:
   */
  // const api_call = await fetch(``); const response = await api_call.json();

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className="weathers-container"
      >
        {this.state.weathers.length > 0 ? (
          <CustomSlider items={this.state.weathers} />
        ) : (
          <h6> No weathers information!</h6>
        )}
      </Grid>
    );
  }
}

export default Weathers;
