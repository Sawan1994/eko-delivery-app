import React from "react";
import { Switch, Route } from "react-router";
import GraphDetail from "./GraphDetail";
import RoutePlanner from "./RouteModule/components";

export const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={GraphDetail} />
      <Route exact path="/routePlanner" component={RoutePlanner} />
    </Switch>
  );
};
