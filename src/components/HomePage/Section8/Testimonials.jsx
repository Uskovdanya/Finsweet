import { usePosts } from "../../contexts/PostContext";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import H2 from "../../H2";
import Paragraph from "../../Paragraph";
import ButtonTestimonials from "./ButtonTestimonials";
import TestimonialsItem from "./TestimonialsItem";

function Testimonials() {
  const { posts } = usePosts();

  return (
    <section className="sm:pb-40px container  grid grid-cols-testimonialsColsSm   grid-rows-1 items-center justify-center justify-items-center gap-3 bg-iconActive px-[40px] pb-5 pt-[92px] md:px-[80px] md:pb-[60px] xl:grid-cols-testimonialsCols xl:gap-0 xl:px-[112px] xl:pb-[75px]">
      <div className="col-start-1 col-end-1 row-start-1 row-end-1 border-borderGray pr-0 pt-3 xl:border-r-[1px] xl:pr-[80px]  xl:pt-0">
        <h4 className="pb-3 text-center font-Inter text-base font-semibold uppercase leading-5 tracking-[3px] text-textBlackColor xl:text-start">
          TESTIMONIALS
        </h4>
        <H2 padding="pb-4 xl:text-start text-center">
          What people say about our blog
        </H2>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </Paragraph>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={96}
        slidesPerView={1}
        className="relative w-[300px] pt-3 xs:w-[350px] md:w-[600px] xl:w-[490px] xl:pt-0"
      >
        {posts.map((item) => (
          <SwiperSlide key={item.id}>
            <TestimonialsItem item={item} />
          </SwiperSlide>
        ))}
        <ButtonTestimonials />
      </Swiper>
    </section>
  );
}
//className="col-start-2 col-end-2 row-start-1 row-end-1  pl-[96px]"
export default Testimonials;
