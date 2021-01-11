const structureReducerDefaultState = {
  columns: 1,
  selectedColumn: 1,
  verticalPadding: "10px",
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
    default:
      return state;
  }
};

export default structureReducer;
