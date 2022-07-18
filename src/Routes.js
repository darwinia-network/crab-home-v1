import React from "react";
import { Route, Switch } from "react-router-dom";
import { asyncComponent } from "./components/AsyncComponent";
const AsyncHome = asyncComponent(import("./page/Home"));
const AsyncEconomic = asyncComponent(import("./page/Economic"));
const AsyncPlo = asyncComponent(import("./page/Plo"));
const AsyncGrants = asyncComponent(import("./page/Grants"));
const AsyncNotFound = asyncComponent(import("./page/NotFound"));
const AsyncPloContribute = asyncComponent(import("./page/PloContribute"));

export const prefix = "/crab-home-v1";

export default function router() {
  return (
    <Switch>
      <Route exact component={AsyncHome} path={`${prefix}/`} />
      <Route exact component={AsyncEconomic} path={`${prefix}/economic`} />
      <Route exact component={AsyncPlo} path={`${prefix}/plo`} />
      <Route exact component={AsyncGrants} path={`${prefix}/grants`} />
      <Route exact component={AsyncPloContribute} path={`${prefix}/plo_contribute`} />
      <Route component={AsyncNotFound} />
    </Switch>
  );
}
