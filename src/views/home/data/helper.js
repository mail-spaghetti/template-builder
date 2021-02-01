import {
  setBackground,
  setBorderTop,
  setHeight,
  setMarginBottom,
  setMarginLeft,
  setMarginRight,
  setMarginTop,
  setURL,
  showDestkop,
  showMobile,
} from "../../../actions/components.action";

export const funcMap = {
  top: (value, block) => setMarginTop(value, block),
  bottom: (value, block) => setMarginBottom(value, block),
  right: (value, block) => setMarginRight(value, block),
  left: (value, block) => setMarginLeft(value, block),
  height: (value) => setHeight(value),
  background: (value) => setBackground(value),
  borderTop: (value) => setBorderTop(value),
  mobile: (block) => showMobile({ block }),
  desktop: (block) => showDestkop({ block }),
  linkInput: (value, prop, block) => setURL(value, block, prop),
};

export const getDefaultLeafValue = () => ({
  type: "default",
  content: null,
});
