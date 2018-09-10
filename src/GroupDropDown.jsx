import React from "react";
import CustomDropdown from "./CustomDropDown";

const GroupDropDown = ({ optionGroup, optionSelected }) => {
  return optionGroup.map((option, index) => {
    return (
      <CustomDropdown
        key={index}
        option={option}
        optionSelected={optionSelected}
      />
    );
  });
};

export default GroupDropDown;
