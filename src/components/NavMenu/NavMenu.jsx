import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "../Button";
import MobileMenu from "./MobileMenu";

function NavMenu({ footer = false }) {
  return (
    <nav
      className={`${
        footer
          ? "flex justify-center text-center lg:justify-between "
          : "fixed z-50 flex w-full justify-between px-5 py-2 sm:px-10  lg:static lg:px-20  lg:py-3"
      } items-center  bg-NavBarColor `}
    >
      <NavLink to="/" className={`${footer ? "hidden lg:block" : ""}`}>
        <Logo footer={footer} />
      </NavLink>
      <ul
        className={`${
          !footer ? "hidden lg:flex" : "flex flex-wrap"
        } items-center justify-center gap-3 font-Inter text-base font-normal leading-7 text-textColor sm:justify-between lg:gap-6`}
      >
        <li className="relative before:absolute before:-bottom-[2px] before:left-0 before:h-[2px] before:w-0 before:bg-hoverColor before:transition-all before:duration-300  hover:before:w-full active:text-hoverColor">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="relative before:absolute before:-bottom-[2px] before:left-0 before:h-[2px] before:w-0 before:bg-hoverColor before:transition-all before:duration-300  hover:before:w-full active:text-hoverColor">
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li className="relative before:absolute before:-bottom-[2px] before:left-0 before:h-[2px] before:w-0 before:bg-hoverColor before:transition-all before:duration-300  hover:before:w-full active:text-hoverColor">
          <NavLink to="/aboutus">About Us</NavLink>
        </li>
        <li className="relative before:absolute before:-bottom-[2px] before:left-0 before:h-[2px] before:w-0 before:bg-hoverColor before:transition-all before:duration-300  hover:before:w-full active:text-hoverColor">
          <NavLink to="/contactus">Contact Us</NavLink>
        </li>
        {footer ? (
          <li className="relative before:absolute before:-bottom-[2px] before:left-0 before:h-[2px] before:w-0 before:bg-hoverColor before:transition-all before:duration-300  hover:before:w-full active:text-hoverColor">
            <NavLink to="/privacy">Privacy Policy</NavLink>
          </li>
        ) : (
          <Button color="bg-textColor text-textBlackColor">Subscribe</Button>
        )}
      </ul>

      {footer ? null : <MobileMenu />}
    </nav>
  );
}

export default NavMenu;
