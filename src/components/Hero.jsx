import axios from "axios";
import { useEffect, useState } from "react";
import Api from "../ApiKey";

const Hero = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(Api.upComing).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px]">
      <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full md:top-[30%] top-[50%] p-4 md:p-8">
          <h1 className="text-3xl font-bold">{movie?.title}</h1>
          <div className="my-6">
            <button className="px-5 py-2 border bg-white text-black font-semibold hover:bg-transparent hover:text-white transition-all">
              Play
            </button>
            <button className="px-5 py-2 border border-white font-semibold hover:bg-white hover:text-black transition-all ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Release Date: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
