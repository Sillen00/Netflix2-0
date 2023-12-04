import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { MantineProvider } from "@mantine/core";
import { theme } from "./mantineTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <App />
        </MantineProvider>
    </React.StrictMode>
);
