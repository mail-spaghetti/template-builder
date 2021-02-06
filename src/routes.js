import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import { Home as HomeView, Header as HeaderView } from "./pages";

const Routes = () => (
  <Router>
    <HeaderView />
    <Switch>
      <Route path="/" component={HomeView} exact={true} />
    </Switch>
  </Router>
);

export default Routes;
