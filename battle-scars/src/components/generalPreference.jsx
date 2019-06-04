import React, { Component } from "react";
import "./../styles/setting.scss";
import Joi from "joi-browser";
import Grid from "@material-ui/core/Grid";
import { CirclePicker } from "react-color";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";

// http://worldtimeapi.org/api/timezone

class GeneralPreference extends Component {
  state = {
    // linear-gradient(45deg, #BFE6BA 30%, #D3959B 70%)
    color1: "#ffffba",
    color2: "#ffffba"
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

  handleChangeComplete = (color, number) => {
    number === 1
      ? this.setState({ color1: color.hex })
      : this.setState({ color2: color.hex });
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
          <Grid item className="color-container">
            <CirclePicker
              colors={this.colors1}
              color={this.state.color1}
              onChangeComplete={color => this.handleChangeComplete(color, 1)}
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
          <Grid item className="color-container">
            <CirclePicker
              colors={this.colors2}
              color={this.state.color2}
              onChangeComplete={color => this.handleChangeComplete(color, 2)}
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
        </Grid>
        {/* </Grid> */}
      </Grid>
    );
  }
}

export default GeneralPreference;
