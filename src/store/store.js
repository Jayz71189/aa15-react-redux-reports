import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import reportsReducer from "./reportsReducer";

// const object = initialState.reports;
// const num

const rootReducer = combineReducers({ reports: reportsReducer });

let enhancer;

if (import.meta.env.MODE === "development") {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
      : compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

export const configureStore = (preLoadedState) => {
  return createStore(rootReducer, preLoadedState, enhancer);
};

export default configureStore;
