import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div>
      <button>Buy</button>
      <button>Rent</button>
      <div className="border-2 w-[90%] h-20">
        <button>
          <FaLocationDot />
        </button>

        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          placeholder="Search By City Locality,Project"
        />
        <button className="  bg-red-500 text-white rounded-full">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
