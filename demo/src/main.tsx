import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { V2 } from "jeikei-design-system";

const { SystemProvider } = V2;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SystemProvider>
      <App />
    </SystemProvider>
  </React.StrictMode>
);
