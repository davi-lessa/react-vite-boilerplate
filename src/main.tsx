import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import { GlobalStyle } from "./GlobalStyle";
import AppRouter from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Profiler onRender={() => null} id="profiler">
      <GlobalStyle />
      <AppRouter />
    </Profiler>
  </React.StrictMode>
);
