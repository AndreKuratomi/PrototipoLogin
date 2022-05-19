import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";
import { ChakraProvider } from "@chakra-ui/react";

// import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
