import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { SWRConfig } from "swr";
import { Loading } from "./components/Loading";
import routes, { renderRoutes } from "./routes";

const useStyles = makeStyles((theme) => ({
  appBackground: {
    backgroundColor: theme.palette.background.default,
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.appBackground}>
      <Suspense fallback={<Loading />}>
        <SWRConfig
          value={{
            fetcher: (url) => axios.get(`/api${ url}`).then((r) => r.data),
          }}
        >
          <Switch>{renderRoutes(routes)}</Switch>
        </SWRConfig>
      </Suspense>
    </div>
  );
};

export default App;
