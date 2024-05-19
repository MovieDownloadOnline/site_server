import { extendTheme } from "@chakra-ui/react";

import breakpoints from "./breakpoints";
import styles from "./styles";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const overrides = extendTheme({
  config,
  breakpoints,
  styles,
});

export default overrides;
