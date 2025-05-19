import { createContext, useEffect, useState } from "react";

export const ListContext = createContext();

function ListProvider({ children }) {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const localFavorite = JSON.parse(localStorage.getItem("favBooks"));
  const setFavBook = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
    const newFavoriteBooks = [...favoriteBooks, book];
    localStorage.setItem("favBooks", JSON.stringify(newFavoriteBooks));
  };
  const deleteFavBook = (id) => {
    const newFavBook = favoriteBooks.filter((item) => item.id !== id);
    setFavoriteBooks(newFavBook);
    localStorage.setItem("favBooks", JSON.stringify(newFavBook));
  };
  const isFav = (id)=>{
    const result = favoriteBooks.find(item=>item.id === id)
    return result
  }
  useEffect(() => {
    if (localFavorite) {
      setFavoriteBooks(localFavorite);
    } else {
      localStorage.setItem("favBooks", JSON.stringify(favoriteBooks));
    }
  }, []);
  return (
    <ListContext.Provider
      value={{ favoriteBooks, setFavoriteBooks, setFavBook, deleteFavBook,isFav }}
    >
      {children}
    </ListContext.Provider>
  );
}

export default ListProvider;
