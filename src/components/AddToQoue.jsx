import React, { useContext, useEffect, useState } from "react";
import { ListContext } from "../Context/ListContext";

function AddToQoue({ data }) {
  const { favoriteBooks, setFavBook, deleteFavBook } = useContext(ListContext);
  const [add, setAdd] = useState(true);
  if (!data) return null;
  useEffect(() => {
    if (favoriteBooks.find((item) => item.id === data.id)) {
      setAdd(false);
    } else {
      setAdd(true);
    }
  }, [favoriteBooks]);

  const clickHandler = (type) => {
    if (type === "add") {
      setFavBook(data);
      setAdd(!add);
    } else {
      deleteFavBook(data.id);
      setAdd(!add);
    }
  };
  return add ? (
    <div
      onClick={() => clickHandler("add")}
      className="p-2 bg-indigo-800 text-sm text-white my-4 px-4 rounded-xl hover:bg-indigo-100 hover:border hover:border-indigo-800 hover:text-indigo-800 cursor-pointer"
    >
      اضافه کردن به فهرست مورد علاقه ها
    </div>
  ) : (
    <div
      onClick={() => clickHandler("delete")}
      className="p-2 bg-indigo-800 text-white my-4 px-4 rounded-xl hover:bg-indigo-100 hover:border hover:border-indigo-800 hover:text-indigo-800 cursor-pointer"
    >
      حذف از فهرست مورد علاقه ها
    </div>
  );
}

export default AddToQoue;
