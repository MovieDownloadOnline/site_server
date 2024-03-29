import {
  Stack,
  Heading,
  HStack,
  IconButton,
  Button,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import React from "react";
import { Link } from "react-router-dom";

const TopMoviesHeader = ({ setPage, page, setIsLoading, language }) => {
  const handlePageNav = (dir) => {
    setIsLoading(true);
    setPage(page + dir);
  };

  return (
    <Stack
      direction={{ base: "column", sm: "row" }}
      w="full"
      align={{ base: "start", sm: "center" }}
      py={6}
      spacing={6}
    >
      <Heading whiteSpace="nowrap" as="h2" fontSize="2xl">
        Top{" "}
        {language === "hi"
          ? "Hindi"
          : language === "fr"
          ? "French"
          : "English"}
      </Heading>
      <Divider w="full" />
      <HStack w={{ base: "full", sm: "min" }}>
        <HStack spacing={0}>
          {[...Array(6)].map((e, i) => (
            <GoPrimitiveDot key={i} opacity={i + 1 === page ? 1 : 0.3} />
          ))}
        </HStack>
        <Spacer display={{ base: "block", sm: "none" }} />
        <IconButton
          onClick={() => handlePageNav(-1)}
          isDisabled={page === 0 ? true : false}
          size="sm"
          icon={<FaArrowLeft />}
        />

        {page < 6 && (
          <IconButton
            onClick={() => handlePageNav(+1)}
            size="sm"
            icon={<FaArrowRight />}
          />
        )}

        {page === 6 && (
          <Button
            as={Link}
            to={
              "/movies/" +
              (language === "hi"
                ? "Hindi"
                : language === "fr"
                ? "French"
                : "English")
            }
            size="sm"
            rightIcon={<FaArrowRight />}
          >
            See all
          </Button>
        )}
      </HStack>
    </Stack>
  );
};

export default TopMoviesHeader;
