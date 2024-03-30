import React, { useState } from "react";
import { Flex, Heading, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => {
  const [formData, setFormData] = useState({
    country: "",
    url: window.location.href,
    issueTime: new Date().toLocaleString(),
    issueDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { country, url, issueTime, issueDetails } = formData;

  const mailtoLink = `mailto:movie.download.on@gmail.com?subject=WEBSITE%20ISSUE&body=Country:%20${country}%0D%0AURL%20with%20Issue:%20${url}%0D%0ATime%20of%20Issue:%20${issueTime}%0D%0AIssue%20Details:%20${issueDetails}`;

  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
    >
      <Heading as="h1" size="xl" mb={4}>
        Uh-oh! You've wandered into the void.
      </Heading>
      <Text fontSize="lg" mb={6}>
        The page you're searching for seems to have taken an unexpected vacation.
        But don't worry, we've got your back!
      </Text>
      <Text mb={6}>
        You can either head back to <RouterLink to="/">safety</RouterLink> or{" "}
        <Link href={mailtoLink} textDecoration="underline" _hover={{ textDecoration: "underline" }}>report the issue</Link>{" "}
        if this keeps happening.
      </Text>
      <Text mb={6} fontSize="sm" color="gray.600">
        Note: Reporting the issue is optional. Our team is working to bring everything back online shortly.
      </Text>
    </Flex>
  );
};

export default NotFound;
