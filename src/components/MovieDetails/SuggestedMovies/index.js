import { GridItem, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useAPIrequest from "../../../adapters/useAPIrequest";
import MovieCard from "./../../MovieCard";

const SuggestedMovies = ({ id }) => {
  const { response } = useAPIrequest(
    "https://yts.mx/api/v2/movie_suggestions.json?movie_id=" + id,
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (response && response !== null) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [response]);

  useEffect(() => {
    setIsLoading(true);
  }, [id]);

  return (
    <SimpleGrid columns={{ base: 1, xs: 2, md: 4 }} w="full" spacing={3}>
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
                slug={val["slug"]}
              />
            </GridItem>
          );
        })}
    </SimpleGrid>
  );
};

export default SuggestedMovies;
