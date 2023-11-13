import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";

function MobileMenu() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        onClick={() => setActive((active) => !active)}
        id="burger"
        className={`group relative  z-40 h-5 w-[30px] cursor-pointer sm:block lg:hidden ${
          active ? "active" : ""
        }`}
      >
        <span className="absolute left-0 top-0 h-[1px] w-full translate-y-0 bg-white transition-transform group-[.active]:translate-y-2 group-[.active]:rotate-45"></span>
        <span className="absolute left-0 top-1/2 h-[1px] w-full translate-y-0 bg-white group-[.active]:opacity-0"></span>
        <span className="absolute bottom-0 left-0 h-[1px] w-full bg-white transition-transform group-[.active]:-translate-y-[11px] group-[.active]:-rotate-45"></span>
      </div>

      {active ? (
        <nav
          id="mobile"
          className="h-y-full fixed bottom-0 left-0  right-0 top-[45px] z-50 bg-textColor pt-[100px] shadow"
        >
          <ul className="mt-20 flex flex-col items-center justify-between gap-6 font-Inter text-xl font-normal leading-7 text-textBlackColor">
            <li className=" relative before:absolute before:-bottom-[2px] before:left-0 before:h-[2px] before:w-0 before:bg-hoverColor  before:transition-all before:duration-300 hover:before:w-full active:text-hoverColor">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="relative  mb-2 before:absolute before:-bottom-[2px] before:left-0 before:h-[2px] before:w-0 before:bg-hoverColor  before:transition-all before:duration-300 hover:before:w-full active:text-hoverColor">
              <NavLink to="blog">Blog</NavLink>
            </li>
            <li className="relative mb-2 before:absolute before:-bottom-[2px] before:left-0 before:h-[2px] before:w-0 before:bg-hoverColor before:transition-all  before:duration-300 hover:before:w-full active:text-hoverColor">
              <NavLink to="aboutus">About Us</NavLink>
            </li>
            <li className="relative mb-2 before:absolute before:-bottom-[2px] before:left-0 before:h-[2px] before:w-0 before:bg-hoverColor before:transition-all  before:duration-300 hover:before:w-full active:text-hoverColor">
              <NavLink to="contactus">Contact Us</NavLink>
            </li>
            <Button color="bg-hoverColor text-textBlackColor">Subscribe</Button>
          </ul>
        </nav>
      ) : null}
    </>
  );
}
export default MobileMenu;
