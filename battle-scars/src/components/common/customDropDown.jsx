import React from "react";
import Select from "react-select";

/**
 * Multiple Select DropDown Component
 */
const IndicatorSeparator = ({ innerProps }) => {
  return <span {...innerProps} />;
};

const CustomDropDown = ({
  defaultSelection,
  options,
  selectionChanged,
  isDisabled,
  placeholder
}) => {
  return (
    <Select
      isMulti
      closeMenuOnSelect={false}
      components={{ IndicatorSeparator }}
      isDisabled={isDisabled}
      defaultValue={defaultSelection}
      options={options}
      onChange={selectionChanged}
      placeholder={placeholder ? placeholder : "Select..."}
      isSearchable
    />
  );
};

export default CustomDropDown;
