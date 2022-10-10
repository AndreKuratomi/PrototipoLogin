import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";
import { ChakraProvider } from "@chakra-ui/react";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Providers>
          <App />
        </Providers>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
