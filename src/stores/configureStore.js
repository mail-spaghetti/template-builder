import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import optionsReducer from "../reducers/options.reducer";
import settingsReducer from "../reducers/settings.reducer";
import componentsReducer from "../reducers/components.reducer";
import structureReducer from "../reducers/structure.reducer";

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
