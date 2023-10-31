import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Routers/Routers";
import "./CSS/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<AppRouter />);
