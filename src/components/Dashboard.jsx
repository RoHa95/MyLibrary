import React from "react";
import Chart from "./Chart";
import DashboardDetails from "./DashboardDetails";

//icons
import { MdOutlineTimer } from "react-icons/md";

function Dashboard() {
  return (
    <div className="p-4 mx-auto md:px-20">
      <h2 className="text-indigo-800 font-bold bg-indigo-100 rounded-lg px-2 py-1 lg:my-2 lg:text-2xl">
        کتاب در حال مطالعه
      </h2>
      <div className="flex flex-col lg:flex lg:flex-row-reverse lg:items-stretch lg:justify-between">
      <div className="w-full flex flex-col items-center justify-center mb-4">
        <Chart />
        <p className="bg-indigo-100 w-fit px-2 pb-1 rounded-lg flex items-center justify-between gap-x-2">
          {" "}
          <MdOutlineTimer className="text-2xl text-indigo-800" />
          فقط 24 ساعت فرصت داری!
        </p>
      </div>
      <DashboardDetails />
      </div>
      
    </div>
  );
}

export default Dashboard;
