export const OPTIONS = ["Components", "Structure", "Page Settings"];
export const DEFAULT_LEAF_VALUE = "Drop content here";
export const INPUT_PLACEHOLDER =
  "This is your new text block with first paragraph.";
export const IMAGE_WARNING =
  "Not every e-mail client can show background image properly. According to that, set also similar background color";
export const STRUCT_HEADER = "Columns";
export const BORDER_SETTINGS = ["solid", "dashed", "dotted"];
export const BORDER_TYPES = [
  "border",
  "border-top",
  "border-bottom",
  "border-left",
  "border-right",
];

export const COLUMN_TYPES = ["Column 1", "Column 2", "Column 3", "Column 4"];

export const ATTACHMENT_TYPES = ["PDF", "PNG", "JPEG"];

export const CARDS = [
  {
    text: "TEXT",
    icon: "Text",
    component: "Input",
  },
  {
    text: "IMAGE",
    icon: "Image",
    component: "Input",
  },
  {
    text: "GIF",
    icon: "Gif",
    component: "Input",
  },
  {
    text: "BUTTON",
    icon: "Button",
    component: "DraftButton",
  },
  {
    text: "DIVIDER",
    icon: "Divider",
    component: "HorizontalRule",
  },
  {
    text: "SPACER",
    icon: "Spacer",
    component: "Input",
  },
  {
    text: "SOCIAL",
    icon: "Social",
    component: "Input",
  },
  {
    text: "VIDEO",
    icon: "Video",
    component: "Input",
  },
  {
    text: "HTML",
    icon: "Code",
    component: "Input",
  },
];

export const ITEMS = {
  BLOCK: "block",
};

export const STRUCTURE_INDICES = [
  {
    parts: 1,
    columns: [1],
  },
  {
    parts: 2,
    columns: [1, 1],
  },
  {
    parts: 3,
    columns: [1, 1, 1],
  },
  {
    parts: 4,
    columns: [1, 1, 1, 1],
  },
  {
    parts: 3,
    columns: [1, 2],
  },
  {
    parts: 3,
    columns: [2, 1],
  },
  {
    parts: 5,
    columns: [4, 1],
  },
  {
    parts: 5,
    columns: [1, 4],
  },
];
