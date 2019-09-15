import React, { Component } from "react";
import "./../styles/imageGridList.scss";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Avatar from "@material-ui/core/Avatar";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";

import CustomPopover from "./common/customPopover";

class ImageGridList extends Component {
  state = {
    backgroundImage: this.props.backgroundImage,
    images: []
  };

  // TODO: or constructor???
  componentDidMount() {
    this.importImages(
      require.context(
        "./../assets/background-images/",
        true,
        /\.(png|jpe?g|svg)$/
      )
    );
  }

  importImages = r => {
    const images = [...this.state.images];
    r.keys().forEach(key => {
      const img = {
        name: r(key),
        title: "Title", // TODO:
        popoverIsOpen: false,
        color1: "#f3e367", // TODO:
        color2: "#f3e367", // TODO:
        theme: "Light",
        popoverContent: function() {
          return (
            <span className="color-suggestion">
              <p className="color-suggestion__title">Color Suggestion:</p>
              <span>
                <FormatColorFillIcon
                  className="color-suggestion__icon"
                  style={{ color: this.color1 }}
                />
                <strong className="color-suggestion__code">
                  {this.color1}
                </strong>
              </span>
              {this.color2 ? (
                <span>
                  <FormatColorFillIcon
                    className="color-suggestion__icon"
                    style={{ color: this.color2 }}
                  />
                  <strong className="color-suggestion__code">
                    {this.color2}
                  </strong>
                </span>
              ) : null}
              <p className="color-suggestion__theme">
                Theme: <strong>{this.theme}</strong>
              </p>
            </span>
          );
        },
        anchorEl: null,
        popOver: function() {
          return (
            <CustomPopover
              open={this.popoverIsOpen}
              content={this.popoverContent()}
              anchorEl={this.anchorEl}
            />
          );
        }
      };
      images.push(img);
    });
    this.setState({ images });
  };

  handleImageSelected = img => {
    // FIXME: only update when they changed
    this.setState({ backgroundImage: img });
    this.props.handleChanges("backgroundImage", img);
  };

  handlePopover = (event, img, popoverIsOpen) => {
    const images = [...this.state.images];
    const index = images.indexOf(img);
    images[index].popoverIsOpen = popoverIsOpen;
    images[index].anchorEl = popoverIsOpen ? event.currentTarget : null;
    this.setState({ images });
  };

  render() {
    const defaultImage = require("./../assets/placeholder/default.png");
    return (
      <div className="image-grid-container">
        <GridList cols={3}>
          {/* TODO: add loader */}
          {this.state.images.map((img, i) => (
            <GridListTile
              key={i}
              cols={1}
              rows={1}
              className={
                this.state.backgroundImage === img.name
                  ? "image-selected"
                  : "image-box"
              }
              onClick={() => this.handleImageSelected(img.name)}
            >
              <img
                className="image"
                src={`${window.location.href}${img.name}`}
                alt={img.name}
              />
              <GridListTileBar
                title={img.title}
                actionIcon={
                  <div>
                    <IconButton className="image-action__icon">
                      <InfoIcon
                        onMouseEnter={event =>
                          this.handlePopover(event, img, true)
                        }
                        onMouseLeave={event =>
                          this.handlePopover(event, img, false)
                        }
                      />
                    </IconButton>
                    {img.popOver()}
                  </div>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

// export default trackWindowScroll(ImageGridList);
export default ImageGridList;
