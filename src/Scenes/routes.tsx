import React, { lazy } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
const TestPage = lazy(() => import("./TestPage"));
const MainPage = lazy(() => import("./MainPage"));

export interface IRoute {
  path?: string | string[];
  component: React.FC<any>;
  exact?: boolean;
  routes?: IRoute[];
  private?: boolean;
  notHaveBaseLayout?: boolean;
  //   toHavePermissions?: TPermissions[];
}

const routes: IRoute[] = [
  {
    path: "/",
    component: MainPage,
    exact: true,
  },
  {
    path: "/test",
    component: TestPage,
  },
];

export const renderRoutes = (routes: IRoute[]) => {
  return routes.map((route, key) => {
    if (route.private) {
      return <PrivateRoute {...route} key={key} />;
    } else {
      return (
        <Route
          key={key}
          {...route}
          component={undefined}
          render={(props) => {
            if (route.notHaveBaseLayout) {
              return (
                <route.component {...props} routes={route.routes} key={key} />
              );
            } else {
              return (
                // <BaseLayout>
                <route.component {...props} routes={route.routes} key={key} />
                // </BaseLayout>
              );
            }
          }}
        />
      );
    }
  });
};
export default routes;
