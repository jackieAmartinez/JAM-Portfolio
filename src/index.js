import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ChakraProvider>
      <App />
    </ChakraProvider>
);

const colors = {
  brand: {
    50: "#001524",
    100: "#15616d",
    200: "#ffecd1",
    300: "#ff7d00",
    400: "#78290f",
    // 500: "#4d5499",
    // 600: "#3c4178",
    // 700: "#2a2f57",
    // 800: "#181c37",
    // 900: "#080819"
  }
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const theme = extendTheme({ colors, config });

