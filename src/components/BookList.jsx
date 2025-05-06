import React, { useContext } from "react";

//components
import Cart from "./Cart";
import AddNewBook from "./AddNewBook";

//context
import { bookListContext } from "../Context/BookListContext";

function BookList() {
  const bookList = useContext(bookListContext);

  return (
    <div className="p-4 mx-auto md:px-20 flex flex-col gap-y-4">
      <div className="text-indigo-800 flex items-center justify-between font-bold bg-indigo-100 rounded-lg px-2 py-1 lg:my-2 lg:text-2xl">
        <h1>تمام کتاب ها</h1>
        <AddNewBook />
      </div>
      <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 items-center justify-center">
        {bookList.bookList.map(item=>(<Cart key={item.id} data={item}/>))}
      </div>
    </div>
  );
}

export default BookList;
