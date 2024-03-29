import { Link } from "react-router-dom";
import logo from "../assets/N-logo.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className="flex items-center justify-between absolute w-full p-4 z-[100] bg-black/80 sm:bg-transparent">
      <Link to="/">
        <img src={logo} alt="Logo" className="md:w-[150px] w-[100px]" />
      </Link>
      <div>
        {user ? (
          <Link to="/account">
            <button className="px-3 py-2 font-semibold">Account</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="px-3 py-2 font-semibold">sign In</button>
          </Link>
        )}
        {user ? (
          <button
            onClick={handleLogOut}
            className="px-3 py-2 font-semibold bg-red-600 rounded ml-2"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/signup">
            <button className="px-3 py-2 font-semibold bg-red-600 rounded ml-2">
              Sign Up
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
