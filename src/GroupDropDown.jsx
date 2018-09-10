import React from "react";
import CustomDropdown from "./CustomDropDown";

const GroupDropDown = ({ optionGroup = [] }) => {
  console.log("optionGroup", optionGroup[0]);
  return optionGroup.map((option, index) => (
    <CustomDropdown
      key={index}
      options={option.options}
      defaultOption={option.defaultOption}
    />
  ));
};

export default GroupDropDown;
