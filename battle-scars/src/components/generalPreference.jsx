import React, { Component } from "react";
import "./../styles/setting.scss";
import Joi from "joi-browser";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { CirclePicker } from "react-color";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import CustomDropDown from "./common/customDropDown";

class GeneralPreference extends Component {
  state = {
    color1: "#ffffba",
    color2: "#ffffba",
    gredientColorEnabled: true,
    timezones: [],
    countriesOrCities: [],
    selectedClocks: this.props.selectedClocks,
    selectedWeathers: this.props.selectedWeathers,
    bookmarksEnabled: true,
    bookmarks: [] // TODO: desgin
  };

  colors1 = [
    //Yellow
    "#ffffba",
    "#ffeead",
    //orange
    "#ffdfba",
    //green
    "#f4fee5",
    "#b0ceaf",
    "#00828f",
    //pink
    "#e5c3c6",
    "#ff9e99",
    "#db8387",
    "#f96161",
    "#fe5757",
    "#801336",
    //purple
    "#b29bca",
    "#9197ce",
    //blue
    "#8ea6b4",
    "#6ebbcf",
    "#1b7598",
    "#325d8d"
  ];
  colors2 = [
    //Yellow
    "#ffffba",
    "#ffeead",
    //orange
    "#ffdfba",
    //green
    "#f4fee5",
    "#b0ceaf",
    "#00828f",
    //pink
    "#e5c3c6",
    "#ff9e99",
    "#db8387",
    "#f96161",
    "#fe5757",
    "#801336",
    //purple
    "#b29bca",
    "#9197ce",
    //blue
    "#8ea6b4",
    "#6ebbcf",
    "#1b7598",
    "#325d8d"
  ];

  componentDidMount() {
    this.getTimezoneList();
    this.getCountriesOrCitiesList();
  }

  handleColorChangeComplete = (color, number) => {
    number === 1
      ? this.setState({ color1: color.hex })
      : this.setState({ color2: color.hex });
  };

  handleGredientColorEnabled = event => {
    this.setState({ gredientColorEnabled: event.target.checked });
  };

  handleBookmarksEnabled = event => {
    this.setState({ bookmarksEnabled: event.target.checked });
  };

  getTimezoneList = async () => {
    const timezones = [...this.state.timezones];
    return await axios
      .get("https://worldtimeapi.org/api/timezone")
      .then(response => {
        console.log(response, "timezones");
        response.data.map(item => {
          timezones.push({ value: item, label: item });
        });
        this.setState({ timezones });
      })
      .catch(error => {
        console.log(error, "Error get all timezones!");
      });
  };

  getCountriesOrCitiesList = async term => {
    const countriesOrCities = [...this.state.countriesOrCities];
    return await axios
      .get(
        "http://autocomplete.travelpayouts.com/places2?term=Test&locale=en&types[]=country,city"
      )
      .then(response => {
        console.log(response, "Country and Cities");
        response.data.map(item => {
          countriesOrCities.push({ value: item.name, label: item.name });
        });
        this.setState({ countriesOrCities });
      })
      .catch(error => {
        console.log(error, "Error get all Country / City list!");
      });
  };

  handleDropDownSelection = event => {
    console.log(event, "event");
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        {/* Reset to default */}
        <h4>Reset:</h4>
        <Grid item />
        {/* Drawer */}
        <h4>Drawer Color:</h4>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.gredientColorEnabled}
                  onChange={this.handleGredientColorEnabled}
                  value="gredient"
                  inputProps={{
                    "aria-label": "gredient color"
                  }}
                />
              }
              label="Gredient Color"
            />
          </Grid>
          <Grid item className="color-container">
            <CirclePicker
              colors={this.colors1}
              color={this.state.color1}
              onChangeComplete={color =>
                this.handleColorChangeComplete(color, 1)
              }
            />
            <Chip
              className="color-chip"
              label={
                <p>
                  Color1: <strong>{this.state.color1}</strong>
                </p>
              }
              variant="outlined"
              size="small"
              avatar={
                <Avatar>
                  <FormatColorFillIcon />
                </Avatar>
              }
            />
          </Grid>
          {this.state.gredientColorEnabled ? (
            <Grid item className="color-container">
              <CirclePicker
                colors={this.colors2}
                color={this.state.color2}
                onChangeComplete={color =>
                  this.handleColorChangeComplete(color, 2)
                }
              />
              <Chip
                className="color-chip"
                label={
                  <p>
                    Color2: <strong>{this.state.color2}</strong>
                  </p>
                }
                variant="outlined"
                size="small"
                avatar={
                  <Avatar>
                    <FormatColorFillIcon />
                  </Avatar>
                }
              />
            </Grid>
          ) : null}
        </Grid>
        {/* Clocks */}
        <h4>Clocks:</h4>
        <Grid item className="custom-dropDown-container">
          {/* TODO: CheckBox */}
          <CustomDropDown
            multiSelction={true}
            options={this.state.timezones}
            selectionChanged={this.handleDropDownSelection}
          />
        </Grid>
        {/* Weathers */}
        <h4>Weathers:</h4>
        <Grid item className="custom-dropDown-container">
          {/* TODO: CheckBox */}
          {/* TODO: term search key */}
          <CustomDropDown
            multiSelction={true}
            options={this.state.countriesOrCities}
            selectionChanged={this.handleDropDownSelection}
          />
        </Grid>
        {/* Bookmarks */}
        <h4>Bookmarks:</h4>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.bookmarksEnabled}
                onChange={this.handleBookmarksEnabled}
                value="bookmarks"
                inputProps={{
                  "aria-label": "bookmarks"
                }}
              />
            }
            label="Bookmarks"
          />
          {/* TODO: <CustomDropDown /> */}
        </Grid>
      </Grid>
    );
  }
}

export default GeneralPreference;
