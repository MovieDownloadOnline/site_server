import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Image,
  Heading,
  HStack,
  VStack,
  Text,
  Divider,
  Badge,
  Box,
  useColorModeValue,
  Wrap,
  Center,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import useAPIrequest from "../../adapters/useAPIrequest";
import { AiFillLike, AiFillStar } from "react-icons/ai";
import { FaDownload, FaLanguage } from "react-icons/fa";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { IoTime } from "react-icons/io5";
import Trailer from "./Trailer";
import SuggestedMovies from "./SuggestedMovies";
import MagnetUrl from "./MagnetUrl";
import ReactGA from "react-ga4";

const MovieDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { movie_id } = useParams();
  const [id, setId] = useState(null);
  const [imdbCode, setImdbCode] = useState(null);
  const [imdb, setImdb] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (movie_id) {
      const split = movie_id.split("-").slice(-1);
      setId(split);
    }
  }, [movie_id]);

  useEffect(() => {
    if (id) {
      onOpen();
    }
  }, [id, onOpen]);

  const handleClose = () => {
    history.replace({ search: "" });
    history.goBack();
    onClose();
  };

  const { response } = useAPIrequest(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);

  const starColor = useColorModeValue("green.500", "green.200");

  useEffect(() => {
    if (response && response !== null) {
      setImdbCode(response.data.movie["imdb_code"]);
      ReactGA.event({
        category: "Movie",
        action: "Viewed",
        label: response.data.movie["title_long"]
      });
      setIsLoading(false);
      setError(null);
    } else {
      setError("Failed to fetch movie details");
    }
  }, [response, history]);

  useEffect(() => {
    if (imdbCode) {
      (async () => {
        setIsLoading(true);
        try {
          const imdbResponse = await fetch(`https://www.omdbapi.com/?apikey=ba1f4581&i=${imdbCode}`);
          if (imdbResponse.ok) {
            const imdbData = await imdbResponse.json();
            if (imdbData.Response === "True") {
              setImdb(imdbData);
            } else {
              throw new Error(imdbData.Error || "Failed to fetch IMDB details");
            }
          } else {
            throw new Error("Failed to fetch IMDB details");
          }
        } catch (err) {
          console.error(err);
          setError(err.message);
         }
         setIsLoading(false);
         setError(null);
      })();
    }
  }, [imdbCode, history]);

  useEffect(() => {
    let timer;
    if (error && !isLoading) {
      timer = setTimeout(() => {
        history.push('/404');
      }, 5000); // wait for 5 seconds before navigating to 404
    }
    return () => clearTimeout(timer);
  }, [error, isLoading, history]);


  return (
    <HelmetProvider>
      <Modal isOpen={isOpen} onClose={handleClose} size="6xl">
        <ModalOverlay />
        <ModalContent mx={6}>
          <ModalHeader pb={6} />
          <ModalCloseButton />
          <ModalBody pb={3}>
            {response && response.data.movie["id"] !== 0 && (
              <VStack spacing={6}>
                {/* Dynamic Metatag */}
                <Helmet>
                  <title>{response.data.movie["title_long"]}</title>
                  <meta name="title" content={response.data.movie["title_long"]} />
                  <meta name="keywords" content={
                    response.data.movie["title"] + ", " +
                    (response.data.movie["genres"] && response.data.movie["genres"].length > 0 ? response.data.movie["genres"].toString() + ", " : "") +
                    (imdb && imdb["Response"] === "True" ? (
                      (imdb["Actors"] ? imdb["Actors"].toString() + ", " : "") +
                      (imdb["Director"] ? imdb["Director"].toString() + ", " : "") +
                      (imdb["Writer"] ? imdb["Writer"].toString() + ", " : "")
                    ) : "") +
                    "free movie download, latest movies, torrents, online streaming, ratings, language, high-quality movies, go movies, yify, yts mx, yes mx, download movies, az movies, atoz movies, yify movies, hd movies 2, yify torrents, yify org, yts movies, yify tv, free movie download sites, free movies download websites, yts film, yts torrent, yts torrents, film free download website, free film download sites, bollywood movies, hindi movies"
                  } />
                  <meta name="description" content={response.data.movie["description_intro"]} />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content={"https://moviedownload.online/movie/" + movie_id} />
                  <meta property="og:title" content={response.data.movie["title_long"]} />
                  <meta property="og:site_name" content={response.data.movie["title_long"]} />
                  <meta property="og:description" content={response.data.movie["description_intro"]} />
                  {/* <meta property="og:image" content={response.data.movie["medium_cover_image"]} /> */}
                  <meta property="og:image" content={(imdb && imdb["Response"] === "True" && imdb["Poster"] ? imdb["Poster"] : response.data.movie["medium_cover_image"])} />
                  <meta property="twitter:card" content={response.data.movie["medium_cover_image"]} />
                  <meta property="twitter:url" content={"https://moviedownload.online/movie/" + movie_id} />
                  <meta property="twitter:title" content={response.data.movie["title_long"]} />
                  <meta property="twitter:description" content={response.data.movie["description_intro"]} />
                  {/* <meta property="twitter:image" content={response.data.movie["medium_cover_image"]} /> */}
                  <meta property="twitter:image" content={(imdb && imdb["Response"] === "True" && imdb["Poster"] ? imdb["Poster"] : response.data.movie["medium_cover_image"])} />
                </Helmet>
                {/* Dynamic Metatag end */}

                <Stack direction={{ base: "column", sm: "row" }} w="full" align="start" spacing={6}>
                  <Image width={{ base: "100%", sm: "200px" }} rounded="md" src={response.data.movie["large_cover_image"]}></Image>
                  <VStack spacing={3} w="full" align="start">
                    <Heading as="h1" align="left">{response.data.movie["title_long"]}</Heading>
                    <Divider />
                    {response.data.movie["genres"] && response.data.movie["genres"].length > 0 && (
                      <Wrap spacing={3} wrap="wrap" justify="flex-start" w="full">
                        {response.data.movie["genres"].map((val, key) => (
                          <Badge key={key}>{val}</Badge>
                        ))}
                      </Wrap>
                    )}
                    <HStack spacing={3} justify="flex-start" w="full">
                      <Box as={AiFillStar} fontSize="20px" color={starColor} />
                      <Text whiteSpace="nowrap" display="flex" dir="row" fontWeight="semibold">
                        {response.data.movie["rating"] > 0
                          ? response.data.movie["rating"].toFixed(1) + " / 10"
                          : "No rating"}
                      </Text>
                    </HStack>
                    <HStack spacing={3} justify="flex-start" w="full">
                      <Box as={AiFillLike} fontSize="20px" color={starColor} />
                      <Text whiteSpace="nowrap" display="flex" dir="row" fontWeight="semibold">
                        {response.data.movie["like_count"] > 0
                          ? response.data.movie["like_count"].toLocaleString()
                          : "No Likes"}
                      </Text>
                    </HStack>
                    <HStack spacing={3} justify="flex-start" w="full">
                      <Box as={FaDownload} fontSize="20px" color={starColor} />
                      <Text whiteSpace="nowrap" display="flex" dir="row" fontWeight="semibold">
                        {response.data.movie["download_count"] > 0
                          ? response.data.movie["download_count"].toLocaleString()
                          : "No Downloads"}
                      </Text>
                    </HStack>
                    <HStack spacing={3} justify="flex-start" w="full">
                      <Box as={FaLanguage} fontSize="20px" color={starColor} />
                      <Text whiteSpace="nowrap" display="flex" dir="row" fontWeight="semibold">
                        {response.data.movie["language"] !== ""
                          ? response.data.movie["language"].toUpperCase()
                          : "Unknown"}
                      </Text>
                    </HStack>
                    <HStack spacing={3} justify="flex-start" w="full">
                      <Box as={IoTime} fontSize="20px" color={starColor} />
                      <Text whiteSpace="nowrap" display="flex" dir="row" fontWeight="semibold">
                        {response.data.movie["runtime"] > 0
                          ? response.data.movie["runtime"] + " Minutes"
                          : "Unknown"}
                      </Text>
                    </HStack>
                  </VStack>
                </Stack>
                {response.data.movie["yt_trailer_code"] !== "" && (
                  <>
                    <Divider />
                    <Heading as="h3" fontSize="lg" align="left" w="full">Trailer</Heading>
                    <Trailer ytID={response.data.movie["yt_trailer_code"]} />
                  </>
                )}
                <Divider />
                <Heading as="h3" fontSize="lg" align="left" w="full">Magnet Links</Heading>
                <Wrap spacing={3} wrap="wrap" align="start" w="full">
                  <MagnetUrl torrents={response.data.movie.torrents} movie={response.data.movie["title_long"]} />
                </Wrap>
                <Divider />
                <Heading as="h3" fontSize="lg" align="left" w="full">Torrents</Heading>
                <Wrap spacing={3} wrap="wrap" align="start" w="full">
                  {response.data.movie["torrents"] && response.data.movie["torrents"].map((val, key) => (
                    <Button as="a" href={val.url} colorScheme="green" leftIcon={<FaDownload />} key={key}>
                      {val.quality}.{val.type} ({val.size})
                    </Button>
                  ))}
                </Wrap>
                {imdb && imdb["Response"] === "True" && imdb["Actors"] && (
                  <Wrap spacing={3} wrap="wrap" justify="flex-start" w="full">
                    <Text whiteSpace="nowrap" display="flex" dir="row" fontWeight="bold" fontSize="12px">Actors :</Text>
                    {imdb["Actors"].split(",").map((val, key) => (
                      <Badge key={key}>{val}</Badge>
                    ))}
                  </Wrap>
                )}
                {imdb && imdb["Response"] === "True" && imdb["Director"] && (
                  <Wrap spacing={3} wrap="wrap" justify="flex-start" w="full">
                    <Text whiteSpace="nowrap" display="flex" dir="row" fontWeight="bold" fontSize="12px">Director :</Text>
                    {imdb["Director"].split(",").map((val, key) => (
                      <Badge key={key}>{val}</Badge>
                    ))}
                  </Wrap>
                )}
                {imdb && imdb["Response"] === "True" && imdb["Writer"] && (
                  <Wrap spacing={3} wrap="wrap" justify="flex-start" w="full">
                    <Text whiteSpace="nowrap" display="flex" dir="row" fontWeight="bold" fontSize="12px">Writers :</Text>
                    {imdb["Writer"].split(",").map((val, key) => (
                      <Badge key={key}>{val}</Badge>
                    ))}
                  </Wrap>
                )}
                {imdb && imdb["Response"] === "True" && imdb["Awards"] && (
                  <Wrap spacing={3} wrap="wrap" justify="flex-start" w="full">
                    <Text whiteSpace="nowrap" display="flex" dir="row" fontWeight="bold" fontSize="12px">Awards :</Text>
                    {imdb["Awards"].split(",").map((val, key) => (
                      <Badge key={key}>{val}</Badge>
                    ))}
                  </Wrap>
                )}
                {imdb && imdb["Response"] === "True" && imdb["BoxOffice"] && (
                  <Wrap spacing={3} wrap="wrap" justify="flex-start" w="full">
                    <Text whiteSpace="nowrap" display="flex" dir="row" fontWeight="bold" fontSize="12px">Box Office :</Text>
                    <Badge key={imdb["BoxOffice"]}>{imdb["BoxOffice"]}</Badge>
                  </Wrap>
                )}
                {response.data.movie["description_full"] && (
                  <>
                    <Divider />
                    <Heading as="h4" fontSize="lg" align="left" w="full">Description</Heading>
                    <Text align="left" w="full">{response.data.movie["description_full"]}</Text>
                  </>
                )}
                <Heading as="h3" fontSize="lg" align="left" w="full">Suggested Movies</Heading>
                <SuggestedMovies id={id} />
              </VStack>
            )}
            {!response && (
              <Center w="full" pb={3}>
                <Spinner />
              </Center>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </HelmetProvider>
  );
};

export default MovieDetails;
