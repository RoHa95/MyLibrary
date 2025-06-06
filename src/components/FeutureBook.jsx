import React, { useContext } from "react";

//components
import { ListContext } from "../Context/ListContext";
import FavCart from "./FavCart";

function FeutureBook() {
  const { favoriteBooks } = useContext(ListContext);
  return (
    <div className="p-4 mx-auto md:px-20 flex flex-col gap-y-4">
      <h2 className="text-indigo-800 font-bold bg-indigo-100 rounded-lg px-2 py-1 lg:my-2 lg:text-2xl">
        کتاب های مورد علاقه
      </h2>
      <div className="flex flex-col sm:flex-row gap-1 lg:gap-3 items-center justify-center">
        <div className="flex px-5 gap-x-3 overflow-auto overflow-x-scroll items-center">
          {favoriteBooks.map((item) => (
            <FavCart key={item.id} data={item}></FavCart>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeutureBook;
