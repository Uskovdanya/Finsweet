import ButtonWithoutPaddings from "../../ButtonWithoutPaddings";
import H2 from "../../H2";
import Paragraph from "../../Paragraph";
import Shape from "../../Shape";

function AboutUsMission() {
  return (
    <section className="container mt-[40px] place-content-center px-4 sm:mt-[58px] sm:px-0 lg:mt-[128px]">
      <Shape form="justify-end" firstWidth="w-[73%]" secondWidth="w-[17%]" />
      <div className="flex  flex-col items-center justify-between gap-[40px] bg-lavenderColor py-[40px] pl-10 pr-10 sm:gap-[80px] sm:py-[70px] sm:pl-20 sm:pr-20 lg:flex-row lg:gap-[82px] lg:py-[96px] lg:pr-[108px]">
        <div className="basis-1/2">
          <p className=" pb-6 font-Inter text-base font-semibold uppercase leading-5 tracking-[3px] text-textBlackColor">
            ABOUT US
          </p>
          <H2 padding="pb-4">
            We are a community of content writers who share their learnings
          </H2>
          <Paragraph padding="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
          <ButtonWithoutPaddings>Read More &gt;</ButtonWithoutPaddings>
        </div>
        <div className="mt-3 basis-1/2 lg:mt-0">
          <p className="pb-6 font-Inter text-base font-semibold uppercase leading-5 tracking-[3px] text-textBlackColor">
            Our mision
          </p>
          <H2 padding="pb-4">
            Creating valuable content for creatives all around the world
          </H2>
          <Paragraph padding="pb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}

export default AboutUsMission;
