const componentsReducerDefaultState = {
  activeContent: 1,
  component: null,
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
    sourceURL: null,
    properties: {
      url: null,
      text: "Alt text",
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
  { type, activeContent, payload }
) => {
  switch (type) {
    case "SET_ACTIVE_CONTENT":
      return { ...state, activeContent };
    case "SET_TEXT_MARGIN_TOP":
      return {
        ...state,
        text: {
          ...state.text,
          marginTop: (parseInt(state.text.marginTop) + payload).toString(),
        },
      };
    case "SET_TEXT_MARGIN_BOTTOM":
      return {
        ...state,
        text: {
          ...state.text,
          marginBottom: (
            parseInt(state.text.marginBottom) + payload
          ).toString(),
        },
      };
    case "SET_TEXT_MARGIN_LEFT":
      return {
        ...state,
        text: {
          ...state.text,
          marginLeft: (parseInt(state.text.marginLeft) + payload).toString(),
        },
      };
    case "SET_TEXT_MARGIN_RIGHT":
      return {
        ...state,
        text: {
          ...state.text,
          marginRight: (parseInt(state.text.marginRight) + payload).toString(),
        },
      };
    case "SHOW_TEXT_DESKTOP":
      return {
        ...state,
        text: {
          ...state.text,
          desktop: !state.text.desktop,
        },
      };
    case "SHOW_TEXT_MOBILE":
      return {
        ...state,
        text: {
          ...state.text,
          mobile: !state.text.mobile,
        },
      };
    default:
      return state;
  }
};

export default componentsReducer;
