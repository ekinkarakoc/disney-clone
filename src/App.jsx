import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";
import GenreMovieList from "./components/GenreMovieList";

function App() {
  const [count, setCount] = useState(0);

  // https://api.themoviedb.org/3/movie/550?api_key=a2b38d9e4d7a53e0c74e58144ec20385
  return (
    <div className="">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
}

export default App;
