import React from "react";

export default function Head() {
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        {" "}
        <img
          className="h-7 mt-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        ></img>
        <img
          className="h-12 mx-3 mt-0"
          src="https://e7.pngegg.com/pngimages/24/227/png-clipart-youtube-logo-youtube-text-trademark.png"
        ></img>
      </div>
      <div className=" flex col-span-10 ">
        <input className="w-1/2 rounded-l-full border border-gray-400 " type="text" ></input>
        <button className="border w-20 border-gray-400 rounded-r-full bg-gray-200">Search</button>
      </div>
      <div className="h-9 flex col-span-1 ">
        <img 
          alt="User"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        ></img>
      </div>
      
    </div>
  );
}
