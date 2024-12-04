import React from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
function SideBar() {
  // const navigate =useNavigate()
  return (
    <div className="w-[25%] h-full flex-col p-2 gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <Link to={"/"} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className=" w-6" src={assets.home_icon} alt="" />
          <p className=" font-bold">Home</p>
        </Link>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className=" w-6" src={assets.search_icon} alt="" />
          <p className=" font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded ">
        <div className="p-4 flex items-center justify-center">
          <div className="flex items-center gap-4 mr-20">
            <img src={assets.stack_icon} alt="" className=" w-8" />
            <p className=" font-semibold">Your Library</p>
          </div>
          <div className=" flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className=" p-4 bg-[#242424] m-2 font-semibold rounded flex flex-col items-start justify-start gap-1 pl-4">
          <h1 className=" text-balance leading-3">
            {" "}
            Create Your first playlist{" "}
          </h1>
          <p> It's easy we will help you</p>
          <button className=" px-4 py-1.5 text-[15px] text-black bg-white rounded-full mt-4">
            Create playlist{" "}
          </button>
        </div>
        <div className=" p-4 bg-[#242424] m-2 font-semibold rounded flex flex-col items-start justify-start mt-4 gap-1 pl-4">
          <h1 className=" text-balance leading-3 tracking-tight">
            {" "}
            Let's findsome podcasts to follow{" "}
          </h1>
          <p className=" text-balance leading-3 tracking-tight">
            {" "}
            We'll keep update your new episode{" "}
          </p>
          <button className=" px-4 py-1.5 text-[15px] text-black bg-white rounded-full mt-4">
            Brows podcasts{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
