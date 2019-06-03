import React, { Component } from "react";
import "./../styles/imageGridList.scss";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper
//   },
//   gridList: {
//     width: 500,
//     height: 450
//   }
// }));
//   const classes = useStyles();

// const ImageGridList = props => {
// function ImageGridList() {
class ImageGridList extends Component {
  state = {
    images: []
  };

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
        raised: "true"
      };
      images.push(img);
    });
    this.setState({ images });
  };

  render() {
    return (
      <div className="image-grid-container">
        <GridList cols={3}>
          {this.state.images.map((img, i) => (
            <GridListTile key={i} cols={1} rows={1} className="image-box">
              <img
                className="image"
                src={`${window.location.href}${img.name}`}
                alt={img.name}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
              />
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default ImageGridList;
