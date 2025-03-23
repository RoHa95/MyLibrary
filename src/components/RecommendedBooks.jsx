import React from "react";
import Cart from "./Cart";

function RecommendedBooks() {
  return (
    <div className="p-4 mx-auto md:px-20">
      <h2 className="text-indigo-800 font-bold bg-indigo-100 rounded-lg px-2 py-1 lg:my-2 lg:text-2xl">
        کتاب های پیشنهادی
      </h2>
      <div>
        <Cart/>
      </div>
    </div>
  );
}

export default RecommendedBooks;
