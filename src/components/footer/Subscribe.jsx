import Button from "../Button";
import H2 from "../H2";

function Subscribe() {
  return (
    <div className="mt-6 flex w-full flex-col  items-center justify-between gap-6 self-center bg-textColor/5 px-8  py-6 sm:gap-8 sm:py-12 md:mt-8 md:gap-10 md:px-10 md:py-16  lg:mt-[56px] lg:flex-row lg:gap-16 lg:px-16 lg:py-20 ">
      <H2 color="text-textColor xl:w-[562px] lg:w-[450px] text-center lg:text-start">
        Subscribe to our news letter to get latest updates and news
      </H2>
      <form className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <input
          type="text"
          className="border-[1px] border-solid border-textGrayColor bg-inherit px-[25px] py-[14px] font-Inter text-base font-normal leading-7 text-textGrayColor lg:w-[200px] xl:w-[323px] "
          placeholder="Enter Your Email"
        />
        <Button color="bg-accentColor">Subscribe</Button>
      </form>
    </div>
  );
}

export default Subscribe;
