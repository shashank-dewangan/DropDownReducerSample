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
    case "LOAD_GROUP":
      return { ...state, optionGroup: [{ ...options }, { ...options }] };
    case "LOAD_DROPDOWN":
      return { ...state, options: options };
    default:
      return initialState;
  }
};
