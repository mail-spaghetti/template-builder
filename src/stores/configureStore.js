import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import optionsReducer from "../reducers/options.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      option: optionsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk, logger))
  );

  return store;
};
