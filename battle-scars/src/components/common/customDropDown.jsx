import React from "react";
import Select, { createFilter } from "react-select";
import AsyncSelect from "react-select/async";
import AsyncPaginate from "react-select-async-paginate";

/**
 * Multiple Select / Single Select DropDown Component
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
  const sleep = ms => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  };
  const loadOptions = async (search, prevOptions) => {
    await sleep(1000);
    let filteredOptions;
    if (!search) {
      filteredOptions = options;
    } else {
      const searchLower = search.toLowerCase();

      filteredOptions = options.filter(({ label }) =>
        label.toLowerCase().includes(searchLower)
      );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
      prevOptions.length,
      prevOptions.length + 10
    );
    return {
      options: slicedOptions,
      hasMore
    };
  };

  return (
    <AsyncPaginate
      isMulti={multiSelction}
      loadOptions={loadOptions}
      onChange={selectionChanged}
      placeholder={placeholder ? placeholder : "Select..."}
      components={{ IndicatorSeparator }}
      isDisabled={isDisabled}
      closeMenuOnSelect={false}
      value={defaultSelection}
      //   defaultValue={defaultSelection}
      //   filterOption={createFilter({
      //     ignoreAccents: false,
      //     matchFromStart: true
      //   })}
    />
  );
};

export default CustomDropDown;
