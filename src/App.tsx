import React from "react";
import { Provider } from "react-redux";
import configureStore from "./core/store/configureStore";
import Dashboard from "./core/features/Dashboard/components/Dashboard";

const App: React.FunctionComponent = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

export default App;
