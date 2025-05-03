import React, { useContext } from "react";
import { ListContext } from "../Context/ListContext";

function AddToQoue() {
  const { favoriteBooks, setFavoriteBooks,setFavBook } = useContext(ListContext);
  
  const clickHandler = () => {
    setFavBook("ggg");
    console.log(favoriteBooks);
  };
  return (
    <div
      onClick={clickHandler}
      className="p-2 bg-indigo-800 text-white my-4 px-4 rounded-xl hover:bg-indigo-100 hover:border hover:border-indigo-800 hover:text-indigo-800 cursor-pointer"
    >
      اضافه کردن به فهرست مورد علاقه ها
    </div>
  );
}

export default AddToQoue;
