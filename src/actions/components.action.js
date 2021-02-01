export const setActiveContent = ({ activeContent = 1 }) => ({
  type: "SET_ACTIVE_CONTENT",
  activeContent,
});

export const setInactiveContent = () => ({
  type: "SET_INACTIVE_CONTENT",
});

export const setHoverContent = ({ index }) => ({
  type: "SET_HOVER_CONTENT",
  payload: index,
});

export const setHoverSubcontent = ({ rowIndex, columnIndex }) => ({
  type: "SET_HOVER_SUBCONTENT",
  payload: {
    rowIndex,
    columnIndex,
  },
});

export const unsetHoverContent = () => ({
  type: "UNSET_HOVER_CONTENT",
});

export const unsetHoverSubcontent = () => ({
  type: "UNSET_HOVER_SUBCONTENT",
});

export const setActive = ({ activeContent = 1 }) => (dispatch) => {
  dispatch(setInactiveContent());
  dispatch(setActiveContent({ activeContent }));
};

export const setActiveSubContent = ({ activeSubcontent = 1 }) => ({
  type: "SET_ACTIVE_SUBCONTENT",
  activeSubcontent,
});

export const setActiveRow = (row, column) => ({
  type: "SET_ROW",
  payload: {
    row,
    column,
  },
});

export const setActivateRow = (index, row, column) => (dispatch) => {
  dispatch(setRowsInactive());
  dispatch(setRowActive(index, column, row));
};

export const setRowsInactive = () => ({
  type: "SET_ROWS_INACTIVE",
});

export const setRowActive = (index, column, row) => ({
  type: "SET_ACTIVE_ROW",
  payload: {
    index,
    column,
    row,
  },
});

export const addContent = (content) => {
  return {
    type: "ADD_CONTENT",
    payload: content,
  };
};

export const insertContentAbove = (content, index, row, column) => ({
  type: "INSERT_CONTENT_ABOVE",
  payload: {
    content,
    index,
    column,
    row,
  },
});

export const insertContent = (content, index, row, column) => ({
  type: "INSERT_CONTENT",
  payload: {
    content,
    index,
    column,
    row,
  },
});

export const updateContent = (content, index, row, column) => ({
  type: "UPDATE_CONTENT",
  payload: {
    content,
    index,
    column,
    row,
  },
});

export const insertItem = (position, content, index, row, column) => (
  dispatch
) => {
  dispatch(setRowsInactive());
  switch (position) {
    case "above":
      dispatch(insertContentAbove(content, index, row, column));
      break;
    case "below":
      dispatch(insertContentBelow(content, index, row, column));
      break;
    default:
      dispatch(insertContent(content, index, row, column));
  }
};

export const insertContentBelow = (content, index, row, column) => ({
  type: "INSERT_CONTENT_BELOW",
  payload: {
    content,
    index,
    column,
    row,
  },
});

export const deleteColumnContent = (index, row, column) => ({
  type: "DELETE_COLUMN_CONTENT",
  payload: {
    index,
    row,
    column,
  },
});

export const copyRowContent = (index, column, row) => ({
  type: "COPY_ROW_CONTENT",
  payload: {
    index,
    row,
    column,
  },
});

export const deleteContent = (index) => ({
  type: "DELETE_CONTENT",
  payload: index,
});

export const modifyColumns = (value) => {
  if (value > 0) return { type: "INCREMENT_COLUMNS" };
  return { type: "DECREMENT_COLUMNS" };
};

export const setMarginTop = (value = 1) => ({
  type: "SET_MARGIN_TOP",
  payload: value,
});

export const setMarginBottom = (value = 1) => ({
  type: "SET_MARGIN_BOTTOM",
  payload: value,
});

export const setMarginRight = (value = 1) => ({
  type: "SET_MARGIN_RIGHT",
  payload: value,
});

export const setMarginLeft = (value = 1) => ({
  type: "SET_MARGIN_LEFT",
  payload: value,
});

export const showDestkop = ({ block }) => ({
  type: "SHOW_DESKTOP",
  block,
});

export const showMobile = ({ block }) => ({
  type: "SHOW_MOBILE",
  block,
});

export const setURL = (value, block, prop) => ({
  type: "SET_URL",
  payload: value,
  block,
  prop,
});
