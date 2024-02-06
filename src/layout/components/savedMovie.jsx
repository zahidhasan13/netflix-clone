import React, { useContext, useEffect } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AuthContext } from "../../provider/AuthProvider";

const SavedMovie = () => {
  const { saved, setSaved } = useContext(AuthContext);

  useEffect(() => {
    const getMovie = JSON.parse(localStorage.getItem("movie"));
    setSaved(getMovie);
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

export default SavedMovie;
