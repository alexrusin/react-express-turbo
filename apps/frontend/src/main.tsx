import * as React from "react";
// @ts-ignore
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
