export const incrementColumns = (value = 1) => ({
  type: "ADD_COLUMNS",
  payload: value,
});

export const decrementColumns = (value = 1) => ({
  type: "MINUS_COLUMNS",
  payload: value,
});

export const incrementVerticalPadding = (value = 1) => ({
  type: "ADD_VERTICAL_PADDING",
  payload: value,
});

export const decrementVerticalPadding = (value = 1) => ({
  type: "MINUS_VERTICAL_PADDING",
  payload: value,
});

export const setMobileStack = (value = false) => ({
  type: "SET_MOBILE_STACK",
  payload: value,
});

export const setIndependentBorder = (value = true) => ({
  type: "SET_INDEPENDENT_BORDER",
  payload: value,
});

export const setBorder = ({ border }) => ({
  type: "SET_BORDER",
  payload: border,
});

export const setBorderTop = ({ borderTop }) => ({
  type: "SET_BORDER_TOP",
  payload: borderTop,
});

export const setBorderBottom = ({ borderBottom }) => ({
  type: "SET_BORDER_BOTTOM",
  payload: borderBottom,
});

export const setBorderLeft = ({ borderLeft }) => ({
  type: "SET_BORDER_LEFT",
  payload: borderLeft,
});

export const setBorderRight = ({ borderRight }) => ({
  type: "SET_BORDER_RIGHT",
  payload: borderRight,
});

export const setBackgroundImage = ({ file }) => ({
  type: "SET_BACKGROUND_IMAGE",
  payload: file,
});

export const setSelectedColumn = (value = 1) => ({
  type: "SET_SELECTED_COLUMN",
  payload: value,
});

export const setColumnBackgroundColor = ({ backgroundColor }) => ({
  type: "SET_COLUMN_BACKGROUND_COLOR",
  payload: backgroundColor,
});

export const setColumnBorderRadius = ({ borderRadius }) => ({
  type: "SET_COLUMN_BORDER_RADIUS",
  payload: borderRadius,
});

export const setColumnMarginTop = ({ marginTop }) => ({
  type: "SET_COLUMN_MARGIN_TOP",
  payload: marginTop,
});

export const setColumnMarginBottom = ({ marginBottom }) => ({
  type: "SET_COLUMN_MARGIN_BOTTOM",
  payload: marginBottom,
});

export const setColumnMarginLeft = ({ marginLeft }) => ({
  type: "SET_COLUMN_MARGIN_LEFT",
  payload: marginLeft,
});

export const setColumnMarginRight = ({ marginRight }) => ({
  type: "SET_COLUMN_MARGIN_RIGHT",
  payload: marginRight,
});

export const setColumnBorder = ({ border }) => ({
  type: "SET_COLUMN_BORDER",
  payload: border,
});

export const setColumnBorderTop = ({ borderTop }) => ({
  type: "SET_COLUMN_BORDER_TOP",
  payload: borderTop,
});

export const setColumnBorderBottom = ({ borderBottom }) => ({
  type: "SET_COLUMN_BORDER_BOTTOM",
  payload: borderBottom,
});

export const setColumnBorderLeft = ({ borderLeft }) => ({
  type: "SET_COLUMN_BORDER_LEFT",
  payload: borderLeft,
});

export const setColumnBorderRight = ({ borderRight }) => ({
  type: "SET_COLUMN_BORDER_RIGHT",
  payload: borderRight,
});

export const setColumnIndependentBorder = (value = true) => ({
  type: "SET_COLUMN_INDEPENDENT_BORDER",
  payload: value,
});
