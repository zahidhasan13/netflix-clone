import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const SavedMovie = () => {
  const [saved, setSaved] = useState([]);

  const handleRemove = (id) => {
    const getMovie = JSON.parse(localStorage.getItem("movie"));
    const findMovie = getMovie.filter((m) => m.id !== id);
    localStorage.setItem("movie", JSON.stringify(findMovie));
    setSaved(findMovie);
  };

  const getData = () => {
    const getMovie = JSON.parse(localStorage.getItem("movie"));
    setSaved(getMovie);
  };

  useEffect(() => {
    getData();
  }, []);

  const sliderLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div>
      <h3 className="md:text-xl font-bold p-4">My Shows</h3>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          className="text-2xl md:text-4xl text-black bg-white rounded-full opacity-50 hover:opacity-100 absolute left-2 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {saved?.map((movie, id) => (
            <div
              key={id}
              className="w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                alt={movie?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex items-center justify-center h-full">
                  {movie?.title}
                </p>
                <p>
                  <RxCross2
                    onClick={() => handleRemove(movie?.id)}
                    className="absolute top-4 right-4 text-gray-400"
                  />
                </p>
              </div>
            </div>
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

export default SavedMovie;
