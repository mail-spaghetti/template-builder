import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import ScrollTop from "./utils/ScrollTop";

import { Home as HomeView, Header as HeaderView } from "./views";

const AppRoutes = () => (
  <Router>
    <HeaderView />
    <ScrollTop />
    <Switch>
      <Route path="/" component={HomeView} exact={true} />
    </Switch>
  </Router>
);

export default AppRoutes;
