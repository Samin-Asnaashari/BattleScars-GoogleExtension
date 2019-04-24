import React, { Component } from "react";
import "./../../styles/searchBox.scss";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import "./../../styles/customSelect.scss";

class CustomSelect extends Component {
  render() {
    return (
      <Select
        value={this.props.defaultSelection}
        onChange={this.props.selectionChanged}
        inputProps={{
          id: "id",
          name: "customSelect",
          image: "image"
        }}
      >
        {this.props.options.map(option => (
          <MenuItem value={option._id} key={option._id}>
            <img src={option.image} className="option-item__image" />
          </MenuItem>
        ))}
      </Select>
    );
  }
}

export default CustomSelect;
