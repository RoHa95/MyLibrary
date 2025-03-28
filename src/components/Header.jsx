import React from "react";
import Search from "./Search";
import GotoAdvensedSearch from "./GotoAdvensedSearch";
import Grouping from "./Grouping";
import GotoFavoriteList from "./GotoFavoriteList";

function Header() {
  return (
    <div className="w-full flex bg-indigo-800 h-14  px-4 mx-auto md:px-20  items-center justify-between">
      <span className="text-white text-xs sm:text-base font-bold w-fit">
        کتابخانه من
      </span>

      <div className="flex items-center justify-center gap-x-2 lg:gap-x-4">
        <Search />
        <GotoAdvensedSearch />
        <GotoFavoriteList />
      </div>
    </div>
  );
}

export default Header;
