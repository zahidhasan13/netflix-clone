import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Main = () => {
  return (
    <div className="bg-black text-white h-full w-full">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
