const options = {
  values: [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "three" },
    { value: "four", label: "four" },
    { value: "five", label: "five" }
  ],
  selected: {}
};

const initialState = {
  options: [],
  optionGroup: [],
  addedGroup: []
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM":
      let newArray = [...state.optionGroup];
      console.log("newArray", newArray);
      newArray.push(options);
      const updatedState = {
        ...state,
        optionGroup: newArray
      };
      console.log("updatedState", updatedState);
      return updatedState;
    case "CLEARCOLLECTION":
      return { ...state, optionGroup: [], addedGroup: [] };
    case "SELECTEDITEM":
      let value = action.value;
      let addedGroupValues = state.addedGroup;
      addedGroupValues.push(value);
      let newcol = { ...state, addedGroup: addedGroupValues };
      console.log("new", newcol);
      return newcol;
    default:
      return initialState;
  }
};
