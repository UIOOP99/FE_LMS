import { MuiThemeProvider } from "@material-ui/core/styles";
//@ts-ignore
import * as Theme from "constants/theme";
import moment from "moment-jalaali";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "Scenes/App";
import RTLProvider from "Scenes/components/RTLProvider";
import UserProvider from "services/Contexts/UserContext/UserProvider";
import "services/mirage";
import "styles/global.css";
import { QueryParamProvider } from "use-query-params";

moment.loadPersian({ usePersianDigits: true });

const Main = () => (
  <MuiThemeProvider theme={Theme.theme}>
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <RTLProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </RTLProvider>
      </QueryParamProvider>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<Main />, document.querySelector("#root"));
