import React, { useEffect, useRef, useState } from "react";
import { getTrendingVideos } from "../services/GlobalAPI";
const imageBaseURL = "https://image.tmdb.org/t/p/original";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const Slider = () => {
  const [movielist, setMovieList] = useState([]);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Dinamik ekran genişliği
  const elementRef = useRef(null);

  useEffect(() => {
    getMovies();

    // Ekran boyutu değiştiğinde güncelle
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getMovies = () => {
    getTrendingVideos().then((res) => setMovieList(res.results));
  };

  const sliderRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += screenWidth - 110;
    }
  };

  const sliderLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= screenWidth - 110;
    }
  };

  return (
    <div>
      <FaChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[240px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <FaChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[240px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movielist.map((item, index) => {
          return (
            <img
              key={index}
              src={imageBaseURL + item.backdrop_path}
              className="min-w-full md:h-[450px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
