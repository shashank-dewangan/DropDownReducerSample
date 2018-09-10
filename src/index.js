import React from "react";
import ReactDOM from "react-dom";
import GroupDropDown from "./GroupDropDown";
import CustomDropdown from "./CustomDropDown.jsx";
import { reducer } from "./reducer";
import { createStore } from "redux";
import "./styles.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const App = ({ option }) => {
  return (
    <div className="App">
      <Dropdown
        options={option.options}
        onChange={() => {}}
        value={option.defaultOption}
        placeholder="Select an option"
      />
    </div>
  );
};
const store = createStore(reducer);
const rootElement = document.getElementById("root");
const render = () =>
  ReactDOM.render(<App option={store.getState().options} />, rootElement);
store.subscribe(render);
console.log("state", store.getState());
store.dispatch({ type: "LOAD_DROPDOWN" });
console.log("state", store.getState());
render();
