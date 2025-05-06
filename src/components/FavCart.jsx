import React from "react";

//images
import book from "../assets/salar.jpg";
import AddToQoue from "./AddToQoue";
import DeleteToQoue from "./DeleteToQoue";

function FavCart({ data }) {
  if (!data) return null;
  const { id, title, author, image, pages, category } = data;

  return (
    <div className="min-w-65 max-w-65 h-90 border border-indigo-800 rounded-xs  flex flex-col items-center justify-between my-6 hover:bg-indigo-50">
      <img className="w-fit h-40 mt-4" src={image} />
      <div className="flex flex-col items-start justify-between mt-2">
       <div>
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
          {category.map((item,index)=>(
              <span key={index} className="text-xs text-indigo-800 bg-indigo-100 rounded-md px-1 pb-1.5">
              {item}
            </span>
            ))}
          </div>
        </div>
       </div>
        <DeleteToQoue data={data} />
      </div>
    </div>
  );
}

export default FavCart;