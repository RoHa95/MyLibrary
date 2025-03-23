import React, { useState, useEffect } from "react";
//icons
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="flex h-8 items-center justify-center gap-x-2 w-fit bg-white rounded-3xl px-4">
      <input
        type="text"
        placeholder="جستجو"
        className=" text-indigo-800 pb-1 h-full w-40 md:w-96 focus:outline-0"
      />
      <FaSearch className="h-full text-indigo-800" />
    </div>
  );
}

export default Search;
