import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import optionsReducer from "../reducers/optionsReducer";
import settingsReducer from "../reducers/settingsReducer";
import componentsReducer from "../reducers/componentsReducer";
import structureReducer from "../reducers/structureReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      option: optionsReducer,
      component: componentsReducer,
      structure: structureReducer,
      settings: settingsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
