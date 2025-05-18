import React, { useContext } from "react";

//context
import { ListContext } from "../Context/ListContext";

//components
import Header from "../components/Header";
import FavCart from "../components/FavCart";

function FavoritePage() {
  const { favoriteBooks } = useContext(ListContext);
  console.log(favoriteBooks);

  return (
    <>
      <Header />
      <div className="p-4 mx-auto md:px-20 flex flex-wrap gap-4 sm:justify-between justify-center items-center">
        {favoriteBooks.map((item) => (
          <FavCart key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default FavoritePage;
