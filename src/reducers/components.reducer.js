const componentsReducerDefaultState = {
  activeContent: null,
  hoverContent: null,
  hoverSubcontent: {
    rowIndex: null,
    columnIndex: null,
  },
  activeSubcontent: null,
  component: null,
  contents: [
    {
      active: false,
      verticalPadding: "10",
      bgColor: "#d7d7d7",
      columns: [
        {
          rows: [
            {
              active: false,
              content: null,
            },
          ],
        },
      ],
    },
  ],
  text: {
    marginTop: "15",
    marginBottom: "15",
    marginLeft: "15",
    marginRight: "15",
    mobile: false,
    desktop: true,
  },
  image: {
    file: null,
    link: null,
    info: null,
    align: "center",
    marginTop: "15",
    marginBottom: "15",
    marginLeft: "15",
    marginRight: "15",
    mobile: false,
    desktop: true,
  },
  gif: {
    file: null,
    sourceURL: {
      link: {
        icon: "Link",
        input: "http://",
      },
    },
    gifURL: {
      link: {
        icon: "Link",
        input: "http://",
      },
    },
    gifText: {
      link: {
        icon: "Alt",
        input: "Alt",
      },
    },
    align: "left",
    marginTop: "15",
    marginBottom: "15",
    marginLeft: "15",
    marginRight: "15",
    mobile: true,
    desktop: false,
  },
  button: {
    file: null,
    link: null,
    align: "left",
    buttonURL: {
      link: {
        icon: "Link",
        input: "http://www.google.com",
      },
    },
    properties: {
      buttonColor: "#D5D42",
      buttonTextColor: "#FFFFFF",
      borderRadius: "5",
    },
    marginTop: "15",
    marginBottom: "15",
    marginLeft: "15",
    marginRight: "15",
    mobile: true,
    desktop: false,
  },
  divider: {
    style: "1px solid #D7D7D7",
    background: null,
    verticalMargin: "15",
    horizontalMargin: "0",
    mobile: true,
    desktop: false,
  },
  spacer: {
    background: null,
    height: "15",
    mobile: true,
    desktop: false,
  },
  video: {
    properties: {
      url: null,
      text: "Alt text",
    },
    imageSize: "300",
    margin: "15",
    mobile: true,
    desktop: false,
  },
};

const componentsReducer = (
  state = componentsReducerDefaultState,
  { type, activeContent, activeSubcontent, payload, block, prop }
) => {
  switch (type) {
    case "SET_INACTIVE_CONTENT":
      let contents = state.contents.slice();
      contents = state.contents.map((content) => {
        content.active = false;
        return content;
      });
      return { ...state, contents };
    case "SET_ACTIVE_CONTENT":
      var existingContents = state.contents.slice();
      existingContents[activeContent].active = true;
      return { ...state, existingContents };
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
      var existingContents = state.contents.slice();
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
      state.contents.slice().map((content) => {
        if (content.active) content.columns.pop();
        return content;
      });
    case "INSERT_CONTENT_ABOVE":
      var existingContents = state.contents.slice();
      var existingColumn =
        existingContents[payload.index].columns[payload.column];
      existingColumn.rows.splice(payload.row - 1, 0, {
        active: true,
        content: payload.content.text,
        component: payload.content.component,
        value: payload.content.value,
      });
      return { ...state, content: existingContents };
    case "INSERT_CONTENT":
      var existingContents = state.contents.slice();
      existingContents[payload.index].columns[payload.column].rows[
        payload.row
      ] = {
        active: true,
        content: payload.content.text,
        component: payload.content.component,
        value: payload.content.value,
      };
      return { ...state, content: existingContents };
    case "INSERT_CONTENT_BELOW":
      var existingContents = state.contents.slice();
      existingContents[payload.index].columns[payload.column].rows[
        payload.row
      ] = {
        active: true,
        content: payload.content.text,
        component: payload.content.component,
        value: payload.content.value,
      };
      return { ...state, content: existingContents };
    default:
      return state;
  }
};

export default componentsReducer;
