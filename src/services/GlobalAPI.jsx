import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";

const apiKey = "a2b38d9e4d7a53e0c74e58144ec20385";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf";

const getTrendingVideos = async () => {
  try {
    const response = await axios.get(
      `${movieBaseUrl}/trending/all/day?api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error("Hata oluştu:", error);
  }
};

const getMovieByGenreId = async (id) => {
  try {
    const response = await axios.get(
      `${movieByGenreBaseURL + "&with_genres=" + id}`
    );
    return response.data;
  } catch (error) {
    console.error("Hata oluştu:", error);
  }
};

export { getTrendingVideos, getMovieByGenreId };
// ("https://api.themoviedb.org/3/movie/550?api_key=a2b38d9e4d7a53e0c74e58144ec20385");
// ("https://api.themoviedb.org/3/trending/all/day?api_key=a2b38d9e4d7a53e0c74e58144ec20385");
