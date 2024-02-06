import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const { saved, setSaved } = useContext(AuthContext);

  const handleSavedMovie = (movie) => {
    let newAddMovie = [];
    let exist = localStorage.getItem("movie");
    if (exist) {
      newAddMovie = JSON.parse(exist);
    }
    newAddMovie.push(movie);
    const saveMovie = JSON.stringify(newAddMovie);
    localStorage.setItem("movie", saveMovie);
    setLike(!like);
  };

  return (
    <div className="w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex items-center justify-center h-full">
          {movie?.title}
        </p>
        {like ? (
          <FaHeart className="absolute top-4 left-4 text-gray-400" />
        ) : (
          <FaRegHeart
            onClick={() => handleSavedMovie(movie)}
            className="absolute top-4 left-4 text-gray-400"
          />
        )}
      </div>
    </div>
  );
};

export default Movie;
