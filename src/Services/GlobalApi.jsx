import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "37f5994165176807ab4760e42280a0ab";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/movie/550?api_key=37f5994165176807ab4760e42280a0ab";

//https://api.themoviedb.org/3/movie/550?api_key=37f5994165176807ab4760e42280a0ab
const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
