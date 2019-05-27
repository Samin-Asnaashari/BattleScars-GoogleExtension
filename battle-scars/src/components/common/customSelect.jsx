import React from "react";
import "./../../styles/customSelect.scss";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

/**
 *
 * Single Select Component
 */
const CustomSelect = ({ defaultSelection, options, selectionChanged }) => {
  return (
    <Select
      value={defaultSelection._id}
      onChange={selectionChanged}
      inputProps={{
        id: defaultSelection._id,
        name: "customSelect"
      }}
    >
      {options.map(option => (
        <MenuItem value={option._id} key={option._id}>
          <img src={option.image} alt="option" className="option-item__img" />
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
