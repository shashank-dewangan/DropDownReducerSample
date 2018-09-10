import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CustomDropDown = ({ option }) => {
  return (
    <Dropdown
      options={option}
      onChange={() => {}}
      value={option[0]}
      placeholder="Select an option"
    />
  );
};

export default CustomDropDown;
