import Social from "../../Social";

function SwiperItem({ item }) {
  return (
    <>
      <img
        src={item.avatar}
        alt="#"
        className="w-[80px] rounded-[128px] md:w-[128px]"
      />
      <p className="pt-5 text-center font-Sen text-[24px] font-bold leading-10 -tracking-[1px] lg:text-[28px] ">
        {item.name}
      </p>
      <p className="pb-5 text-xs font-normal text-borderGray sm:text-sm ">
        {item.mail}
      </p>
      <Social color="fill-NavBarColor" gap="gap-4" />
    </>
  );
}

export default SwiperItem;
