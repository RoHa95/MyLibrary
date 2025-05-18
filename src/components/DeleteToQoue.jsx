import React, { useContext } from "react";
import { ListContext } from "../Context/ListContext";

function DeleteToQoue({ data }) {
  const { deleteFavBook } =
    useContext(ListContext);
  if (!data) return null;
  const clickHandler = () => {
    deleteFavBook(data.id);
  };
  return (
    <div
      onClick={clickHandler}
      className="p-2 bg-indigo-800 text-white my-4 px-4 rounded-xl hover:bg-indigo-100 hover:border hover:border-indigo-800 hover:text-indigo-800 cursor-pointer"
    >
      حذف از فهرست مورد علاقه ها
    </div>
  );
}

export default DeleteToQoue;
