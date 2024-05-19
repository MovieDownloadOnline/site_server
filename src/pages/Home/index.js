import {
  Box,
  Button,
  Center,
  GridItem,
  SimpleGrid,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
//import NewRelease from "./NewRelease";
import RecentlyAdded from "./RecentlyAdded";
import TopMovies from "./TopMovies";
import TopMoviesLanguage from "./TopMoviesLanguage";


const Home = () => {
  return (
    <HelmetProvider>
    <SimpleGrid columns={4} row={1} spacing={6} pb={{ base: 0, md: 6 }}>

      <Helmet>
      <title>Movie Download Online - Download Latest Movies for Free</title>
      <meta name="title" content="Movie Download Online - Download Latest Movies for Free" />
      <meta name="keywords" content="free movie download, latest movies, torrents, online streaming, ratings, language, high-quality movies, go movies, yify, yts mx, yes mx, download movies, az movies, atoz movies, yify movies, hd movies 2, yify torrents, yify org, yts movies, yify tv, free movie download sites, free movies download websites, yts film, yts torrent, yts torrents, film free download website, free film download sites, bollywood movies, hindi movies"/>

      <meta name="description" content="Explore a vast collection of latest movies available for free download. Find movies by ratings, language, quality, and more. Download movies using torrents and watch online at Movie Download Online for free." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://moviedownload.online" />
      <meta property="og:title" content="Movie Download Online - Download Latest Movies for Free" />
      <meta property="og:site_name" content="Movie Download Online" />
      <meta property="og:description" content="Explore a vast collection of latest movies available for free download. Find movies by ratings, language, quality, and more. Download movies using torrents and watch online at Movie Download Online for free." />
      <meta property="og:image" content="https://moviedownload.online/cover.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://moviedownload.online" />
      <meta property="twitter:title" content="Movie Download Online - Download Latest Movies for Free" />
      <meta property="twitter:description" content="Explore a vast collection of latest movies available for free download. Find movies by ratings, language, quality, and more. Download movies using torrents and watch online at Movie Download Online for free." />
      <meta property="twitter:image" content="https://moviedownload.online/cover.png" />
      </Helmet>

      <GridItem colSpan={1} display={{ base: "none", lg: "block" }}>
        <RecentlyAdded />
      </GridItem>
      <GridItem
        colSpan={{ base: 4, lg: 3 }}
        bg={useColorModeValue("gray.300", "gray.700")}
        p={{ base: 3, md: 6 }}
        rounded="xl"
      >
        <Heading as="h1" size='xs' align="center">
        Access the latest films for free! Browse top-rated, multi-language, high-quality selections. Get instant downloads and streaming in 1080p and 4k qualities. We have all Hollywood and Bollywood (Hindi) Movies.
        </Heading>
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
    </HelmetProvider>
  );
};

export default Home;
