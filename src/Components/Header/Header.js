import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars} from "react-icons/fa";
import HeaderMobile from './HeaderMobile';

const Navbar = () => {
  const [active,setActive] = useState(false)

  const showMenu = () => {
      setActive(!active)
  }
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 100){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    
    <div className={colorChange ? 'navbar colorchange' : 'navbar'}>
      <div className="big-screen:text-3xl font-bold text-center screen:text-2xl">
      <Link to="/"> <h1>✦ InSpace</h1></Link>
      </div>
      <nav>
        <div className="absolute right-6  tablet:block top-6 scale-150 hide">
          <FaBars onClick={showMenu} />
        </div>
        <ul className="tablet:hidden flex gap-5 p-6 big-screen:text-2xl screen:text-xl ">
          <li>
            <Link className="hover:opacity-50" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:opacity-50" to="/Destinations">Destinations</Link>
          </li>
          <li>
            <Link className="hover:opacity-50" to="/Technology">Technology</Link>
          </li>
          <li>
            <Link className="opacity-100 hover:opacity-50" to="/Crew">Crew</Link>
          </li>
          <li>
            <Link className="hover:opacity-50" to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <HeaderMobile showMenu={showMenu} active={active}/>
    </div>
   
  );
};

export default Navbar;
