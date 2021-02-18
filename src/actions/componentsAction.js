export const setCurrentActiveBlock = ({
  contentIndex,
  columnIndex,
  rowIndex,
}) => ({
  type: "SET_CURRENT_ACTIVE_BLOCK",
  contentIndex,
  columnIndex,
  rowIndex,
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

export const updateContent = (content) => ({
  type: "UPDATE_CONTENT",
  payload: {
    content,
  },
});

export const insertItem = (position, content, index, row, column) => (
  dispatch
) => {
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

export const insertMainContent = (position, index, item) => (dispatch) => {
  switch (position) {
    case "above":
      dispatch(insertMainContentAbove(index, item));
      break;
    case "below":
      dispatch(insertMainContentBelow(index, item));
      break;
  }
};

export const insertMainContentAbove = (index, item) => ({
  type: "INSERT_MAIN_CONTENT_ABOVE",
  payload: { index, structure: item },
});

export const insertMainContentBelow = (index, item) => ({
  type: "INSERT_MAIN_CONTENT_BELOW",
  payload: {
    index,
    structure: item,
  },
});

export const setMarginVertical = (value = 1) => (dispatch) => {
  dispatch(setMarginTop(value));
  dispatch(setMarginBottom(value));
};

export const setMarginHorizontal = (value = 1) => (dispatch) => {
  dispatch(setMarginRight(value));
  dispatch(setMarginLeft(value));
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

export const alignContent = (value) => ({
  type: "SET_TEXT_ALIGN",
  payload: value,
});

export const setHeight = (value = 1) => ({
  type: "SET_HEIGHT",
  payload: value,
});

export const setBackground = (value) => ({
  type: "SET_BACKGROUND",
  payload: value,
});

export const setColor = (value) => ({
  type: "SET_COLOR",
  payload: value,
});

export const setRadius = (value) => ({
  type: "SET_RADIUS",
  payload: value,
});

export const setBorderTop = (value) => ({
  type: "SET_BORDER_TOP",
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

export const setURL = (value) => ({
  type: "SET_URL",
  payload: value,
});

export const changeStructurePadding = ({ value = 1 }) => ({
  type: "SET_STRUCTURE_PADDING",
  payload: value,
});

export const changeStructureBackground = ({ background }) => ({
  type: "SET_STRUCTURE_BACKGROUND",
  payload: background,
});

export const changeStructBorderTop = ({ value, index }) => ({
  type: "SET_STRUCTURE_BORDER_TOP",
  payload: {
    value,
    index,
  },
});

export const changeStructBorderBottom = ({ value, index }) => ({
  type: "SET_STRUCTURE_BORDER_BOTTOM",
  payload: {
    value,
    index,
  },
});

export const changeStructBorderRight = ({ value, index }) => ({
  type: "SET_STRUCTURE_BORDER_RIGHT",
  payload: {
    value,
    index,
  },
});

export const changeStructBorderLeft = ({ value, index }) => ({
  type: "SET_STRUCTURE_BORDER_LEFT",
  payload: {
    value,
    index,
  },
});

export const changeMarginTop = ({ value, index }) => ({
  type: "SET_COLUMN_MARGIN_TOP",
  payload: {
    value,
    index,
  },
});

export const changeMarginBottom = ({ value, index }) => ({
  type: "SET_COLUMN_MARGIN_BOTTOM",
  payload: {
    value,
    index,
  },
});

export const changeMarginLeft = ({ value, index }) => ({
  type: "SET_COLUMN_MARGIN_LEFT",
  payload: {
    value,
    index,
  },
});

export const changeMarginRight = ({ value, index }) => ({
  type: "SET_COLUMN_MARGIN_RIGHT",
  payload: {
    value,
    index,
  },
});

export const changeColumnBackground = ({ background, index }) => ({
  type: "SET_COLUMN_BACKGROUND",
  payload: { index, background },
});

export const changeColumnRadius = ({ radius, index }) => ({
  type: "SET_COLUMN_RADIUS",
  payload: { radius, index },
});

export const changeColumnBorderTop = ({ value, index }) => ({
  type: "SET_COLUMN_BORDER_TOP",
  payload: {
    value,
    index,
  },
});

export const changeColumnBorderBottom = ({ value, index }) => ({
  type: "SET_COLUMN_BORDER_BOTTOM",
  payload: {
    value,
    index,
  },
});

export const changeColumnBorderRight = ({ value, index }) => ({
  type: "SET_COLUMN_BORDER_RIGHT",
  payload: {
    value,
    index,
  },
});

export const changeColumnBorderLeft = ({ value, index }) => ({
  type: "SET_COLUMN_BORDER_LEFT",
  payload: {
    value,
    index,
  },
});
