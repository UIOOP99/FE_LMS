import axios from "axios";
import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { SWRConfig } from "swr";
import { Loading } from "./components/Loading";
import routes, { renderRoutes } from "./routes";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SWRConfig
        value={{
          fetcher: (url) => axios.get("/api" + url).then((r) => r.data),
        }}
      >
        <Switch>{renderRoutes(routes)}</Switch>
      </SWRConfig>
    </Suspense>
  );
};

export default App;
