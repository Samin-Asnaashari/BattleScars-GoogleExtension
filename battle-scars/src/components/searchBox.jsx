import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    const style = {
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      minHeight: "100vh"
    };

    return (
      <div className="input-group mb-3" style={style}>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-google" />
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Action
            </a>
          </div>
        </div>

        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          <i className="fa fa-search" />
        </button>
      </div>
    );
  }
}

export default SearchBox;
