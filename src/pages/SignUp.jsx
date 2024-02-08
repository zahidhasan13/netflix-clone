import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((user) => {
        console.log(user.result);
        form.reset();
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/f957ac07-2b02-4cc1-9de2-f4c72d474baf/BD-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
      <div className="bg-black/60 fixed right-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="md:w-[450px] md:h-[500px] mx-auto bg-black/75">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">sign Up</h1>
            <form onSubmit={handleSignup} className="w-full flex flex-col py-4">
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                name="email"
                type="email"
                placeholder="email"
                autoComplete="email"
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                name="password"
                type="password"
                placeholder="password"
                autoComplete="current-password"
              />
              <button className="py-3 my-6 font-semibold bg-red-600 rounded">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <p>
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-6">
                <span className="text-gray-400">
                  Already subscribed to Netflix?
                </span>
                <Link to="/login">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
