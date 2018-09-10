import React from "react";
import ReactDOM from "react-dom";
import GroupDropDown from "./GroupDropDown";
import { reducer } from "./reducer";
import { createStore } from "redux";
import "./styles.css";
import "react-dropdown/style.css";

const App = ({ optionGroup, OnAddItem, clearCollection, optionSelected }) => {
  console.log("optionGroup", optionGroup);
  return (
    <div className="App">
      <GroupDropDown
        optionGroup={optionGroup}
        optionSelected={optionSelected}
      />
      <br />
      <button onClick={OnAddItem}>Add Item</button>
      <button onClick={clearCollection}>Clear</button>
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
      clearCollection={() => store.dispatch({ type: "CLEARCOLLECTION" })}
      optionSelected={e => store.dispatch({ type: "SELECTEDITEM", value: e })}
    />,
    rootElement
  );
store.subscribe(render);

render();
