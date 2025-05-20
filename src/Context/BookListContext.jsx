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
  const addNewNote = (id, note) => {
    const book = bookList.find((item) => item.id === id);
    console.log(book);
    book.note.push(note);
    const filtered = bookList.filter((item) => item.id !== id);
    const newBookList = filtered.concat(book);
    setBookList(newBookList);
    localStorage.setItem("books", JSON.stringify(newBookList));
  };
  const findDetailBook = (id) => {
    const result = bookList.find((item) => item.id === id);
    return result;
  };
  return (
    <bookListContext.Provider
      value={{ bookList, setBookList, addNewTitle, findDetailBook,addNewNote }}
    >
      {children}
    </bookListContext.Provider>
  );
}
export default BookListProvider;
