import React, { Component } from "react";
import "./../styles/setting.scss";
import Joi from "joi-browser";
import Grid from "@material-ui/core/Grid";
import { CirclePicker } from "react-color";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import CustomDropDown from "./common/customDropDown";

// http://worldtimeapi.org/api/timezone

class GeneralPreference extends Component {
  state = {
    // linear-gradient(45deg, #BFE6BA 30%, #D3959B 70%)
    color1: "#ffffba",
    color2: "#ffffba",
    gredientColorEnabled: true,
    clocks: [],
    weathers: [],
    selectedClocks: [],
    selectedWeathers: [],
    bookmarksEnabled: true,
    bookmarks: []
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

  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        {/* <Grid item> */}
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
        {/* </Grid> */}
        {/* Clocks */}
        <Grid item>
          {/* TODO: CheckBox */}
          {/* <CustomDropDown  options={[]} selectionChanged={this.handle} isDisabled={!this.state.}/> */}
        </Grid>
        {/* Bookmarks */}
        <Grid item>
          {/* TODO: CheckBox */}
          {/* <CustomDropDown  options={[]} selectionChanged={} isDisabled={!this.state.}/> */}
        </Grid>
        {/* Bookmarks */}
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
          {/* <CustomDropDown  options={[]} selectionChanged={} isDisabled={!this.state.bookmarks}/> */}
        </Grid>
      </Grid>
    );
  }
}

export default GeneralPreference;
