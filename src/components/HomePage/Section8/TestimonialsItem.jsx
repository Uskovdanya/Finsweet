import ButtonTestimonials from "./ButtonTestimonials";

function TestimonialsItem({ item }) {
  return (
    <>
      <p className=" pb-12 font-Sen text-[18px] font-bold leading-8 text-textBlackColor md:pb-[80px] xl:pb-[114px] xl:text-2xl">
        {item.sentence}
      </p>
      <div className="flex w-[300px] items-center justify-center gap-4 text-center xl:text-start">
        <img
          src={item.avatar}
          alt=""
          className="h-12 w-12 gap-4 rounded-[48px]"
        />
        <div>
          <p className="font-Sen text-[18px] font-bold leading-8 text-textBlackColor xl:text-2xl">
            {item.author}
          </p>
          <p className="font-Inter text-base font-normal leading-7 text-borderGray">
            {item.place}
          </p>
        </div>
      </div>
    </>
  );
}

export default TestimonialsItem;
