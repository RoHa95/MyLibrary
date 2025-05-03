import React from "react";

//images
import book from "../assets/salar.jpg";
import AddToQoue from "./AddToQoue";

function Cart({ data }) {
  if (!data) return null;
  const { id, title, author, image, pages, category } = data;
  console.log(title);

  return (
    <div className="w-80 h-110 border border-indigo-800 rounded-xs  flex flex-col items-center justify-between my-6 hover:bg-indigo-50">
      <img className="w-fit h-60 mt-4" src={book} />
      <div className="flex flex-col items-start justify-between mt-2">
        <div>
          <span className="text-indigo-800">نام کتاب : </span>
          <span className=""> {title}</span>
        </div>
        <div>
          <span className="text-indigo-800"> نویسنده : </span>
          <span> {author}</span>
        </div>
        <div>
          <span className="text-indigo-800">ژانر : </span>
          <div className="flex items-center justify-start gap-x-1">
            <span className="text-xs text-indigo-800 bg-indigo-100 rounded-md px-1 pb-1.5">
              رمان{" "}
            </span>
            <span className="text-xs text-indigo-800 bg-indigo-100 rounded-md px-1 pb-1.5">
              {" "}
              داستان خارجی{" "}
            </span>
            <span className="text-xs text-indigo-800 bg-indigo-100 rounded-md px-1 pb-1.5">
              برنده نوبل{" "}
            </span>
          </div>
        </div>
        <AddToQoue />
      </div>
    </div>
  );
}

export default Cart;
