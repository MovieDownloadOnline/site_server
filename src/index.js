// import React from "react";
// import ReactDOM from "react-dom";
// import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
// import theme from "./theme";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider resetCSS={true} theme={theme}>
//       <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById("root"),
// );

import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import App from "./App";

// Check if we're running in the browser or in a pre-rendering environment
if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
  // For production builds in a browser
  ReactDOM.hydrate(
    <React.StrictMode>
      <ChakraProvider resetCSS={true} theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
} else {
  // For pre-rendering
  ReactDOM.render(
    <React.StrictMode>
      <ChakraProvider resetCSS={true} theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
