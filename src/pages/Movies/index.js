import {
  Heading,
  Divider,
  SimpleGrid,
  GridItem,
  VStack,
  Spacer,
  Button,
  HStack,
  useColorModeValue,
  Center,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAPIrequest from "../../adapters/useAPIrequest";
import MovieCard from "../../components/MovieCard";
import useWidnowLocation from "../../hooks/useWidnowLocation";
import Pagination from "./Pagination";
import SortControls from "./SortControls";

const Movies = () => {
  const { title, type, genreFromURL } = useWidnowLocation();
  const [page, setPage] = useState(1);

  const [quality, setQuality] = useState("all");
  const [genre, setGenre] = useState("all");
  const [orderBy, setOrderBy] = useState("desc");
  const [rating, setRating] = useState(0);

  const { response } = useAPIrequest(
    "https://yts.mx/api/v2/list_movies.json?" +
      (genreFromURL ? "" : "sort_by=" + type + "&") +
      "quality=" +
      quality +
      "&genre=" +
      genre +
      "&minimum_rating=" +
      rating +
      "&order_by=" +
      orderBy +
      "&page=" +
      page,
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (genreFromURL !== null) {
      setGenre(genreFromURL);
    } else {
      setGenre("all");
    }
  }, [genreFromURL]);

  useEffect(() => {
    if (response && response !== null) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [response]);

  useEffect(() => {
    setIsLoading(true);
  }, [quality, genre, orderBy, rating, type]);

  return (
    <VStack
      spacing={6}
      p={{ base: 3, md: 6 }}
      bg={useColorModeValue("gray.300", "gray.700")}
      rounded="xl"
      mb={6}
    >
      <HStack alignSelf="start" w="full">
        <Heading as="h1" fontSize="3xl">
          {title}
        </Heading>
        <Spacer />
        <Button as={Link} to="/" size="sm">
          Back to Home
        </Button>
      </HStack>
      <Divider />
      <SortControls
        displayGenre={!genreFromURL}
        rating={rating}
        setQuality={setQuality}
        setGenre={setGenre}
        setOrderBy={setOrderBy}
        setRating={setRating}
      />
      <SimpleGrid
        w="full"
        columns={{ base: 1, xs: 2, sm: 3, lg: 4 }}
        spacing={{ base: 3, md: 6 }}
      >
        {response &&
          response.data.movies.map((val, key) => {
            return (
              <GridItem key={key}>
                <MovieCard
                  img={val["medium_cover_image"]}
                  title={val["title_english"]}
                  year={val["year"]}
                  isLoading={isLoading}
                  rating={val["rating"]}
                  id={val["id"]}
                />
              </GridItem>
            );
          })}
        {isLoading && (
          <GridItem as={Center} colSpan={{ xs: 2, sm: 3, xl: 4 }}>
            <Spinner />
          </GridItem>
        )}
      </SimpleGrid>
      {response && (
        <Pagination
          setPage={setPage}
          setIsLoading={setIsLoading}
          page={page}
          limit={response.data.limit}
          movie_count={response.data["movie_count"]}
        />
      )}
    </VStack>
  );
};

export default Movies;
