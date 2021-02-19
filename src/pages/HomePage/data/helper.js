import {
  alignContent,
  changeColumnBackground,
  changeColumnBorderBottom,
  changeColumnBorderLeft,
  changeColumnBorderRight,
  changeColumnBorderTop,
  changeColumnRadius,
  changeMarginBottom,
  changeMarginLeft,
  changeMarginRight,
  changeMarginTop,
  changeStructBorderBottom,
  changeStructBorderLeft,
  changeStructBorderRight,
  changeStructBorderTop,
  changeStructureBackground,
  setBackground,
  setBorderTop,
  setColor,
  setHeight,
  setMarginBottom,
  setMarginHorizontal,
  setMarginLeft,
  setMarginRight,
  setMarginTop,
  setMarginVertical,
  setRadius,
  setURL,
  showDestkop,
  showMobile,
  updateContent,
} from "../../../actions/componentsAction";

export const funcMap = {
  top: (value, block) => setMarginTop(value, block),
  bottom: (value, block) => setMarginBottom(value, block),
  right: (value, block) => setMarginRight(value, block),
  left: (value, block) => setMarginLeft(value, block),
  vertical: (value) => setMarginVertical(value),
  horizontal: (value) => setMarginHorizontal(value),
  align: (value) => alignContent(value),
  height: (value) => setHeight(value),
  background: (value) => setBackground(value),
  color: (value) => setColor(value),
  radius: (value) => setRadius(value),
  borderTop: (value) => setBorderTop(value),
  mobile: (block) => showMobile({ block }),
  desktop: (block) => showDestkop({ block }),
  linkInput: (value) => setURL(value),
  update: (value) => updateContent(value),
  structBackground: (background) => changeStructureBackground({ background }),
  "struct-border-top": (value, index) => changeStructBorderTop({ value, index }),
  "struct-border-bottom": (value, index) => changeStructBorderBottom({ value, index }),
  "struct-border-right": (value, index) => changeStructBorderRight({ value, index }),
  "struct-border-left": (value, index) => changeStructBorderLeft({ value, index }),
  columnBackground: (background, index) => changeColumnBackground({ background, index }),
  columnRadius: (radius, index) => changeColumnRadius({ radius, index }),
  "column-margin-top": (value, index) => changeMarginTop({ value, index }),
  "column-margin-bottom": (value, index) => changeMarginBottom({ value, index }),
  "column-margin-left": (value, index) => changeMarginLeft({ value, index }),
  "column-margin-right": (value, index) => changeMarginRight({ value, index }),
  "column-border-top": (value, index) => changeColumnBorderTop({ value, index }),
  "column-border-bottom": (value, index) => changeColumnBorderBottom({ value, index }),
  "column-border-right": (value, index) => changeColumnBorderRight({ value, index }),
  "column-border-left": (value, index) => changeColumnBorderLeft({ value, index }),
};

export const getDefaultLeafValue = () => ({
  type: "default",
  content: null,
});

export const textCapitalize = (text) => text[0].toUpperCase() + text.substring(1).toLowerCase(); 

export const camelCase = (text) => text.split("-").map((b, idx) => (idx > 0 ? textCapitalize(b) : b)).join("")
