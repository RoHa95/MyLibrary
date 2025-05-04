import React, { createContext, useContext, useEffect, useState } from "react";

export const ListContext = createContext();

function ListProvider({ children }) {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const localFavorite = JSON.parse(localStorage.getItem("favBooks"));
  const setFavBook = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
    localStorage.setItem("favBooks", JSON.stringify(favoriteBooks));
  };
  const deleteFavBook = (id) => {
    const newFavBook = favoriteBooks.filter((item) => item.id !== id);
    setFavoriteBooks(newFavBook);
    localStorage.setItem("favBooks", JSON.stringify(newFavBook));
  };
  useEffect(() => {
    if (localFavorite) {
      setFavoriteBooks(localFavorite);
    } else {
      localStorage.setItem("favBooks", JSON.stringify(favoriteBooks));
    }
  }, []);
  return (
    <ListContext.Provider
      value={{ favoriteBooks, setFavoriteBooks, setFavBook, deleteFavBook }}
    >
      {children}
    </ListContext.Provider>
  );
}

export default ListProvider;
