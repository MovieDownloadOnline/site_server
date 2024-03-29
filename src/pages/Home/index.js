import {
  Box,
  Button,
  Center,
  GridItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
//import NewRelease from "./NewRelease";
import RecentlyAdded from "./RecentlyAdded";
import TopMovies from "./TopMovies";
import TopMoviesLanguage from "./TopMoviesLanguage";


const Home = () => {
  return (
    <SimpleGrid columns={4} row={1} spacing={6} pb={{ base: 0, md: 6 }}>
      <GridItem colSpan={1} display={{ base: "none", lg: "block" }}>
        <RecentlyAdded />
      </GridItem>
      <GridItem
        colSpan={{ base: 4, lg: 3 }}
        bg={useColorModeValue("gray.300", "gray.700")}
        p={{ base: 3, md: 6 }}
        rounded="xl"
      >

        {//<NewRelease /> 
        }
        <Box display={{ base: "block", lg: "none" }}>
          <RecentlyAdded />
        </Box>
        <TopMovies type="download_count" />
        <TopMoviesLanguage language="hi" />
        <TopMoviesLanguage language="fr" />
        {
        //<TopMovies type="like_count" />
        //<TopMovies type="download_count" />
        }
        <Center w="full">
          <Button as={Link} to="/movies/all" colorScheme="green">
            Discover More Movies
          </Button>
        </Center>
      </GridItem>
    </SimpleGrid>
  );
};

export default Home;
