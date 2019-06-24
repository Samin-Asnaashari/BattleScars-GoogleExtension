import React, { Component } from "react";
import "./../styles/setting.scss";
import Joi from "joi-browser";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { CirclePicker } from "react-color";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import CustomDropDown from "./common/customDropDown";
import * as countriesCitiesApi from "../services/countriesCitiesService";

class GeneralPreference extends Component {
  timezones = [];
  countriesOrCities = [];
  bookmarks = [];
  state = {
    drawerColor1: this.props.data.drawerColor1,
    drawerColor2: this.props.data.drawerColor2,
    gredientColorEnabled: this.props.data.gredientColorEnabled,
    bookmarksEnabled: this.props.data.bookmarksEnabled,
    selectedClocks: this.props.data.clockTimezones,
    selectedWeathers: this.props.data.weatherLocations,
    selectedBookmarks: this.props.data.bookmarks,
    theme: this.props.data.theme,
    clocksEnabled: this.props.data.clocksEnabled,
    weathersEnabled: this.props.data.weathersEnabled
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
    this.getCountriesCitiesList();
  }

  handleColorChangeComplete = (color, number) => {
    number === 1
      ? this.setState({ drawerColor1: color.hex })
      : this.setState({ drawerColor2: color.hex });
    this.props.handleChange(
      number === 1 ? "drawerColor1" : "drawerColor2",
      color.hex
    );
  };

  handleCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
    this.props.handleChange(`${event.target.name}`, event.target.checked);
  };

  getTimezoneList = async () => {
    // TODO: move to json file
    return await axios
      .get("https://worldtimeapi.org/api/timezone")
      .then(response => {
        console.log(response, "timezones");
        response.data.map(item => {
          this.timezones.push({ value: item, label: item });
        });
      })
      .catch(error => {
        console.log(error, "Error get all timezones!");
      });
  };

  getCountriesCitiesList = async () => {
    this.countriesOrCities = countriesCitiesApi.getAllCountriesCitiesDB(); // 12959 items
  };

  handleDropDownSelection = (event, name) => {
    console.log(event, "event");
    this.props.handleChange(name, event);
  };

  render() {
    const { currentLocation } = this.props;

    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
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
                  onChange={this.handleCheckbox}
                  name="gredientColorEnabled"
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
              color={this.state.drawerColor1}
              onChangeComplete={color =>
                this.handleColorChangeComplete(color, 1)
              }
            />
            <Chip
              className="color-chip"
              label={
                <p>
                  Color1: <strong>{this.state.drawerColor1}</strong>
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
                color={this.state.drawerColor2}
                onChangeComplete={color =>
                  this.handleColorChangeComplete(color, 2)
                }
              />
              <Chip
                className="color-chip"
                label={
                  <p>
                    Color2: <strong>{this.state.drawerColor2}</strong>
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
            options={this.timezones}
            selectionChanged={this.handleDropDownSelection}
            selectionChanged={event =>
              this.handleDropDownSelection(event, "timezones")
            }
            defaultValue={[]}
            isDisabled={false}
            // placeholder
          />
        </Grid>
        {/* Weathers */}
        <h4>Weathers:</h4>
        <Grid item className="custom-dropDown-container">
          {/* TODO: CheckBox */}
          {/* TODO: term search key */}
          <CustomDropDown
            multiSelction={true}
            options={this.countriesOrCities}
            selectionChanged={event =>
              this.handleDropDownSelection(event, "countriesOrCities")
            }
            defaultValue={[]}
            isDisabled={false}
            // placeholder
          />
        </Grid>
        {/* Bookmarks */}
        <h4>Bookmarks:</h4>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.bookmarksEnabled}
                onChange={this.handleCheckbox}
                name="bookmarksEnabled"
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
        {/* Reset to default*/}
        {/* <Grid item>
          <Button onClick={this.onReset} variant="outlined">
            Reset to default
          </Button>
        </Grid> */}
      </Grid>
    );
  }
}

export default GeneralPreference;
