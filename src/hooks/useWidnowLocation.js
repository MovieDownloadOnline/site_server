import { useLocation } from "react-router-dom";
import toProperCase from "./../functions/toProperCase";

const useWidnowLocation = () => {
  const location = useLocation();
  let title = "";
  let type = "";
  let genreFromURL = null;

  if (location.pathname === "/movies/new") {
    title = "New Releases";
    type = "year";
    genreFromURL = null;
  } else if (location.pathname === "/movies/rating") {
    title = "Top Rated";
    type = "rating";
    genreFromURL = null;
  } else if (location.pathname === "/movies/likes") {
    title = "Top Likes";
    type = "like_count";
    genreFromURL = null;
  } else if (location.pathname === "/movies/downloads") {
    title = "Top Downloads";
    type = "download_count";
    genreFromURL = null;
  } else if (location.pathname === "/movies/recent") {
    title = "Recently Added";
    type = "date_added";
    genreFromURL = null;
  } else if (location.pathname === "/movies/all") {
    title = "All Movies";
    type = "all";
    genreFromURL = null;
  } else {
    title = toProperCase(location.pathname.split("/").pop()) + " Movies";
    genreFromURL = location.pathname.split("/").pop();
  }

  return { title, type, genreFromURL };
};

export default useWidnowLocation;
