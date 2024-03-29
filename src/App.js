import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useState , useEffect} from "react";
import { Route, Switch , BrowserRouter, Link} from "react-router-dom";
import { createBrowserHistory } from "history";
import preRenderMovies from "./hooks/preRenderMovies";
import CategoriesNav from "./components/CategoriesNav";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import ReactGA from "react-ga4";

const trackingId = "G-Z090Q2W49P";
ReactGA.initialize(trackingId);

const history = createBrowserHistory();
history.listen(location => {

  ReactGA.send({ hitType: "pageview", page: location.pathname, title: location.pathname });
});

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await preRenderMovies();
      setMovies(moviesData);
    };
    fetchMovies();
  }, []);

  // console.log(pre_render_movies);
  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
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
              {/* You can include any content related to the movie here */}
              {movie.title}
            </Link>
          ))}
        </GridItem>
        <SimpleGrid columns={5} row={1} spacing={6}>
          <GridItem colSpan={{ base: 5, md: 4 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movies/" component={Movies} />
              <Route path="/movie_id/:movie_id" component={MovieDetails} />
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
        <Link to="/movie_id/42950">L</Link>
        <Footer />
        
      {/* </HashRouter> */}
      </BrowserRouter>
      {/* <Link to="/?movie_id=42950">L</Link> */}
    </Container>
  );
};

export default App;
