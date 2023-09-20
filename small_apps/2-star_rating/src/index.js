import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import AppColor from "./components/AppColor";

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootColor = ReactDOM.createRoot(document.getElementById("rootColor"));
rootColor.render(
  <React.StrictMode>
    <AppColor />
  </React.StrictMode>
);