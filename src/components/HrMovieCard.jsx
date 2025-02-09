import React from "react";
const imageBaseURL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({ movie }) => {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in cursor-pointer">
      <img
        src={imageBaseURL + movie.backdrop_path}
        alt=""
        className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 "
      />
      <h3 className="w-[110px] md:w-[200px] mt-4 text-gray-200">
        {movie.title}
      </h3>
    </section>
  );
};

export default HrMovieCard;
