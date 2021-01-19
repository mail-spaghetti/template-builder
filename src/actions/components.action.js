export const setActiveContent = ({ activeContent = 1 }) => ({
  type: "SET_ACTIVE_CONTENT",
  activeContent,
});

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

export const insertContent = (content, index, subIndex) => ({
  type: "INSERT_CONTENT",
  payload: {
    content,
    index,
    subIndex,
  },
});

export const modifyContent = (newContent, columns) => ({
  type: "MODIFY_CONTENT",
  payload: { content: newContent, columns },
});

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
