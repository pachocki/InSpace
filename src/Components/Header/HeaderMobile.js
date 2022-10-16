import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const MenuItems = ({ showMenu, active }) => {
  
  return (
    <ul
      className={
        active
          ? "flex-col flex items-center fixed h-[100vh]  inset-0 uppercase bg-black/90 backdrop-blur-xl gap-8 justify-center p-8  transition-all duration:700"
          : "hidden"
      }
      onClick={()=>showMenu(prevState=>!prevState)}
    >
      <FaTimes
        onClick={showMenu}
        className="cursor-pointer absolute top-6 right-6 scale-150"
      />
      <li>
        <Link className="hover:opacity-50" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:opacity-50" to="/Destinations">
          Destinations
        </Link>
      </li>
      <li>
        <Link className="hover:opacity-50" to="/Technology">
          Technology
        </Link>
      </li>
      <li>
        <Link className="hover:opacity-50" to="/Crew">
          Crew
        </Link>
      </li>
      <li>
        <Link className="hover:opacity-50" to="/Contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default MenuItems;
