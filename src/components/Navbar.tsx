import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu(): void {
    setIsOpen((prev) => {
      return !prev;
    });
  }
  return (
    <div>
      <nav className=" navbar w-full flex justify-between items-center py-6 ">
        <img src={logo} alt="logo" className="w-[124px] h-[23px]" />
        <ul className="sm:flex list-none flex-1 hidden justify-end items-center ">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`z-[7] font-poppins font-normal cursor-pointer text-[1rem] text-white hover:text-secondary ${
                navLinks.length - 1 === index ? "mr-0" : "mr-10"
              }`}
            >
              {link.title}
            </li>
          ))}
        </ul>
        <div className="flex flex-1 sm:hidden justify-end items-center cursor-pointer">
          <img
            className="w-[25px] h-[25px] object-contain"
            src={isOpen ? close : menu}
            onClick={toggleMenu}
            alt="burgerMenu"
          ></img>
          <div
            className={`${isOpen ? "flex" : "hidden"}
             sidebar p-6 bg-black-gradient
             absolute top-16 right-0 mx-4
             my-2
             rounded-xl
             min-w-[124px]
             `}
          >
            <ul className="flex flex-col list-none flex-1  justify-end items-center ">
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`font-poppins font-normal cursor-pointer text-[1rem] text-white hover:text-secondary ${
                    navLinks.length - 1 === index ? "mb-0" : "mb-10"
                  }`}
                >
                  {link.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
