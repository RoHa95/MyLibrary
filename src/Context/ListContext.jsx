import React, { createContext, useContext, useEffect, useState } from "react";

export const ListContext = createContext();

function ListProvider({ children }) {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const localFavorite = JSON.parse(localStorage.getItem("favBooks"));
  const setFavBook = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
    localStorage.setItem("favBooks", JSON.stringify(favoriteBooks));
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
      value={{ favoriteBooks, setFavoriteBooks, setFavBook }}
    >
      {children}
    </ListContext.Provider>
  );
}

export default ListProvider;
