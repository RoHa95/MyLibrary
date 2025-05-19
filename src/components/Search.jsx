import React, { useState, useEffect, useContext } from "react";
//icons
import { FaSearch } from "react-icons/fa";
import { bookListContext } from "../Context/BookListContext";
import { useNavigate } from "react-router-dom";

function Search() {
  const { bookList } = useContext(bookListContext);
  const [searchTitle, setSearchTitle] = useState("");
  const [suggestedTitle, setSuggestedTitle] = useState([]);
  const navigate = useNavigate();
  const searchHandler = (e) => {
    const search = e.target.value;
    setSearchTitle(search);
    console.log(searchTitle);
    if (search.trim() === "") {
      setSuggestedTitle([]);
    } else {
      const suggested = bookList.filter((item) =>
        item.title.toLowerCase().includes(search.trim().toLowerCase())
      );
      setSuggestedTitle(suggested);
      console.log(suggested);
    }
  };
  const itemClickHandler = (data) => {
    console.log(data);
    setSuggestedTitle([]);
    setSearchTitle("");
    navigate(`/books/${data.id}`);
  };
  return (
    <div className="flex h-8 relative items-center justify-center gap-x-2 w-fit bg-white rounded-3xl px-4">
      <input
        value={searchTitle}
        onChange={searchHandler}
        type="text"
        placeholder="جستجو"
        className=" text-indigo-800 pb-1 h-full w-40 md:w-96 focus:outline-0"
      />
      <FaSearch className="h-full text-indigo-800" />
      {suggestedTitle.length > 0 ? (
        <div className=" absolute top-8 left-0 right-0 bg-white mt-1 rounded-md border border-gray-300 w-full ">
          <ul>
            {suggestedTitle.map((item, index) => (
              <li
                className=" hover:bg-indigo-200/50 pb-1 px-2 cursor-pointer"
                onClick={() => itemClickHandler(item)}
                key={index}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
