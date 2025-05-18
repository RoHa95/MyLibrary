import { useEffect, useState } from "react";

//components
import AddToQoue from "./AddToQoue";

//helper
import { getImageUrl } from "../db";

function Cart({ data }) {
  if (!data) return null;
  const { id, title, author, image, pages, category } = data;
  const [imageUrl, setImageUrl] = useState(image);

  //get image from indexed database
  useEffect(() => {
    async function fetchImage() {
      const url = await getImageUrl(image);
      if (url) {
        setImageUrl(url);
      }
    }
    if (image.includes("book")) {
      fetchImage();
    } else {
      setImageUrl(image);
    }
  }, []);

  return (
    <div className="w-65 h-90 border border-indigo-800 rounded-xs  flex flex-col items-center justify-between my-6 hover:bg-indigo-50">
      <img className="w-fit h-40 mt-4" src={imageUrl} />
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
