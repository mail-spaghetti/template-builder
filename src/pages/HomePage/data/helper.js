import {
  changeStructBorderBottom,
  changeStructBorderLeft,
  changeStructBorderRight,
  changeStructBorderTop,
  changeStructureBackground,
  setBackground,
  setBorderTop,
  setHeight,
  setMarginBottom,
  setMarginHorizontal,
  setMarginLeft,
  setMarginRight,
  setMarginTop,
  setMarginVertical,
  setURL,
  showDestkop,
  showMobile,
} from "../../../actions/componentsAction";

export const funcMap = {
  top: (value, block) => setMarginTop(value, block),
  bottom: (value, block) => setMarginBottom(value, block),
  right: (value, block) => setMarginRight(value, block),
  left: (value, block) => setMarginLeft(value, block),
  vertical: (value) => setMarginVertical(value),
  horizontal: (value) => setMarginHorizontal(value),
  height: (value) => setHeight(value),
  background: (value) => setBackground(value),
  borderTop: (value) => setBorderTop(value),
  mobile: (block) => showMobile({ block }),
  desktop: (block) => showDestkop({ block }),
  linkInput: (value, prop, block) => setURL(value, block, prop),
  structBackground: (background) => changeStructureBackground({ background }),
  "struct-border-top": (value, index) => changeStructBorderTop({ value, index }),
  "struct-border-bottom": (value, index) => changeStructBorderBottom({ value, index }),
  "struct-border-right": (value, index) => changeStructBorderRight({ value, index }),
  "struct-border-left": (value, index) => changeStructBorderLeft({ value, index }),
};

export const getDefaultLeafValue = () => ({
  type: "default",
  content: null,
});
