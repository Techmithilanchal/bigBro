"use client";
import React from "react";
import { MdOutlineHomeWork } from "react-icons/md";

const Hero = () => {
  return (
    <div className='bg-[url("https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")]'>
      <div>
        <p>Find Your Dream Home</p>
        <p>What are you looking for?</p>
        <div className="grid grid-cols-2">
          <div className="w-16 h-16 backdrop-blur-xl">
            <MdOutlineHomeWork />
            Home
          </div>
          <div className="w-16 h-16 backdrop-blur-xl">
            <MdOutlineHomeWork />
            Flat
          </div>
          <div className="w-16 h-16 backdrop-blur-xl">
            <MdOutlineHomeWork />
            PG
          </div>
          <div className="w-16 h-16 backdrop-blur-xl">
            <MdOutlineHomeWork />
            Land
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
