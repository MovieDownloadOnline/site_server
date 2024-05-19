import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useState , useEffect} from "react";
import { Route, Switch , BrowserRouter, Router , Link} from "react-router-dom";
import { createBrowserHistory } from "history";
import { HelmetProvider } from 'react-helmet-async';
import preRenderMovies from "./hooks/preRenderMovies";
import CategoriesNav from "./components/CategoriesNav";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound"; // Import your 404 page component
import ReactGA from "react-ga4";

const trackingId = "G-Z090Q2W49P";
ReactGA.initialize(trackingId);

const history = createBrowserHistory();
history.listen(location => {

  ReactGA.send({ hitType: "pageview", page: location.pathname, title: location.pathname });
});

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState(["/movie/the-world-2004-61687","/movie/single8-2023-61686","/movie/after-the-rain-2-1999-61685","/movie/pandemonium-2023-61683","/movie/nieobliczalna-2024-61682","/movie/krvavy-johann-2023-61681","/movie/the-american-2023-61680","/movie/irenas-vow-2023-61679","/movie/for-sale-2024-61678","/movie/the-day-a-pig-fell-into-the-well-1996-61677","/movie/the-reunion-3-2016-61676","/movie/the-scarface-mob-1959-61675","/movie/the-woman-in-white-1997-61674","/movie/chandu-the-magician-1932-61673","/movie/rwby-volume-4-2017-61672","/movie/bitcoin-the-end-of-money-as-we-know-it-2015-61671","/movie/queen-live-in-budapest-1986-61670","/movie/the-device-2014-61669","/movie/jackboots-on-whitehall-2010-61668","/movie/the-eagle-and-the-hawk-1933-61667","/movie/tracy-morgan-staying-alive-2017-61666","/movie/runaway-romance-2018-61665","/movie/dark-obsession-2023-61664","/movie/steptoe-and-son-ride-again-1973-61663","/movie/break-point-2014-61662","/movie/my-daughters-secret-life-2001-61661","/movie/curious-george-2-follow-that-monkey-2009-61660","/movie/ray-romano-right-here-around-the-corner-2019-61659","/movie/jay-mohr-happy-and-a-lot-2015-61658","/movie/tokyo-revengers-2-bloody-halloween-decisive-battle-2023-61655","/movie/omae-no-tsumi-o-jihaku-shiro-2023-61654","/movie/yutori-desu-ga-nani-ka-international-2023-61652","/movie/end-of-the-rope-2023-61651","/movie/love-in-paradise-2016-61650","/movie/love-blossoms-2017-61649","/movie/love-bite-2012-61648","/movie/the-hockey-champ-1939-61647","/movie/thelma-the-unicorn-2024-61646","/movie/faceless-after-dark-2023-61645","/movie/power-2024-61644","/movie/mothers-instinct-2024-61639","/movie/you-cant-run-forever-2024-61638","/movie/challengers-2024-61637","/movie/g-men-2023-61635","/movie/commandos-strike-at-dawn-1942-61634","/movie/the-courier-2024-61633","/movie/the-blackwell-ghost-8-2024-61631"]);
  
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     // const moviesData = await preRenderMovies();
  //     setMovies(moviesData);
  //   };
  //   fetchMovies();
  // }, [movies]);

  
  // console.log(movies);
  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HelmetProvider>
    <Container
      as="main"
      maxW={{
        xs: "full",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        xxl: "1320px",
      }}
    >
      <BrowserRouter history={history}>
      {/* <HashRouter> */}
      
        <Navbar toggleSideNav={toggleSideNav} />
        <GridItem>
        {movies.map((movie, index) => (
            <Link key={index} to={`${movie}`}>
              {movie.title}
            </Link>
          ))}
        </GridItem>
        <SimpleGrid columns={5} row={1} spacing={6}>
          <GridItem colSpan={{ base: 5, md: 4 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movies/" component={Movies} />
              <Route path="/movie/:movie_id" component={MovieDetails} />
              <Route path="*" component={NotFound} />
            </Switch>
          </GridItem>
          <GridItem>
            
            <CategoriesNav
              isOpen={isOpen}
              toggleSideNav={toggleSideNav}
              setIsOpen={setIsOpen}
            />
          </GridItem>
        </SimpleGrid>
        <MovieDetails />
        <Footer />
        
      {/* </HashRouter> */}
      </BrowserRouter>
    </Container>
    </HelmetProvider>
  );
};

export default App;
