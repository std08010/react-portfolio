import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import AppColor from "./components/AppColor";
import AppColorContext from "./components/AppColorContext";
import AppColorContextWithState from "./components/AppColorContextWithState";
import AppColorContextWithStateCustomHook from "./components/AppColorContextWithStateCustomHook";

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

const rootColorContext = ReactDOM.createRoot(document.getElementById("rootColorContext"));
rootColorContext.render(
  <React.StrictMode>
    <AppColorContext />
  </React.StrictMode>
);

const rootColorContextWithState = ReactDOM.createRoot(document.getElementById("rootColorContextWithState"));
rootColorContextWithState.render(
  <React.StrictMode>
    <AppColorContextWithState />
  </React.StrictMode>
);

const rootColorContextWithStateCustomHook = ReactDOM.createRoot(
  document.getElementById("rootColorContextWithStateCustomHook")
);
rootColorContextWithStateCustomHook.render(
  <React.StrictMode>
    <AppColorContextWithStateCustomHook />
  </React.StrictMode>
);