import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

//context provider
import BookListProvider from "./Context/BookListContext.jsx";
import ListProvider from "./Context/ListContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookListProvider>
      <ListProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ListProvider>
    </BookListProvider>
  </StrictMode>
);
