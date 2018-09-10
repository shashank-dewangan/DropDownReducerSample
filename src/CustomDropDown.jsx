import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import isEmpty from "lodash";
//({ option, optionSelected })
class CustomDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: isEmpty(this.props.option.selected)
        ? this.props.option.values[0]
        : this.props.option.selected
    };
  }
  render() {
    const { option, optionSelected } = this.props;
    console.log("option", option);
    console.log("option.selected", option.selected);
    return (
      <Dropdown
        options={option.values}
        onChange={e => {
          this.setState({ selected: e });
          optionSelected(e);
        }}
        value={this.state.selected}
        placeholder="Select an option"
      />
    );
  }
}

export default CustomDropDown;
