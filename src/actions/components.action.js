export const setActiveContent = ({ activeContent = 1 }) => ({
  type: "SET_ACTIVE_CONTENT",
  activeContent,
});

export const setTextMarginTop = (value = 1) => ({
  type: "SET_TEXT_MARGIN_TOP",
  payload: value,
});

export const setTextMarginBottom = (value = 1) => ({
  type: "SET_TEXT_MARGIN_BOTTOM",
  payload: value,
});

export const setTextMarginRight = (value = 1) => ({
  type: "SET_TEXT_MARGIN_RIGHT",
  payload: value,
});

export const setTextMarginLeft = (value = 1) => ({
  type: "SET_TEXT_MARGIN_LEFT",
  payload: value,
});

export const showTextDestkop = () => ({
  type: "SHOW_TEXT_DESKTOP",
});

export const showTextMobile = () => ({
  type: "SHOW_TEXT_MOBILE",
});
