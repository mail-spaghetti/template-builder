import {
  COMPONENT_INITIAL_STATE,
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
        existingContents[activeContentIndex].columns[
          state.activeRow.columnIndex
        ].rows[activeRowIndex];
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
    default:
      return state;
  }
};

export default componentsReducer;
