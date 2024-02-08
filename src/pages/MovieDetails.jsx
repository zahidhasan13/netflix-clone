import React from "react";
import useMovie from "../hook/useMovie";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const MovieDetails = () => {
  const [movies] = useMovie();
  const { id } = useParams();
  const allmovies = movies.find((m) => m?.id === parseInt(id));
  console.log(allmovies);
  return (
    <div className="md:px-8 md:py-20">
      <div className="grid md:grid-cols-3 md:gap-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${allmovies?.poster_path}`}
          alt={allmovies?.title}
        />
        <div className="px-4 md:px-0 my-5 md:my-0 col-span-2">
          <h1 className="text-2xl font-bold">
            {allmovies?.title}{" "}
            <span className="text-xl">({allmovies?.original_title})</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Release Date: {allmovies?.release_date}
          </p>
          <p className="flex items-center space-x-1 mt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </p>
          <p className="w-full my-5 text-sm text-gray-200">
            {allmovies?.overview}
          </p>
          <div className="my-6">
            <button className="px-5 py-2 border bg-white text-black font-semibold hover:bg-transparent hover:text-white transition-all">
              Play
            </button>
            <button className="px-5 py-2 border border-white font-semibold hover:bg-white hover:text-black transition-all ml-4">
              Watch Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
