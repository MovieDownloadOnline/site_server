// Function to fetch movies from the API
const fetchMoviesByPage = async (page) => {
const response = await fetch(
    `https://yts.mx/api/v2/list_movies.json?limit=50&page=${page}`
);
const data = await response.json();
return data.data.movies;
};

// Function to categorize movies
const categorizeMovies = async () => {
const categories = {
    latest: [],
    mostRated: [],
    animationLatest: [],
    animationMostRated: [],
    actionLatest: [],
    actionMostRated: [],
    hindiLatest: [],
    hindiMostRated: [],
    topDownloaded: [],
    topLiked: [],
};

let page = 1;
let totalMovies = 0;

// Fetch movies until we have gathered enough
while (totalMovies < 1000) {
    const movies = await fetchMoviesByPage(page);

    // Iterate over fetched movies and categorize them
    for (const movie of movies) {
    // Latest
    categories.latest.push(movie);

    // Most Rated
    if (movie.rating >= 8) {
        categories.mostRated.push(movie);
    }

    // Animation
    if (movie.genres.includes("Animation")) {
        categories.animationLatest.push(movie);
        if (movie.rating >= 8) {
        categories.animationMostRated.push(movie);
        }
    }

    // Action
    if (movie.genres.includes("Action")) {
        categories.actionLatest.push(movie);
        if (movie.rating >= 8) {
        categories.actionMostRated.push(movie);
        }
    }

    // Hindi
    if (movie.language === "hi") {
        categories.hindiLatest.push(movie);
        if (movie.rating >= 8) {
        categories.hindiMostRated.push(movie);
        }
    }

    // Top Downloaded (Assuming here just to populate the category with all movies)
    categories.topDownloaded.push(movie);

    // Top Liked (Assuming here just to populate the category with all movies)
    categories.topLiked.push(movie);
    }

    totalMovies += movies.length;
    page++;
}

// Select top 100 Hindi movies based on rating
categories.hindiMostRated = categories.hindiLatest
    .filter((movie) => movie.rating >= 8)
    .slice(0, 100);

// Select top 100 Most Rated movies for other categories if not already selected
if (categories.mostRated.length > 100) {
    categories.animationMostRated = categories.animationLatest
    .filter((movie) => movie.rating >= 8)
    .slice(0, 100);
    categories.actionMostRated = categories.actionLatest
    .filter((movie) => movie.rating >= 8)
    .slice(0, 100);
} else {
    categories.animationMostRated = categories.animationLatest
    .filter((movie) => movie.rating >= 8)
    .slice(0, categories.mostRated.length);
    categories.actionMostRated = categories.actionLatest
    .filter((movie) => movie.rating >= 8)
    .slice(0, categories.mostRated.length);
}

return categories;
};

// Function to generate URL substrings for movies
const generateMovieUrls = (movies) => {
    const baseUrl = "/movie-id/";
    const uniqueMovieIds = new Set();

    // Extract unique movie IDs
    for (const category in movies) {
        // console.log(category);
        if (movies.hasOwnProperty(category)) {
        for (const movie of movies[category]) {
            // console.log(movie.id);
            uniqueMovieIds.add(movie.id);
        }
        }
    }

    // Generate URL substrings
    const urls = Array.from(uniqueMovieIds).map((id) => `${baseUrl}${id}`);
    return urls;
};


const preRenderMovies = async () => {
    // Your existing code
    
    const categories = await categorizeMovies();
    const additionalPathsList = generateMovieUrls(categories);
    console.log(additionalPathsList);
    return additionalPathsList; // Return the categories object
};
    
export default preRenderMovies;