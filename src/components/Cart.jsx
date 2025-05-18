import React, { useContext, useEffect, useState } from "react";

//images

import AddToQoue from "./AddToQoue";
import { bookListContext } from "../Context/BookListContext";
import { books } from "../data";
import { openDB } from "../db";

function Cart({ data }) {
  if (!data) return null;

  const [db, setDb] = useState(null);

  const { id, title, author, image, pages, category } = data;
  let originImageAddress = image;
  // useEffect(() => {
  //   const request = indexedDB.open("MyImageDB", 1);

  //   request.onupgradeneeded = (event) => {
  //     const database = event.target.result;
  //     database.createObjectStore("images", { keyPath: "id" });
  //   };

  //   request.onsuccess = (event) => {
  //     setDb(event.target.result);
  //     console.log("✅ IndexedDB آماده است");
  //   };

  //   request.onerror = () => {
  //     console.error("❌ خطا در باز کردن IndexedDB");
  //   };
  // }, []);
  
// if (books.length <= id) {
//    openDB().then(db=> {const tx = db.transaction("images", "readonly");
//     const store = tx.objectStore("images");
//     const request = store.get(image);
//     request.onsuccess = () => {
//       const result = request.result;
//       if (result) {
//         const imageUrl = URL.createObjectURL(result.file);
//         originImageAddress = imageUrl;
//       }}
//     )
//   } else {
//     originImageAddress = image;
//   }
  return (
    <div className="w-65 h-90 border border-indigo-800 rounded-xs  flex flex-col items-center justify-between my-6 hover:bg-indigo-50">
      <img className="w-fit h-40 mt-4" src={originImageAddress} />
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
            {category?.map((item, index) => (
              <span
                key={index}
                className="text-xs text-indigo-800 bg-indigo-100 rounded-md px-1 pb-1.5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <AddToQoue data={data} />
      </div>
    </div>
  );
}

export default Cart;
