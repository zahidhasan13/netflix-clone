import React, { useEffect, useState } from "react";
import Api from "../ApiKey";
import axios from "axios";

const useMovie = () => {
  const { popular, topRated, upComing, nowPlaying } = Api;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function popMov() {
      const popularMovie = await axios.get(popular).then((response) => {
        return response.data.results;
      });
      const topRatedMovie = await axios.get(topRated).then((response) => {
        return response.data.results;
      });
      const upComingMovie = await axios.get(upComing).then((response) => {
        return response.data.results;
      });
      const nowPlayingMovie = await axios.get(nowPlaying).then((response) => {
        return response.data.results;
      });
      setMovies([
        ...popularMovie,
        ...topRatedMovie,
        ...upComingMovie,
        ...nowPlayingMovie,
      ]);
    }
    popMov();
  }, []);
  return [movies];
};

export default useMovie;
