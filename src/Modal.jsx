import React, { useEffect, useState } from "react";
import ImageStoraged from "./components/ImageStoraged";

function Modal({ setIsOpen }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [data, setData] = useState({
    title: "",
    author: "",
    pages: "",
    categories: [],
  });
  useEffect(() => {
    // وقتی مودال باز میشه، اسکرول غیرفعال شه
    document.body.style.overflow = "hidden";

    // وقتی مودال بسته شد، اسکرول برگرده به حالت قبل
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  

  const backgroundHandler = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  const changeHandler = (e) => {
    if (e.target.name === "category") {
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
    console.log(data);
  };
  const addCategory = (e) => {
    setCategories([...categories, category]);
    setData({ ...data, categories: categories });
    console.log(categories);
    setCategory("");
  };

  return (
    <div
      className="bg-gray-600/90 fixed size-auto inset-0 flex items-center justify-center"
      onClick={backgroundHandler}
    >
      <form className="w-1/3 bg-white rounded-md p-4 flex items-start flex-col justify-start">
        <h2 className="text-lg">اضافه کردن کتاب جدید</h2>

        <label htmlFor="title" className="text-base text-gray-600 py-0.5">
          عنوان کتاب
        </label>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={(e) => changeHandler(e)}
          className="border border-gray-400/60 w-full text-xs py-1 px-2 h-8"
          placeholder="عنوان..."
        />
        <label htmlFor="author" className="text-base text-gray-600 py-0.5">
          نویسنده
        </label>
        <input
          type="text"
          name="author"
          value={data.author}
          onChange={(e) => changeHandler(e)}
          className="border border-gray-400/60 w-full text-xs py-1 px-2 h-8"
          placeholder="نویسنده ..."
        />
        <label htmlFor="pages" className="text-base text-gray-600 py-0.5">
          تعداد صفحات
        </label>
        <input
          type="number"
          name="pages"
          value={data.pages}
          onChange={(e) => changeHandler(e)}
          className="border border-gray-400/60 w-full text-xs py-1 px-2 h-8"
          placeholder="تعداد صفحات ..."
        />
        <label htmlFor="picture" className="text-base text-gray-600 py-0.5">
          تصویر کتاب
        </label>
        <input
          type="file"
          name="picture"
          className="border border-gray-400/60 w-full text-xs py-1 px-2 h-8"
        />
        <label htmlFor="category" className="text-base text-gray-600 py-0.5">
          دسته بندی
        </label>
        <div className="flex items-center w-full">
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-400/60 w-full text-xs py-1 px-2 h-8"
            placeholder="دسته بندی  ..."
          />
          <div
            onClick={addCategory}
            className="w-fit flex items-center justify-center text-center py-1 mr-1 rounded-md text-xs text-white bg-indigo-700"
          >
            اضافه کردن
          </div>
        </div>
        <div className="flex items-center gap-2">
          {categories.map((item) => (
            <span className=" text-white bg-indigo-600 rounded-md px-1 pb-1 text-xs">
              {item}
            </span>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Modal;
