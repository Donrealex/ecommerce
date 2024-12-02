import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import imageAvatar from "./assets/imageAvatar.png";
import iconCart from "./assets/iconCart.svg";

function Navbar() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
// }

  // const Navbar = () => {
  return (
    <div className="font-kumbh">
      <header className="bg-white border-b border-gray-200">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="logo flex items-baseline gap-4">
            <GiHamburgerMenu className=" lg:hidden" />
            <Link to="/">
              <h1 className="text-2xl font-bold">sneakers</h1>
            </Link>
          </div>
          <ul className="lg:flex space-x-4 text-darkGray hidden ">
            <li>
              <Link
                to="/collections"
                className={`hover:text-black ${
                  location.pathname === "/" ? "text-black" : ""
                }`}
              >
                Collections
              </Link>
            </li>
            <li>
              <Link
                to="/men"
                className={`hover:text-black ${
                  location.pathname === "/men" ? "text-black" : ""
                }`}
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                className={`hover:text-black ${
                  location.pathname === "/women" ? "text-black" : ""
                }`}
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-black ${
                  location.pathname === "/about" ? "text-black" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-black ${
                  location.pathname === "/contact" ? "text-black" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <Link to="/">
              <img src={iconCart} alt="iconCart" />
            </Link>
            <img
              src={imageAvatar}
              alt="imageAvatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
