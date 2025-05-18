import { useContext, useEffect, useState } from "react";

//context
import { bookListContext } from "./Context/BookListContext";

//helper
import { addImage } from "./db";

function Modal({ setIsOpen }) {
  const [category, setCategory] = useState([]);
  const [tempraryCategory, settempraryCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isAlertOn, setIsAlertOn] = useState(false);
  const [data, setData] = useState({
    id: 0,
    title: "",
    author: "",
    pages: "",
    image: "",
    category: [],
  });
  const { addNewTitle, bookList } = useContext(bookListContext);
  const imageId = `book-${Date.now()}`;

  //No Scroll background
  useEffect(() => {
    setData({ ...data, id: bookList.length + 1 });
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  //get file from user
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  //save in indexedDB
  const handleSave = async () => {
    await addImage(imageId, selectedFile);

    console.log("عکس ذخیره شد با id:");

    setData({ ...data, image: imageId });
  };

  //check click in Modal background
  const backgroundHandler = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  //get data from inputs
  const changeHandler = (e) => {
    if (e.target.name === "category") {
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
    console.log(data);
  };

  //get an array of category from user
  const addCategory = (e) => {
    const newCategory = [...category, tempraryCategory];
    setCategory(newCategory);
    const newData = { ...data, category: newCategory };
    setData(newData);
    console.log(newCategory);
    settempraryCategory("");
  };

  //final submit data
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !data.author ||
      !data.category ||
      !data.image ||
      !data.pages ||
      !data.title
    ) {
      setIsAlertOn(true);
    } else {
      addNewTitle(data);
      console.log(data);
      setIsOpen(false);
    }
  };

  return (
    <div
      className="bg-gray-600/90 fixed size-auto inset-0 flex items-center justify-center"
      onClick={backgroundHandler}
    >
      <form className="w-9/12 sm:w-1/3 bg-white rounded-md p-4 flex items-start flex-col justify-start">
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
        <div className="flex">
          <input
            onChange={handleFileChange}
            type="file"
            name="picture"
            className="border border-gray-400/60 w-full text-xs py-1 px-2 h-8"
          />
          <div onClick={handleSave}>تایید</div>
        </div>

        <img
          src={imageUrl}
          alt="Uploaded"
          style={{ marginTop: 20, width: 100, height: "auto" }}
        />
        <label htmlFor="category" className="text-base text-gray-600 py-0.5">
          دسته بندی
        </label>
        <div className="flex items-center w-full">
          <input
            type="text"
            name="category"
            value={tempraryCategory}
            onChange={(e) => settempraryCategory(e.target.value)}
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
          {category.map((item, index) => (
            <span
              key={index}
              className=" text-white bg-indigo-600 rounded-md px-1 pb-1 text-xs"
            >
              {item}
            </span>
          ))}
        </div>
        {isAlertOn?<span className="bg-red-200 text-red-500 text-xs rounded-md pb-0.5 px-1">لطفا موارد خالی را پر کنید.</span>:""}
        <button
          onClick={submitHandler}
          className="bg-indigo-600 rounded-md px-2 py-0.5 text-white mt-4"
        >
          ثبت اطلاعات
        </button>
      </form>
    </div>
  );
}

export default Modal;
