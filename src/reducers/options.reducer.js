import { OPTIONS } from "../views/home/data";

const optionsReducerDefaultState = {
  selection: OPTIONS[0],
};

const optionsReducer = (
  state = optionsReducerDefaultState,
  { type, selection }
) => {
  switch (type) {
    case "SET_SELECTION":
      return { selection };
    default:
      return state;
  }
};

export default optionsReducer;
