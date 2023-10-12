import logo from '../../assets/logo1.png'

import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navbar = () => { 

    const [nav, setnav] = useState(false);
    function chang() {
      setnav(!nav);
    }
    const scrollToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",  
        });
      }
    };
    useEffect(() => {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      internalLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href")?.slice(1);
          if (targetId) {
            scrollToSection(targetId);
          }
        });
      });
    }, []);
  
    return (
      <div id="nav" className="flex w-full top-0  sticky z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 justify-between items-center  mx-auto  bg-white      ">
        <a href="#" onClick={() => scrollToSection("hello")}>
            <img className="h-20 w-23" src={logo} alt="" />
          </a>
        <ul className="hidden md:flex">
          <li className="p-4">
            <a
              className="no-underline mx-4 cursor-pointer font-normal text-gray-900 hover:text-red-500"
              onClick={() => scrollToSection("about_us")}
              href="#about_us"
            >
              Contact Us
            </a>
          </li>
          <li className="p-4">
            <a
              className="no-underline mx-4 cursor-pointer font-normal text-gray-900 hover:text-red-500"
              onClick={() => scrollToSection("whyus")}
              href="#whyus"
            >
              Why Us
            </a>
          </li>
          <li className="p-4">
            {" "}
            <a
              className="no-underline mx-4 cursor-pointer font-normal	text-gray-900 hover:text-red-500"
              onClick={() => scrollToSection("products")}
              href="#products"
            >
              Our products
            </a>
          </li> 
        </ul> 
          
        <div onClick={chang} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={20} color={"black"} />
          ) : (
            <AiOutlineMenu size={20} color={"black"} />
          )}
        </div>
        <ul
          className={
            nav
              ? " fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-amber-700 ease-in-out duration-500 z-40"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
           <a href="#" onClick={() => scrollToSection("hello")}>
            <img className="h-20 w-23" src={logo} alt="" />
          </a>
          <li className="p-4 ">
            <a
              className="no-underline mx-4 cursor-pointer font-thin text-white hover:text-orange-600"
              onClick={() => scrollToSection("whyus")}
              href="#whyus"
            >
              Why Us
            </a>
          </li>
          <li className="p-4">
            <a
              className="no-underline mx-4 cursor-pointer font-thin text-white hover:text-orange-600 "
              onClick={() => scrollToSection("projects")}
              href="#projects"
            >
              Our products
            </a>
          </li>
          <li className="p-4">
            {" "}
            <a
              className="no-underline mx-4 cursor-pointer font-thin text-white hover:text-orange-600 "
              onClick={() => scrollToSection("contact")}
              href="#contact"
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
  )
}

export default navbar