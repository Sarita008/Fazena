import React from "react";
import "../Assets/css/Navbar.css";
import Carosel from "../Components/Carosel";

const Navbar = () => {
  return (
    <>
   <nav>
    <div className="nav-logo">
    <img src="https://outthinc.com/wp-content/uploads/2023/11/cropped-Outthinc-Logo2.png" alt="logo"/>
    </div>

    <div className="nav-links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#aboutMe">Accessories</a>
          </li>

          <li>
            <a href="#myProjects">Ethenic wear</a>
          </li>

          <li>
            <a href="#contactMe">Western wear</a>
          </li>

          <li>
            <a href="#contactMe">Jewellery</a>
          </li>

          <li>
            <a href="#contactMe">Beauty & Grooming</a>
          </li>

          <li>
          <button className="btn sign-up">Sign Up</button>
          </li>

          <li>
          <button className="btn sign-in">Sign In</button>
          </li>
        </ul>
    </div>
   </nav>
      <div>
        <Carosel   />
      </div>
   
   </>
  )
}

export default Navbar;