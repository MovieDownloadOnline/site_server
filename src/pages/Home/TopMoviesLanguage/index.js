import React, { useEffect, useState } from "react";
import MovieCard from "../../../components/MovieCard";
import TopMoviesHeader from "./TopMoviesHeader";
import { Center, GridItem, SimpleGrid, Spinner, VStack } from "@chakra-ui/react";

const TopMoviesLanguage = ({ language }) => {
  const [page, setPage] = useState(1);
  const [lastpage, setLastPage] = useState(1);
  const [currentPage, setcurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, [page]); // Fetch movies whenever currentPage changes

  const fetchMovies = async () => {
    setIsLoading(true);
    let fetchedMovies = [];
    let currentPage_ = currentPage;
    // Keep fetching until we have enough movies or reach the end
    while (fetchedMovies.length < 6) {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?sort_by=year&limit=50&page=${currentPage_}`
      );
      const data = await response.json();
      const filteredMovies = data.data.movies.filter(
        (movie) => movie.language === language
      );
      fetchedMovies = fetchedMovies.concat(filteredMovies);

      if (fetchedMovies.length == 6)
      {
        break;
      }

      if (lastpage <= page)
      {
        console.log("going forward");
        currentPage_++;
      }
      else
      {
        console.log("going back");
        currentPage_--;
      }
      
    }
    // console.log("Current Page :" + currentPage_ + " Page :" + page + " LastPage : " + lastpage + " LastCurrentPage :" +lastcurrentPage)
    setcurrentPage(currentPage_);
    setLastPage(page);
    setMovies(fetchedMovies.slice(0, 6)); // Take the first 6 movies
    setIsLoading(false);
  };



  return (
    <VStack py={6}>
      <TopMoviesHeader
        setPage={setPage}
        page={page}
        setIsLoading={setIsLoading}
        language={language}
      />
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
              slug={val.slug}
            />
          </GridItem>
        ))}
        {isLoading && (
          <GridItem as={Center} colSpan={3}>
            <Spinner />
          </GridItem>
        )}
      </SimpleGrid>
    </VStack>
  );
};

export default TopMoviesLanguage;
