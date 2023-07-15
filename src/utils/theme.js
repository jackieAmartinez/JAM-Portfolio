import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#ffecd1",
    200: "#824c71",
    300: "#4a2545",
    400: "#90aa86",
    500: "#000001",
    // 600: "#0A864F",
    // 700: "#086F42",
    // 800: "#075C37",
    900: "#da4167",
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;