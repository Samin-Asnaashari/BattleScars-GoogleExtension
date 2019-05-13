import React, { Component } from "react";
import "./../../styles/searchBox.scss";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./../../styles/customSelect.scss";

class CustomSelect extends Component {
  render() {
    return (
      <Select
        value={this.props.defaultSelection._id}
        onChange={this.props.selectionChanged}
        inputProps={{
          id: this.props.defaultSelection._id,
          name: "customSelect"
        }}
      >
        {this.props.options.map(option => (
          <MenuItem value={option._id} key={option._id}>
            <img
              src={option.image}
              alt="option image"
              className="option-item__image"
            />
          </MenuItem>
        ))}
      </Select>
    );
  }
}

export default CustomSelect;
