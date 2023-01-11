import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
function Navbar() {
  const [inputValue, setinputValue] = useState("");

  return (
    <div>
      <div className="hidden md:flex  justify-between items-center space-x-4 ml-4">
        <h5>EN</h5>
        <div className=" flex h-8  w-96 items-center space-x-2 border rounded-lg shadow-sm ">
          <input
            type="text"
            onChange={(e) => setinputValue(e.target.value)}
            value={inputValue}
          />
          <SearchIcon className=" w-7 mr-2 h-7 cursor-pointer  p-1 " />
        </div>
      </div>
      <div></div>

      <div className="text-center ">
        <Link to="/">
          <h1>Yukti</h1>
        </Link>
      </div>
      <p className="text-xs md:text-sm  hover:text-cyan-700 cursor-pointer">
        REGISTER
      </p>
      <p className="text-xs md:text-sm hover:text-cyan-700 cursor-pointer">
        SIGN IN
      </p>
      <div className=" relative flex justify-between items-center space-x-4 mr-6">
        <div className="flex items-center mr-4">
          <h5 className="text-xs"></h5>
        </div>

        <Link to="/cart"></Link>
      </div>
    </div>
  );
}

export default Navbar;
