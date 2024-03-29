import React, { useEffect, useState } from "react";
import MovieCard from "../../../components/MovieCard";
import TopMoviesHeader from "./TopMoviesHeader";
import {
  Center,
  GridItem,
  SimpleGrid,
  Spinner,
  VStack,
} from "@chakra-ui/react";

const TopMoviesLanguage = ({ language }) => {
  const [movies, setMovies] = useState([]);
  const [page] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchMovies();
  }, [language]);

  const fetchMovies = async () => {
    let currentPage = 1;
    let languageMovies = [];
    
    while (languageMovies.length < 6) {
      const response = await fetch(`https://yts.mx/api/v2/list_movies.json?&limit=50&page=${currentPage}`);
      const data = await response.json();
      const fetchedMovies = data.data.movies.filter(movie => movie.language === language);
      languageMovies = [...languageMovies, ...fetchedMovies];
      currentPage++;
    }

    setMovies(languageMovies.slice(0, 6));
    setIsLoading(false);
  };

  return (
    <VStack py={6}>
      <TopMoviesHeader language={language} />
      <SimpleGrid
        w="full"
        columns={{ base: 1, xs: 2, sm: 3 }}
        row={2}
        spacing={6}
      >
        {movies.map((val, key) => (
          <GridItem key={key}>
            <MovieCard
              img={val.medium_cover_image}
              title={val.title_english}
              year={val.year}
              isLoading={isLoading}
              rating={val.rating}
              id={val.id}
            />
          </GridItem>
        ))}
        {isLoading && (
          <GridItem as={Center} colSpan={3}>
            <Spinner />
          </GridItem>
        )}
        {!isLoading && movies.length === 0 && (
          <GridItem as={Center} colSpan={3}>
            No movies found for the selected language.
          </GridItem>
        )}
      </SimpleGrid>
    </VStack>
  );
};

export default TopMoviesLanguage;
