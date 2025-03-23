import React from "react";

//icons
import { FaRegSquarePlus } from "react-icons/fa6";

function AddSelectedBooktoQeue() {
  return (
    <div className="w-80 h-110 border bg-indigo-100 border-indigo-800 rounded-xs cursor-pointer flex flex-col items-center justify-center my-6 hover:bg-indigo-50">
<FaRegSquarePlus className="text-8xl text-indigo-900"/>
<h1 className=" text-indigo-900 text-xl pt-3">اضافه کردن کتاب انتخابی خودتان ! </h1>
    </div>
  );
}

export default AddSelectedBooktoQeue;
