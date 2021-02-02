export const FONT_STYLES = [
  {
    text: "B",
    style: {
      fontStyle: "normal",
      fontFamily: "serif",
      fontWeight: "bold",
    },
  },
  {
    text: "I",
    style: {
      fontStyle: "italic",
      fontFamily: "serif",
      fontWeight: "bold",
    },
  },
  {
    text: "U",
    style: {
      fontStyle: "normal",
      fontFamily: "serif",
      fontWeight: "bold",
      textDecoration: "underline",
    },
  },
];

export const INITIAL_DRAFT_CONTENT = {
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
};

export const COMPONENT_INITIAL_STATE = {
  activeContent: null,
  hoverContent: null,
  hoverSubcontent: {
    rowIndex: null,
    columnIndex: null,
  },
  activeSubcontent: null,
  activeRow: {
    rowIndex: null,
    columnIndex: null,
  },
  component: null,
  contents: [JSON.parse(JSON.stringify(INITIAL_DRAFT_CONTENT))],
  text: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
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
