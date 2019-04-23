import React, { Component } from "react";
import "./../styles/searchBox.scss";
import CustomSelect from "./common/customSelect";

class SearchBox extends Component {
  render() {
    const style = {
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      minHeight: "100vh"
    };

    const searchEngineOptions = [
      {
        _id: "1",
        name: "Google",
        image: require("./../assets/search-engines/google.png")
      },
      {
        _id: "2",
        name: "Google",
        image: require("./../assets/search-engines/bing.png")
      },
      {
        _id: "3",
        name: "Google",
        image: require("./../assets/search-engines/wikipedia.png")
      },
      {
        _id: "4",
        name: "Google",
        image: require("./../assets/search-engines/yahoo.png")
      }
    ];

    return (
      <div className="input-group mb-3" style={style}>
        {/* choose engine  */}
        <CustomSelect options={searchEngineOptions} />
        {/* search  */}
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
        />
        {/* search btn  */}
        <button className="btn btn-outline-secondary" type="button">
          <i className="fa fa-search" />
        </button>
      </div>
    );
  }
}

export default SearchBox;
