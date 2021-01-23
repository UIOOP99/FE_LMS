import { MuiThemeProvider } from "@material-ui/core/styles";
//@ts-ignore
import * as Theme from "constants/theme";
import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "Scenes/App";
import RTLProvider from "Scenes/components/RTLProvider";
import "styles/global.css";
import { QueryParamProvider } from "use-query-params";

import 'services/mirage';
import moment from 'moment-jalaali';

moment.loadPersian({usePersianDigits: true});

const Main = () => (
  <MuiThemeProvider theme={Theme.theme}>
    <Router >
      <QueryParamProvider ReactRouterRoute={Route}>
        <RTLProvider>
          <App />
        </RTLProvider>
      </QueryParamProvider>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<Main />, document.querySelector("#root"));
