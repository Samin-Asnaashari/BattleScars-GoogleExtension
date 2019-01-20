import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    const style = {
      "justify-content": "center",
      "align-items": "center",
      "text-align": "center",
      "min-height": "100vh"
    };

    return (
      <div className="input-group mb-3" style={style}>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
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
