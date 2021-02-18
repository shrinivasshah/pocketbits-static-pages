import React from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#56C3A4",
    },
    secondary: {
      main: "#ffffff",
    },
    typography: {
      fontFamily: ['"Poppins"', 'sans-serif'].join(','),
    },
    // background: {
    //   default: "#F7F7F7",
    // },
    // type: modeL.dark ? "dark" : "light",
  },
  status: {
    danger: "orange",
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
