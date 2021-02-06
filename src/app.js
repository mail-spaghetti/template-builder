import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Routes from "./routes";
import configureStore from "./state/store";
import "./styles/main.scss";

const store = configureStore();

const connectedComponents = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(connectedComponents, document.getElementById("app"));
