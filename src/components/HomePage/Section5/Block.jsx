import Button from "../../Button";
import H2 from "../../H2";
import Paragraph from "../../Paragraph";

function Block() {
  return (
    //<div className="absolute right-0 top-[121px] z-10 w-[706px] bg-white p-20">
    <div className="grid-span-full z-20 bg-white p-10 md:pb-0 lg:col-start-6  lg:col-end-13 lg:row-start-2 lg:row-end-7 xl:p-20 ">
      <p className="font-Inter text-base font-semibold uppercase leading-5 tracking-[3px]">
        Why we started
      </p>
      <p className="pt-3 font-Sen text-3xl font-bold leading-9 -tracking-[2px] text-textBlackColor xl:pt-6 xl:text-5xl xl:leading-[64px]">
        It started out as a simple idea and evolved into our passion
      </p>
      <Paragraph padding="pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </Paragraph>
      <Button color="bg-accentColor">Discover our story &gt;</Button>
    </div>
  );
}

export default Block;
