import React from "react";
import CustomDropdown from "./CustomDropDown";

const GroupDropDown = ({ optionGroup }) => {
  return optionGroup.map((option, index) => {
    return <CustomDropdown key={index} option={option} />;
  });
};

export default GroupDropDown;
