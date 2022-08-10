import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";
import { ChakraProvider } from "@chakra-ui/react";

// import reportWebVitals from "./reportWebVitals";

// interface IContainer {
//   container: ;
// }

const container = document.getElementById("root") as HTMLElement;
// const root = ReactDOM.createRoot(container);
const root = createRoot(container);
root.render(
  // <StrictMode> //duplicava renderização
  <BrowserRouter>
    <ChakraProvider>
      <Providers>
        <App />
      </Providers>
    </ChakraProvider>
  </BrowserRouter>
  // </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
