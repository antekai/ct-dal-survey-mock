import React from "react";
import { Route, Switch } from "react-router-dom";
import { withFormSurvey } from "../components/Survey";

export const AppRoutes = () => (
  <Switch>
    <Route exact path="/" render={() => <div>home</div>} />
    <Route exact path="/surveys" render={() => <div>surveys</div>} />
    <Route exact path="/surveys/:id" component={withFormSurvey} />
    <Route render={() => <div>404 error</div>} />
  </Switch>
);
