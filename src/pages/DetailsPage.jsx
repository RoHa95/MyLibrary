import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { bookListContext } from "../Context/BookListContext";
import AddToQoue from "../components/AddToQoue";
import { getImageUrl } from "../db";

function DetailsPage() {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState();
  const { findDetailBook } = useContext(bookListContext);

  const book = findDetailBook(+id);

  //get image from indexed database
  useEffect(() => {
    async function fetchImage() {
      const url = await getImageUrl(book.image);
      if (url) {
        setImageUrl(url);
      }
    }
    if (book?.image.includes("book")) {
      fetchImage();
    } else {
      setImageUrl(book.image);
    }
  }, [id]);
  return book ? (
    <>
      <Header />
      <div className="w-full mx-auto md:px-20 h-full flex flex-col items-start justify-start">
        <div className="flex items-center text-center justify-center w-2/3 flex-col m-2 mx-auto md:px-20 sm:flex-row">
          <img className="w-2xs h-80 lg:w-3xs rounded-2xl" src={imageUrl} />

          <div className=" flex flex-col items-stretch justify-stretch h-full w-full px-6">
            <h1 className="text-xl font-bold">{book.title}</h1>
            <div className="text-right">نویسنده : {book.author}</div>
            <div className="text-right">تعداد صفحات : {book.pages}</div>
            <div className="flex flex-col items-start">
              <div> دسته بندی :</div>
              <div className=" flex items-center justify-start gap-x-1">
                {book.category.map((item, index) => (
                  <div
                    key={index}
                    className="bg-indigo-500/50 pb-0.5 px-1 rounded-sm"
                  >
                    {item}{" "}
                  </div>
                ))}
              </div>
            </div>
            <AddToQoue data={book} />
          </div>
        </div>
        <div className="flex items-start text-center justify-start w-2/3 flex-col m-2 mx-auto md:px-20">
          <h1 className="bg-indigo-400/50 pb-0.5 px-2 text-indigo-800 rounded-md">پینوشت های من درباره ی این کتاب :</h1>
          <div className="bg-indigo-300/30 border border-indigo-400/50 mt-2 rounded-lg w-full cursor-pointer min-h-[60px] text-indigo-500 text-sm">چیز جدیدی اضافه کنید...</div>
        </div>
      </div>
    </>
  ) : (
    <h1>داده ای یافت نشد</h1>
  );
}

export default DetailsPage;
