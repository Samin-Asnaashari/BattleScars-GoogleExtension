import React, { Component } from "react";
import "react-custom-flag-select/lib/react-custom-flag-select.min.css";
import "./../../styles/searchBox.scss";

class CustomSelect extends Component {
  state = {
    selectedOption: this.props.options[0]
  };

  handleSelectionChange = option => {
    this.setState({ selectedOption: option });
  };

  render() {
    return (
      <div className="col-md-2 col-lg-2 top-bar-margin-top">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            type="button"
          >
            <img
              src={this.state.selectedOption.image}
              style={{
                width: "30%",
                height: "30%"
              }}
            />
          </button>
          <ul className="dropdown-menu" aria-labelledby="label">
            {this.props.options.map(option => (
              <li
                key={option._id}
                onClick={() => this.handleSelectionChange(option)}
              >
                <img
                  src={option.image}
                  style={{
                    width: "20%",
                    height: "20%"
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CustomSelect;
