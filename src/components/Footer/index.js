import { Center, HStack, Wrap } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import React from "react";
import LogoModeToggle from "../Navbar/LogoModeToggle";
const Footer = () => {
  return (
    <Wrap spacing={2} w="full" justify="center" align="center" mb={5}>
      <Center>
        <HStack as={RouterLink} to="/" fontSize="4xl" maxW="200px">
           <LogoModeToggle />
        </HStack>
      </Center>
    </Wrap>
  );
};

export default Footer;
