import React, { useEffect, useState, useRef } from "react";
import { getMovieByGenreId } from "../services/GlobalAPI";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import MovieCard from "./MovieCard";

const MovieList = ({ genreId }) => {
  const [movieList, setMovieList] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovie();
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const getMovie = () => {
    getMovieByGenreId(genreId).then((res) => setMovieList(res.results));
  };

  const sliderRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += screenWidth - 987;
    }
  };

  const sliderLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= screenWidth - 987;
    }
  };
  return (
    <div className="relative transition-all duration-150 ">
      <FaChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 top-35 cursor-pointer left-[-70px] z-20"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto gap-8 scrollbar-hide py-5 px-3 scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <MovieCard movie={item} key={index} />
        ))}
      </div>
      <FaChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 top-35 cursor-pointer right-[-70px] z-20"
        onClick={() => sliderRight(elementRef.current)}
      />
    </div>
  );
};

export default MovieList;
