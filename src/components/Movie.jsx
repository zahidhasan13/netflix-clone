import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
  const { user } = useContext(AuthContext);
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("movie"));
    if (savedMovies) {
      const movieExist = savedMovies.some((mov) => mov.id === movie.id);
      setLike(movieExist);
    }
  }, [movie.id]);
  const handleSavedMovie = (movie) => {
    if (!user) {
      navigate("/login");
    }
    let newAddMovie = [];
    let exist = localStorage.getItem("movie");
    if (exist) {
      newAddMovie = JSON.parse(exist);
      let movieExist = newAddMovie.some((mov) => mov.id === movie.id);
      if (movieExist) {
        alert("Movie already exists");
        return;
      }
    }
    newAddMovie.push(movie);
    const saveMovie = JSON.stringify(newAddMovie);
    localStorage.setItem("movie", saveMovie);
    setLike(true);
  };

  return (
    <div className="w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100">
        <Link to={`/movieDetails/${movie?.id}`}>
          <p className="whitespace-normal text-xs md:text-sm font-bold flex items-center justify-center h-full">
            {movie?.title}
          </p>
        </Link>
        {like ? (
          <FaHeart
            className="absolute top-4 left-4 text-red-500 cursor-pointer"
            onClick={() => handleSavedMovie(movie)}
          />
        ) : (
          <FaRegHeart
            className="absolute top-4 left-4 text-gray-400 cursor-pointer"
            onClick={() => handleSavedMovie(movie)}
          />
        )}
      </div>
    </div>
  );
};

export default Movie;
