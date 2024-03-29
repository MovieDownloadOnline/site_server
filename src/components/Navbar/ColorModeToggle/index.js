import { IconButton, useColorMode } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
    />
  );
};

export default ColorModeToggle;
