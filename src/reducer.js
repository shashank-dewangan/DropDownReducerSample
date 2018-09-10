const options = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "three" },
  { value: "four", label: "four" },
  { value: "five", label: "five" }
];
const initialState = {
  options: [],
  optionGroup: []
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM":
      let newArray = [...state.optionGroup];
      newArray.push(options);
      const updatedState = {
        ...state,
        optionGroup: newArray
      };
      return updatedState;
    default:
      return initialState;
  }
};
