const structureReducerDefaultState = {
  columns: 1,
  selectedColumn: 1,
  verticalPadding: "10",
  backgroundColor: "#D7D7D7",
  mobileStack: false,
  independentBorders: true,
  border: "1px solid #D7D7D7",
  borderTop: "1px solid #D7D7D7",
  borderBottom: "1px solid #D7D7D7",
  borderLeft: "1px solid #D7D7D7",
  borderRight: "1px solid #D7D7D7",
  backgroundImage: null,
  columnProperties: [
    {
      backgroundColor: "#d7d7d7",
      borderRadius: "15px",
      marginTop: "15px",
      marginBottom: "15px",
      marginLeft: "15px",
      marginRight: "15px",
      border: "1px solid #d7d7d7",
      borderTop: "1px solid #d7d7d7",
      borderBottom: "1px solid #d7d7d7",
      borderLeft: "1px solid #d7d7d7",
      borderRight: "1px solid #d7d7d7",
      independentBorders: true,
    },
    {
      backgroundColor: "#d7d7d7",
      borderRadius: "15px",
      marginTop: "15px",
      marginBottom: "15px",
      marginLeft: "15px",
      marginRight: "15px",
      border: "1px solid #d7d7d7",
      borderTop: "1px solid #d7d7d7",
      borderBottom: "1px solid #d7d7d7",
      borderLeft: "1px solid #d7d7d7",
      borderRight: "1px solid #d7d7d7",
      independentBorders: true,
    },
    {
      backgroundColor: "#d7d7d7",
      borderRadius: "15px",
      marginTop: "15px",
      marginBottom: "15px",
      marginLeft: "15px",
      marginRight: "15px",
      border: "1px solid #d7d7d7",
      borderTop: "1px solid #d7d7d7",
      borderBottom: "1px solid #d7d7d7",
      borderLeft: "1px solid #d7d7d7",
      borderRight: "1px solid #d7d7d7",
      independentBorders: true,
    },
    {
      backgroundColor: "#d7d7d7",
      borderRadius: "15px",
      marginTop: "15px",
      marginBottom: "15px",
      marginLeft: "15px",
      marginRight: "15px",
      border: "1px solid #d7d7d7",
      borderTop: "1px solid #d7d7d7",
      borderBottom: "1px solid #d7d7d7",
      borderLeft: "1px solid #d7d7d7",
      borderRight: "1px solid #d7d7d7",
      independentBorders: true,
    },
  ],
};

const structureReducer = (
  state = structureReducerDefaultState,
  { type, payload }
) => {
  switch (type) {
    case "CHANGE_COLUMNS":
      return { ...state, columns: state.columns + payload };
    case "CHANGE_PADDING":
      return {
        ...state,
        verticalPadding: `${
          parseInt(state.verticalPadding.split("px")[0]) + payload
        }`,
      };
    case "SET_INDEPENDENT_BORDER":
      return { ...state, independentBorders: !state.independentBorders };
    case "SET_MOBILE_STACK":
      return { ...state, mobileStack: !state.mobileStack };
    case "SET_SELECTED_COLUMN":
      return { ...state, selectedColumn: payload };
    default:
      return state;
  }
};

export default structureReducer;
