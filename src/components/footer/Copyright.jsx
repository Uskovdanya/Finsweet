import Social from "../Social";

function Copyright() {
  return (
    <div className="mt-6 flex items-center justify-between md:mt-8 lg:mt-[48px]">
      <div className="font-Inter text-base font-normal leading-7 text-textColor">
        <p className="opacity-[0.7]">Finstreet 118 2561 Fintown</p>
        <p className="opacity-[0.7]">Hello@finsweet.com 020 7993 2905</p>
      </div>
      <Social gap="gap-[26px]" color="fill-borderGray" />
    </div>
  );
}

export default Copyright;
