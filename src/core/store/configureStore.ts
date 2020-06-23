import { createStore, applyMiddleware, Store } from "redux";
import { createEpicMiddleware } from "redux-observable";

import reducer from "./reducers";
import epics from "../features/Dashboard/dashboard.epics";

const configureStore: () => Store = () => {
  const epicMiddleware = createEpicMiddleware();
  const store: Store = createStore(reducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(epics);

  return store;
};

export default configureStore;
