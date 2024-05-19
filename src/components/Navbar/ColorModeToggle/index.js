import { IconButton, useColorMode } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();

  // Ensure the color mode is always set to light on the initial render
  useEffect(() => {
    if (colorMode !== "light") {
      setColorMode("light");
    }
  }, [colorMode, setColorMode]);

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      aria-label="Toggle color mode"
    />
  );
};

export default ColorModeToggle;
