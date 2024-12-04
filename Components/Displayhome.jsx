import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItems from "./AlbumItems";
import { songsData } from "../assets/assets";
import SongsItem from "./SongsItem";
function Displayhome() {
  return (
    <div>
      <Navbar />
      <div className="mb-4">
        <h1 className=" my-5 font-bold text-2xl">Feature Charts</h1>
        <div className=" flex overflow-auto">
          {/* // this is a image part of this components first uper wala image
           */}
          {albumsData.map((item, index) => (
            <AlbumItems
              key={index}
              name={item.name}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className=" my-5 font-bold text-2xl">Today's biggest hit</h1>
        <div className=" flex overflow-auto">
          {songsData.map((item, index) => (
            <SongsItem
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              desc={item.desc}
            />
          ))}
          {/* // ye home page ke niche wala songs ko dikhayega isko ek alg component banays gaya hai
           */}
        </div>
      </div>
    </div>
  );
}

export default Displayhome;
