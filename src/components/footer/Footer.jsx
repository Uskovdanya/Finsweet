import MobileMenu from "../NavMenu/MobileMenu";
import NavMenu from "../NavMenu/NavMenu";
import Copyright from "./Copyright";
import Subscribe from "./Subscribe";

function Footer() {
  return (
    <div className=" flex flex-col bg-NavBarColor px-5 pb-4 pt-4 sm:px-10 sm:pb-8 sm:pt-8 lg:px-20 lg:pb-[56px] lg:pt-[59px]">
      <NavMenu footer="true" />
      <Subscribe />
      <Copyright />
    </div>
  );
}

export default Footer;
