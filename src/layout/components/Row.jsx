import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const sliderLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h3 className="md:text-xl font-bold p-4">{title}</h3>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          className="text-2xl md:text-4xl text-black bg-white rounded-full opacity-50 hover:opacity-100 absolute left-2 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie}></Movie>
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className="text-2xl md:text-4xl text-black bg-white rounded-full opacity-50 hover:opacity-100 absolute right-1 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default Row;
