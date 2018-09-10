import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CustomDropDown = props => (
  <Dropdown
    options={props.options}
    onChange={() => {}}
    value={props.defaultOption}
    placeholder="Select an option"
  />
);

export default CustomDropDown;
