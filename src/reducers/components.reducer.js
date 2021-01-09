const componentsReducerDefaultState = {
  activeContent: 1,
  component: null,
  text: {
    marginTop: "15px",
    marginBottom: "15px",
    marginLeft: "15px",
    marginRight: "15px",
    mobile: false,
    desktop: true,
  },
  image: {
    file: null,
    link: null,
    info: null,
    align: "center",
    marginTop: "15px",
    marginBottom: "15px",
    marginLeft: "15px",
    marginRight: "15px",
    mobile: false,
    desktop: true,
  },
};

const componentsReducer = (
  state = componentsReducerDefaultState,
  { type, activeContent }
) => {
  switch (type) {
    case "SET_ACTIVE_CONTENT":
      return { ...state, activeContent };
    default:
      return state;
  }
};

export default componentsReducer;
