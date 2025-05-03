import React from "react";

//icons
import { FaRegSquarePlus } from "react-icons/fa6";

function AddNewBook() {
  return (
    <div className="flex items-center gap-1 cursor-pointer">
      <FaRegSquarePlus />
      <div className="sm:pb-1 text-lg">کتاب جدید</div>
    </div>
  );
}

export default AddNewBook;
