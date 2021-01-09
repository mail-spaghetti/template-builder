const settingsReducerDefaultState = {
  height: "500px",
  width: "600px",
  backgroundColor: "#D7D7D7",
  buttonColor: "#D54D42",
  linkColor: "#0361EF",
  heading1: {
    fontColor: "#D54D42",
    fontSize: "22px",
    fontWeight: "regular",
    fontFamily: "Roboto",
    justifyContent: null,
  },
  heading2: {
    fontColor: "#000000",
    fontSize: "17px",
    fontWeight: "regular",
    fontFamily: "Roboto",
    justifyContent: null,
  },
  heading3: {
    fontColor: "#CCC",
    fontSize: "13px",
    fontWeight: "regular",
    fontFamily: "Roboto",
    justifyContent: null,
  },
  paragraph: {
    fontColor: "#2c2c2c",
    fontSize: "13px",
    fontWeight: "regular",
    fontFamily: "Roboto",
    justifyContent: null,
  },
  attachments: true,
  attachmentRange: 4,
  attachmentType: {
    pdf: true,
    png: false,
    jpeg: false,
  },
};

const settingsReducer = (
  state = settingsReducerDefaultState,
  { type, newSetting }
) => {
  switch (type) {
    default:
      return state;
  }
};

export default settingsReducer;