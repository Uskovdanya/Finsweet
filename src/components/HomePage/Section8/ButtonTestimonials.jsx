import { useSwiper } from "swiper/react";

function ButtonTestimonials() {
  const swiper = useSwiper();

  return (
    <div className="right-2 top-[207px] z-30 hidden gap-[31px] xl:absolute  xl:flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        className="group  cursor-pointer hover:scale-[1.29] "
        onClick={() => swiper.slidePrev()}
      >
        <circle
          cx="24"
          cy="24"
          r="24"
          className="fill-white  group-hover:fill-black "
          transform="rotate(-180 24 24)"
        />
        <path
          className="  fill-textBlackColor group-hover:fill-white"
          d="M34.2852 25c.5522 0 1-.4477 1-1s-.4478-1-1-1v2ZM13.449 23.2929c-.3905.3905-.3905 1.0237 0 1.4142l6.364 6.364c.3905.3905 1.0237.3905 1.4142 0 .3905-.3906.3905-1.0237 0-1.4142L15.5703 24l5.6569-5.6569c.3905-.3905.3905-1.0236 0-1.4142-.3905-.3905-1.0237-.3905-1.4142 0l-6.364 6.364ZM34.2852 23H14.1561v2h20.1291v-2Z"
        />
      </svg>

      {/*<div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="fill-textBlackColor  group-hover:fill-white"
        >
          <title>4-Arrow Left</title>
          <g id="_4-Arrow_Left" data-name="4-Arrow Left">
            <path d="M32,15H3.41l8.29-8.29L10.29,5.29l-10,10a1,1,0,0,0,0,1.41l10,10,1.41-1.41L3.41,17H32Z" />
          </g>
        </svg>
      </div>*/}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        className="group  rotate-180 cursor-pointer hover:scale-[1.29] "
        onClick={() => swiper.slideNext()}
      >
        <circle
          cx="24"
          cy="24"
          r="24"
          transform="rotate(-180 24 24)"
          className="fill-white  group-hover:fill-black "
        />
        <path
          className="fill-textBlackColor  group-hover:fill-white"
          d="M34.2852 25c.5522 0 1-.4477 1-1s-.4478-1-1-1v2ZM13.449 23.2929c-.3905.3905-.3905 1.0237 0 1.4142l6.364 6.364c.3905.3905 1.0237.3905 1.4142 0 .3905-.3906.3905-1.0237 0-1.4142L15.5703 24l5.6569-5.6569c.3905-.3905.3905-1.0236 0-1.4142-.3905-.3905-1.0237-.3905-1.4142 0l-6.364 6.364ZM34.2852 23H14.1561v2h20.1291v-2Z"
        />
      </svg>
    </div>
  );
}

export default ButtonTestimonials;
