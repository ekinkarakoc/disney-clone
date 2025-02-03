import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";

const apiKey = "a2b38d9e4d7a53e0c74e58144ec20385";

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

export { getTrendingVideos };
// ("https://api.themoviedb.org/3/movie/550?api_key=a2b38d9e4d7a53e0c74e58144ec20385");
// ("https://api.themoviedb.org/3/trending/all/day?api_key=a2b38d9e4d7a53e0c74e58144ec20385");
