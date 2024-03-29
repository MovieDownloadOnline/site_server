import { Badge, Heading, HStack, Button, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const ReleaseHeader = () => {
  return (
    <HStack spacing={3} w="full" align="center" pb={{ base: 2, md: 6 }}>
      <Heading as="h1" fontSize="3xl">
        New Releases
      </Heading>
      <Badge rounded="lg" colorScheme="green" fontSize="xl">
        New
      </Badge>

      <Spacer />
      <Button as={Link} to="/movies/new" size="sm">
        See All
      </Button>
    </HStack>
  );
};

export default ReleaseHeader;
