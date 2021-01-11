export const changeSelection = ({ selection }) => ({
  type: "SET_SELECTION",
  payload: selection,
});

export const setSelected = ({ selected }) => ({
  type: "SET_SELECTED",
  payload: selected,
});

export const setType = ({ type }) => ({
  type: "SET_TYPE",
  payload: type,
});
