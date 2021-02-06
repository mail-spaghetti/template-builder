import { OPTIONS } from "../pages/HomePage/data";

const optionsReducerDefaultState = {
  selection: OPTIONS[0],
  selected: false,
  type: null,
};

const optionsReducer = (
  state = optionsReducerDefaultState,
  { type, payload }
) => {
  switch (type) {
    case "SET_SELECTION":
      return { ...state, selection: payload };
    case "SET_SELECTED":
      return { ...state, selected: payload };
    case "SET_TYPE":
      return { ...state, type: payload };
    default:
      return state;
  }
};

export default optionsReducer;
