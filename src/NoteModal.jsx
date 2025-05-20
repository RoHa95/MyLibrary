import { useContext, useEffect, useState } from "react";

//context
import { bookListContext } from "./Context/BookListContext";

//helper
import { addNote } from "./db";

function NoteModal({ setIsOpen, id ,setNotes,notes}) {
  const [note, setNote] = useState("");
  const [isAlertOn, setIsAlertOn] = useState(false);
  const { addNewNote } = useContext(bookListContext);
  const noteId = `note-${Date.now()}`;

  //No Scroll background
  useEffect(() => {
    // setData({ ...data, id: bookList.length + 1 });
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  //check click in NoteModal background
  const backgroundHandler = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  //get data from inputs
  //   const changeHandler = (e) => {
  //     if (e.target.name === "category") {
  //     } else {
  //       setData({ ...data, [e.target.name]: e.target.value });
  //     }
  //     console.log(data);
  //   };

  //   final submit data
  const submitHandler = async (e) => {
    e.preventDefault();
    await addNote(noteId, note);
    addNewNote(+id, noteId);
    console.log(noteId);
    setNotes([...notes,note])
    console.log("یادداشت ذخیره شد با id:");
    setIsOpen(false);
  };

  return (
    <div
      className="bg-gray-600/90 fixed size-auto inset-0 flex items-center justify-center"
      onClick={backgroundHandler}
    >
      <form className="w-9/12 sm:w-1/3 bg-white rounded-md p-4 flex items-start flex-col justify-start">
        <h2 className="text-lg">اضافه کردن یادداشت جدید</h2>

        <label htmlFor="note" className="text-base text-gray-600 py-0.5">
          یادداشت
        </label>
        <textarea
          type="text"
          name="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border border-gray-400/60 w-full min-h-16 text-xs py-1 px-2 h-8"
          placeholder="یادداشت..."
        />

        {/* {isAlertOn?<span className="bg-red-200 text-red-500 text-xs rounded-md pb-0.5 px-1">لطفا موارد خالی را پر کنید.</span>:""} */}
        <button
          onClick={submitHandler}
          className="bg-indigo-600 rounded-md px-2 py-0.5 text-white mt-4"
        >
          ثبت یادداشت
        </button>
      </form>
    </div>
  );
}

export default NoteModal;
