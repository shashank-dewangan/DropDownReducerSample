import React from "react";
import ReactDOM from "react-dom";
import GroupDropDown from "./GroupDropDown";
import CustomDropdown from "./CustomDropDown.jsx";
import { reducer } from "./reducer";
import { createStore } from "redux";
import "./styles.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const App = ({ optionGroup, OnAddItem }) => {
  return (
    <div className="App">
      <GroupDropDown optionGroup={optionGroup} />
      <br />
      <button onClick={OnAddItem}>Add Item</button>
    </div>
  );
};
const store = createStore(reducer);
const rootElement = document.getElementById("root");
const render = () =>
  ReactDOM.render(
    <App
      optionGroup={store.getState().optionGroup}
      OnAddItem={() => {
        store.dispatch({ type: "ADDITEM" });
      }}
    />,
    rootElement
  );
store.subscribe(render);

render();
