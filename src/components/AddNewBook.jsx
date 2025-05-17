import React, { useState } from "react";

//icons
import { FaRegSquarePlus } from "react-icons/fa6";
import Modal from "../Modal";

function AddNewBook() {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    console.log("hi");
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex items-center justify-center gap-1 cursor-pointer">
        <FaRegSquarePlus />
        <div onClick={clickHandler} className="sm:pb-1 text-lg">
          کتاب جدید
        </div>
        {isOpen ? <Modal setIsOpen={setIsOpen} /> : ""}
      </div>
    </>
  );
}

export default AddNewBook;
