import {createTheme} from "react-data-table-component";

export const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "10px", // override the cell padding for head cells
      paddingRight: "10px",
      //   backgroundColor: theme === "dark" ? "#0F172A" : "#F1F5F9",
      fontSize: "16px",
      textTransform: "capitalize",
    },
  },
  cells: {
    style: {
      paddingLeft: "10px", // override the cell padding for data cells
      paddingRight: "10px",
      fontSize: "15px",
      fontWeight: "500",
      fontColor: "#64748B",
      textTransform: "capitalize",
      textAlign: "center",
    },
  },
};
createTheme(
  "solarized",
  {
    text: {
      primary: "#fff",
      secondary: "#64748B",
    },
    background: {
      default: "#020617",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#eee",
    },
    button: {
      default: "#2aa198",
      hover: "rgba(0,0,0,.08)",
      focus: "rgba(255,255,255,.12)",
      disabled: "rgba(255, 255, 255, .34)",
    },
    sortFocus: {
      default: "#2aa198",
    },
  },
  "dark"
);
