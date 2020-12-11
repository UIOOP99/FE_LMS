import { MuiThemeProvider } from "@material-ui/core/styles";
//@ts-ignore
import * as Theme from "constants/theme";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "Scenes/App";
import RTLProvider from "Scenes/components/RTLProvider";
import "styles/global.css";

const Main = () => (
  <MuiThemeProvider theme={Theme.theme}>
    <BrowserRouter>
      <RTLProvider>
        <App />
      </RTLProvider>
    </BrowserRouter>
  </MuiThemeProvider>
);

ReactDOM.render(<Main />, document.querySelector("#root"));
