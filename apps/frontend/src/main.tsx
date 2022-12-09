import * as React from "react";
// @ts-ignore
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import App from "./App";

const queryClient = new QueryClient();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
