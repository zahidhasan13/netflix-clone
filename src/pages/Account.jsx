import React, { useContext } from "react";
import SavedMovie from "../components/savedMovie";

const Account = () => {
  return (
    <div className="w-full h-auto">
      <img
        className="w-full h-[200px] md:h-[400px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/f957ac07-2b02-4cc1-9de2-f4c72d474baf/BD-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-[200px] md:h-[400px]"></div>
      <div className="absolute top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
      </div>
      <div>
        <SavedMovie />
      </div>
    </div>
  );
};

export default Account;
