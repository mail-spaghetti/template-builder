import {
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
  mobile: (block) => showMobile({ block }),
  desktop: (block) => showDestkop({ block }),
  linkInput: (value, prop, block) => setURL(value, block, prop),
};
