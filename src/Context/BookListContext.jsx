import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { books } from "../data";

//data

export const bookListContext = createContext([]);

function BookListProvider({ children }) {
  const [bookList, setBookList] = useState([]);
  const localBooks = JSON.parse(localStorage.getItem("books"));
  const internalBooks = books;
  useEffect(() => {
    if (localBooks) {
      setBookList(localBooks);
    } else {
      setBookList(internalBooks);
      localStorage.setItem("books",JSON.stringify(internalBooks));
    }
  }, []);
  return (
    <bookListContext.Provider value={{ bookList, setBookList }}>
      {children}
    </bookListContext.Provider>
  );
}
export default BookListProvider;
