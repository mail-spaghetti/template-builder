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
  type: "UNSET_HOVER_SUBCONTENT"
})

export const setActive = ({ activeContent = 1 }) => (dispatch) => {
  dispatch(setInactiveContent());
  dispatch(setActiveContent({ activeContent }));
};

export const setActiveSubContent = ({ activeSubcontent = 1 }) => ({
  type: "SET_ACTIVE_SUBCONTENT",
  activeSubcontent,
});

export const addContent = (content) => {
  return {
    type: "ADD_CONTENT",
    payload: content,
  };
};

export const insertContentAbove = (content, index, column, row) => ({
  type: "INSERT_CONTENT_ABOVE",
  payload: {
    content,
    index,
    column,
    row,
  },
});

export const insertContent = (content, index, column, row) => ({
  type: "INSERT_CONTENT",
  payload: {
    content,
    index,
    column,
    row,
  },
});

export const insertContentBelow = (content, index, column, row) => ({
  type: "INSERT_CONTENT_BELOW",
  payload: {
    content,
    index,
    column,
    row,
  },
});

export const modifyColumns = (value) => {
  if (value > 0) return { type: "INCREMENT_COLUMNS" };
  return { type: "DECREMENT_COLUMNS" };
};

export const setMarginTop = (value = 1, block) => ({
  type: "SET_MARGIN_TOP",
  payload: value,
  block,
});

export const setMarginBottom = (value = 1, block) => ({
  type: "SET_MARGIN_BOTTOM",
  payload: value,
  block,
});

export const setMarginRight = (value = 1, block) => ({
  type: "SET_MARGIN_RIGHT",
  payload: value,
  block,
});

export const setMarginLeft = (value = 1, block) => ({
  type: "SET_MARGIN_LEFT",
  payload: value,
  block,
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
