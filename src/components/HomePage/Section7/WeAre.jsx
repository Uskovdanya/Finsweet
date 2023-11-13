import React from "react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

function WeAre() {
  return (
    <section className="container mb-10 mt-10 flex  items-center  gap-5  sm:gap-10 lg:mt-[96px] lg:pb-[96px] xl:gap-[86px] ">
      <p className="hidden  flex-col font-Inter text-sm font-normal text-borderGray opacity-60 sm:flex">
        We are
        <span className="w-[136px] font-Sen text-[24px] font-bold leading-8 text-borderGray ">
          Featured in
        </span>
      </p>
      <Swiper
        spaceBetween={50}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          400: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1240: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <img src="./logo1.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo2.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo3.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo4.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo5.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo1.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo2.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo3.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo4.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo5.svg" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default WeAre;
