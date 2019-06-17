import React from "react";
import Select from "react-select";

/**
 * TODO: Multi/Single Select Drop Down
 * Multiple Select DropDown Component
 */
const indicatorSeparatorStyle = {
  alignSelf: "stretch",
  backgroundColor: "red",
  marginBottom: 8,
  marginTop: 8,
  width: 1
};
const IndicatorSeparator = ({ innerProps }) => {
  return <span style={indicatorSeparatorStyle} {...innerProps} />;
};

const CustomDropDown = ({
  defaultSelection,
  options,
  selectionChanged,
  isDisabled,
  placeholder,
  multiSelction
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
