import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Routers/Routers";
import "./CSS/index.css";
import { Provider } from "react-redux";
import * as store from "./Store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store.default}>
    <AppRouter />
  </Provider>
);
