import React, { Component } from "react";
import "./../../styles/customSlider.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

class CustomSlider extends Component {
  state = {
    currentIndex: 0,
    items: this.props.items
  };

  handleChange = goNext => {
    // endless loop navigation
    const items = [...this.state.items];
    // hide current item
    items[this.state.currentIndex].show = false;
    // Go Next, show next item
    if (goNext) {
      if (items[this.state.currentIndex + 1]) {
        items[this.state.currentIndex + 1].show = true;
        this.state.currentIndex++;
      } else {
        items[0].show = true;
        this.state.currentIndex = 0;
      }
    }
    // Go Prev, show prev item
    if (!goNext) {
      if (items[this.state.currentIndex - 1]) {
        items[this.state.currentIndex - 1].show = true;
        this.state.currentIndex--;
      } else {
        items[items.length - 1].show = true;
        this.state.currentIndex = items.length - 1;
      }
    }
    this.setState({ items });
  };

  render() {
    return (
      <Paper elevation={1} className="slide-container ">
        <Grid container direction="row" justify="center" alignItems="center">
          {this.state.items.length > 1 ? (
            <IconButton
              onClick={() => this.handleChange(false)}
              className="arrow"
            >
              <ChevronLeftIcon />
            </IconButton>
          ) : null}

          {/* TODO loader content */}
          {/* Content */}
          {this.state.items.map(item => (
            <Fade
              in={item.show}
              className={item.show ? "slide-item--show" : "slide-item--hide"}
              key={item._id}
            >
              {item.show ? item.content : <h6>No content!</h6>}
            </Fade>
            // Dots
          ))}

          {this.state.items.length > 1 ? (
            <IconButton
              onClick={() => this.handleChange(true)}
              className="arrow"
            >
              <ChevronRightIcon />
            </IconButton>
          ) : null}
        </Grid>
      </Paper>
    );
  }
}

export default CustomSlider;
