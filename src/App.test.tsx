import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("element created", () => {
  const div: HTMLDivElement = document.createElement("div");

  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
