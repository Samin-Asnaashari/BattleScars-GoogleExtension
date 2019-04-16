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
