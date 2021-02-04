import { COMPONENT_INITIAL_STATE, INITIAL_DRAFT_CONTENT } from "../utils";

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
    align: 'center',
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
  { type, activeContent, activeSubcontent, payload, block, prop }
) => {
  let existingContents = state.contents.slice();
  switch (type) {
    case "SET_INACTIVE_CONTENT":
      existingContents = existingContents.map((content) => {
        content.active = false;
        return content;
      });
      return { ...state, contents: existingContents };
    case "SET_ACTIVE_CONTENT":
      existingContents[activeContent].active = true;
      return { ...state, contents: existingContents };
    case "SET_ROW":
      return {
        ...state,
        activeRow: {
          rowIndex: payload.row,
          columnIndex: payload.column,
        },
      };
    case "SET_ROWS_INACTIVE":
      existingContents = existingContents.map((contents) => ({
        ...contents,
        columns: contents.columns.map((columns) => ({
          ...columns,
          rows: columns.rows.map((row) => ({ ...row, active: false })),
        })),
      }));
      return { ...state, contents: existingContents };
    case "SET_ACTIVE_ROW":
      var existingColumns = existingContents[payload.index].columns;
      existingColumns[payload.column].rows[payload.row].active = true;
      return { ...state, contents: existingContents };
    case "SET_HOVER_CONTENT":
      return { ...state, hoverContent: payload };
    case "SET_HOVER_SUBCONTENT":
      return {
        ...state,
        hoverSubcontent: {
          rowIndex: payload.rowIndex,
          columnIndex: payload.columnIndex,
        },
      };
    case "UNSET_HOVER_CONTENT":
      return { ...state, hoverContent: null };
    case "UNSET_HOVER_SUBCONTENT":
      return {
        ...state,
        hoverSubcontent: {
          rowIndex: null,
          columnIndex: null,
        },
      };
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
      existingColumn.rows.splice(payload.row - 1, 0, {
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
        existingContents[0].columns[state.activeRow.columnIndex].rows[
          state.activeRow.rowIndex
        ];
      existingRow.value.properties.marginTop += payload;
      return { ...state, contents: existingContents };
    case "SET_MARGIN_RIGHT":
      var existingRow =
        existingContents[0].columns[state.activeRow.columnIndex].rows[
          state.activeRow.rowIndex
        ];
      existingRow.value.properties.marginRight += payload;
      return { ...state, contents: existingContents };
    case "SET_MARGIN_BOTTOM":
      var existingRow =
        existingContents[0].columns[state.activeRow.columnIndex].rows[
          state.activeRow.rowIndex
        ];
      existingRow.value.properties.marginBottom += payload;
      return { ...state, contents: existingContents };
    case "SET_MARGIN_LEFT":
      var existingRow =
        existingContents[0].columns[state.activeRow.columnIndex].rows[
          state.activeRow.rowIndex
        ];
      existingRow.value.properties.marginLeft += payload;
      return { ...state, contents: existingContents };
    case "SET_HEIGHT":
      var existingRow =
        existingContents[0].columns[state.activeRow.columnIndex].rows[
          state.activeRow.rowIndex
        ];
      existingRow.value.properties.height += payload;
      return { ...state, contents: existingContents };
    case "SET_BORDER_TOP":
      var existingRow =
        existingContents[0].columns[state.activeRow.columnIndex].rows[
          state.activeRow.rowIndex
        ];
      existingRow.value.properties.borderTop = payload;
      return { ...state, contents: existingContents };
    case "SET_BACKGROUND":
      var existingRow =
        existingContents[0].columns[state.activeRow.columnIndex].rows[
          state.activeRow.rowIndex
        ];
      existingRow.value.properties.background = payload;
      return { ...state, contents: existingContents };
    case "SET_URL":
      var existingRow =
        existingContents[0].columns[state.activeRow.columnIndex].rows[
          state.activeRow.rowIndex
        ];
      existingRow.value.content = payload;
      return { ...state, contents: existingContents };
    default:
      return state;
  }
};

export default componentsReducer;
