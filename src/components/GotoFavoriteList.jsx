import React from "react";
import { useNavigate } from "react-router-dom";

//icons
import { IoHeartOutline } from "react-icons/io5";
function GotoFavoriteList() {
  const navigate = useNavigate();
  const clickHandler = ()=>{
    
    navigate("/favorite-Books");
  }
  return (
    <div onClick={clickHandler }>
      <IoHeartOutline
        className="text-xl cursor-pointer "
        color="white"
        fill="white"
      />
    </div>
  );
}

export default GotoFavoriteList;
