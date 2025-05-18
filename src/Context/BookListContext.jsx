import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { books } from "../data";

//data

export const bookListContext = createContext([]);

function BookListProvider({ children }) {
  const [bookList, setBookList] = useState([]);
  const internalBooks = books;

  useEffect(() => {
    const localBooks = JSON.parse(localStorage.getItem("books"));
    if (localBooks) {
      setBookList(localBooks);
    } else {
      setBookList(internalBooks);
      localStorage.setItem("books", JSON.stringify(internalBooks));
    }
  }, []);

  const addNewTitle = (book) => {
    const newList = [...bookList, book];
    console.log(newList);

    setBookList([...bookList, book]);
    localStorage.setItem("books", JSON.stringify(newList));
  };
  return (
    <bookListContext.Provider value={{ bookList, setBookList, addNewTitle }}>
      {children}
    </bookListContext.Provider>
  );
}
export default BookListProvider;
