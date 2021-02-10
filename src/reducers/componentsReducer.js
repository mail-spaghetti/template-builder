import {
  COMPONENT_INITIAL_STATE,
  INITIAL_DRAFT_COLUMN_STYLING,
  INITIAL_DRAFT_CONTENT,
  INITIAL_DRAFT_ROW,
} from "../utils";

const componentsReducerDefaultState = COMPONENT_INITIAL_STATE;

const defaultProperties = {
  TEXT: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    mobile: false,
    desktop: true,
  },
  IMAGE: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    mobile: false,
    desktop: true,
  },
  GIF: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    mobile: false,
    desktop: true,
  },
  DIVIDER: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    borderTop: "1px solid #ffffff",
    mobile: false,
    desktop: true,
  },
  SPACER: {
    height: 45,
    background: "#ffffff",
  },
  BUTTON: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    align: "center",
    link: "https://www.google.com",
    align: null,
    fullWidth: false,
    background: "#d54d42",
    color: "#ffffff",
    borderRadius: 5,
    mobile: false,
    desktop: true,
  },
};

const componentsReducer = (
  state = componentsReducerDefaultState,
  { type, payload, contentIndex, columnIndex, rowIndex }
) => {
  let existingContents = state.contents.slice();
  const {
    contentIndex: activeContentIndex,
    columnIndex: activeColumnIndex,
    rowIndex: activeRowIndex,
  } = state.currentActiveBlock;
  switch (type) {
    case "SET_CURRENT_ACTIVE_BLOCK":
      return {
        ...state,
        currentActiveBlock: {
          contentIndex,
          columnIndex,
          rowIndex,
        },
      };
    case "INSERT_MAIN_CONTENT_ABOVE":
      var contents = payload.structure.columns.map((column) => {
        return {
          width: parseFloat(
            ((column / payload.structure.parts) * 100).toFixed(2)
          ),
          ...JSON.parse(JSON.stringify(INITIAL_DRAFT_COLUMN_STYLING)),
          rows: INITIAL_DRAFT_ROW.slice(),
        };
      });
      existingContents.splice(payload.index, 0, {
        ...JSON.parse(JSON.stringify(INITIAL_DRAFT_CONTENT)),
        columns: contents,
      });
      return { ...state, contents: existingContents };
    case "INSERT_MAIN_CONTENT_BELOW":
      var contents = payload.structure.columns.map((column) => {
        return {
          width: parseFloat(
            ((column / payload.structure.parts) * 100).toFixed(2)
          ),
          ...JSON.parse(JSON.stringify(INITIAL_DRAFT_COLUMN_STYLING)),
          rows: INITIAL_DRAFT_ROW.slice(),
        };
      });
      existingContents.splice(payload.index + 1, 0, {
        ...JSON.parse(JSON.stringify(INITIAL_DRAFT_CONTENT)),
        columns: contents,
      });
      return { ...state, contents: existingContents };
    case "INCREMENT_COLUMNS":
      existingContents = existingContents.map((content) => {
        if (content.active)
          content.columns = [
            ...content.columns,
            {
              rows: [
                {
                  active: false,
                  content: null,
                },
              ],
            },
          ];
        return content;
      });
      return { ...state, contents: existingContents };
    case "DECREMENT_COLUMNS":
      existingContents.map((content) => {
        if (content.active) content.columns.pop();
        return content;
      });
    case "INSERT_CONTENT_ABOVE":
      var existingColumn =
        existingContents[payload.index].columns[payload.column];
      existingColumn.rows.splice(payload.row, 0, {
        active: true,
        content: payload.content.text,
        component: payload.content.component,
        value: {
          content: payload.content.value,
          properties: JSON.parse(
            JSON.stringify(defaultProperties[payload.content.text])
          ),
        },
      });
      return { ...state, contents: existingContents };
    case "INSERT_CONTENT":
      existingContents[payload.index].columns[payload.column].rows[
        payload.row
      ] = {
        active: true,
        content: payload.content.text,
        component: payload.content.component,
        value: {
          content: payload.content.value,
          properties: JSON.parse(
            JSON.stringify(defaultProperties[payload.content.text])
          ),
        },
      };
      return { ...state, contents: existingContents };
    case "INSERT_CONTENT_BELOW":
      var existingColumn =
        existingContents[payload.index].columns[payload.column];
      existingColumn.rows.splice(payload.row + 1, 0, {
        active: true,
        content: payload.content.text,
        component: payload.content.component,
        value: {
          content: payload.content.value,
          properties: JSON.parse(
            JSON.stringify(defaultProperties[payload.content.text])
          ),
        },
      });
      return { ...state, contents: existingContents };
    case "UPDATE_CONTENT":
      var existingRow =
        existingContents[payload.index].columns[payload.column].rows[
          payload.row
        ];
      existingRow.value.content = payload.content;
      return { ...state, contents: existingContents.slice() };
    case "DELETE_COLUMN_CONTENT":
      var existingColumn =
        existingContents[payload.index].columns[payload.column];
      existingColumn.rows.splice(payload.row, 1);
      if (existingColumn.rows.length === 0)
        existingColumn.rows = [
          {
            active: false,
            content: null,
          },
        ];
      return { ...state, contents: existingContents };
    case "COPY_ROW_CONTENT":
      var existingColumn =
        existingContents[payload.index].columns[payload.column];
      existingColumn.rows.splice(
        payload.row + 1,
        0,
        existingColumn.rows[payload.row]
      );
      return { ...state, contents: existingContents };
    case "DELETE_CONTENT":
      existingContents[payload] = JSON.parse(
        JSON.stringify(INITIAL_DRAFT_CONTENT)
      );
      return { ...state, contents: existingContents };
    case "SET_MARGIN_TOP":
      var existingRow =
        existingContents[activeContentIndex].columns[activeColumnIndex].rows[
          activeRowIndex
        ];
      existingRow.value.properties.marginTop += payload;
      return { ...state, contents: existingContents };
    case "SET_MARGIN_RIGHT":
      var existingRow =
        existingContents[activeContentIndex].columns[activeColumnIndex].rows[
          activeRowIndex
        ];
      existingRow.value.properties.marginRight += payload;
      return { ...state, contents: existingContents };
    case "SET_MARGIN_BOTTOM":
      var existingRow =
        existingContents[activeContentIndex].columns[activeColumnIndex].rows[
          activeRowIndex
        ];
      existingRow.value.properties.marginBottom += payload;
      return { ...state, contents: existingContents };
    case "SET_MARGIN_LEFT":
      var existingRow =
        existingContents[activeContentIndex].columns[activeColumnIndex].rows[
          activeRowIndex
        ];
      existingRow.value.properties.marginLeft += payload;
      return { ...state, contents: existingContents };
    case "SET_HEIGHT":
      var existingRow =
        existingContents[activeContentIndex].columns[activeColumnIndex].rows[
          activeRowIndex
        ];
      existingRow.value.properties.height += payload;
      return { ...state, contents: existingContents };
    case "SET_BORDER_TOP":
      var existingRow =
        existingContents[activeContentIndex].columns[activeColumnIndex].rows[
          activeRowIndex
        ];
      existingRow.value.properties.borderTop = payload;
      return { ...state, contents: existingContents };
    case "SET_BACKGROUND":
      var existingRow =
        existingContents[activeContentIndex].columns[activeColumnIndex].rows[
          activeRowIndex
        ];
      existingRow.value.properties.background = payload;
      return { ...state, contents: existingContents };
    case "SET_URL":
      var existingRow =
        existingContents[activeContentIndex].columns[activeColumnIndex].rows[
          activeRowIndex
        ];
      existingRow.value.content = payload;
      return { ...state, contents: existingContents };
    case "SET_STRUCTURE_PADDING":
      existingContents[activeContentIndex].verticalPadding += payload;
      return { ...state, contents: existingContents };
    case "SET_STRUCTURE_BACKGROUND":
      existingContents[activeContentIndex].background = payload;
      return { ...state, contents: existingContents };
    case "SET_STRUCTURE_BORDER_TOP":
      var borderTop = existingContents[activeContentIndex].borderTop.split(" ");
      borderTop[payload.index] = payload.value;
      borderTop = borderTop.join(" ");
      existingContents[activeContentIndex].borderTop = borderTop;
      return { ...state, contents: existingContents };
    case "SET_STRUCTURE_BORDER_BOTTOM":
      var borderBottom = existingContents[
        activeContentIndex
      ].borderBottom.split(" ");
      borderBottom[payload.index] = payload.value;
      borderBottom = borderBottom.join(" ");
      existingContents[activeContentIndex].borderBottom = borderBottom;
      return { ...state, contents: existingContents };
    case "SET_STRUCTURE_BORDER_RIGHT":
      var borderRight = existingContents[activeContentIndex].borderRight.split(
        " "
      );
      borderRight[payload.index] = payload.value;
      borderRight = borderRight.join(" ");
      existingContents[activeContentIndex].borderRight = borderRight;
      return { ...state, contents: existingContents };
    case "SET_STRUCTURE_BORDER_LEFT":
      var borderLeft = existingContents[activeContentIndex].borderLeft.split(
        " "
      );
      borderLeft[payload.index] = payload.value;
      borderLeft = borderLeft.join(" ");
      existingContents[activeContentIndex].borderLeft = borderLeft;
      return { ...state, contents: existingContents };
    case "SET_COLUMN_BACKGROUND":
      existingContents[activeContentIndex].columns[
        payload.index - 1
      ].background = payload.background;
      return { ...state, contents: existingContents };
    case "SET_COLUMN_RADIUS":
      existingContents[activeContentIndex].columns[
        payload.index - 1
      ].borderRadius += payload.radius;
      return { ...state, contents: existingContents };
    case "SET_COLUMN_MARGIN_TOP":
      existingContents[activeContentIndex].columns[
        payload.index - 1
      ].marginTop += payload.value;
      return { ...state, contents: existingContents };
    case "SET_COLUMN_MARGIN_BOTTOM":
      existingContents[activeContentIndex].columns[
        payload.index - 1
      ].marginBottom += payload.value;
      return { ...state, contents: existingContents };
    case "SET_COLUMN_MARGIN_LEFT":
      existingContents[activeContentIndex].columns[
        payload.index - 1
      ].marginLeft += payload.value;
      return { ...state, contents: existingContents };
    case "SET_COLUMN_MARGIN_RIGHT":
      existingContents[activeContentIndex].columns[
        payload.index - 1
      ].marginRight += payload.value;
      return { ...state, contents: existingContents };
    default:
      return state;
  }
};

export default componentsReducer;
