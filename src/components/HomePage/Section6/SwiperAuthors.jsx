import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import SwiperItem from "./SwiperItem";
import { usePosts } from "../../contexts/PostContext";

const authors = [
  {
    id: 1,
    img: "./iconAuthor1.png",
    name: "Floyd Miles",
    mail: "ContentWriter@Company",
    facebook: "www.facebook.com",
    twitter: "www.twitter.com",
    instagram: "www.instagram.com",
    linkedln: "www.linkedln.com",
  },
  {
    id: 2,
    img: "./iconAuthor2.png",
    name: "Dianne Russell",
    mail: "ContentWriter@Company",
    facebook: "www.facebook.com",
    twitter: "www.twitter.com",
    instagram: "www.instagram.com",
    linkedln: "www.linkedln.com",
  },
  {
    id: 3,
    img: "./iconAuthor3.png",
    name: "Jenny Wilson",
    mail: "ContentWriter@Company",
    facebook: "www.facebook.com",
    twitter: "www.twitter.com",
    instagram: "www.instagram.com",
    linkedln: "www.linkedln.com",
  },
  {
    id: 4,
    img: "./iconAuthor4.png",
    name: "Leslie Alexander",
    mail: "ContentWriter@Company",
    facebook: "www.facebook.com",
    twitter: "www.twitter.com",
    instagram: "www.instagram.com",
    linkedln: "www.linkedln.com",
  },
  {
    id: 5,
    img: "./iconAuthor1.png",
    name: "Floyd Miles",
    mail: "ContentWriter@Company",
    facebook: "www.facebook.com",
    twitter: "www.twitter.com",
    instagram: "www.instagram.com",
    linkedln: "www.linkedln.com",
  },
  {
    id: 6,
    img: "./iconAuthor2.png",
    name: "Dianne Russell",
    mail: "ContentWriter@Company",
    facebook: "www.facebook.com",
    twitter: "www.twitter.com",
    instagram: "www.instagram.com",
    linkedln: "www.linkedln.com",
  },
  {
    id: 7,
    img: "./iconAuthor3.png",
    name: "Jenny Wilson",
    mail: "ContentWriter@Company",
    facebook: "www.facebook.com",
    twitter: "www.twitter.com",
    instagram: "www.instagram.com",
    linkedln: "www.linkedln.com",
  },
  {
    id: 8,
    img: "./iconAuthor4.png",
    name: "Leslie Alexander",
    mail: "ContentWriter@Company",
    facebook: "www.facebook.com",
    twitter: "www.twitter.com",
    instagram: "www.instagram.com",
    linkedln: "www.linkedln.com",
  },
];

function SwiperAuthors() {
  const { posts } = usePosts();
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={4}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.8,
            spaceBetween: 15,
          },

          768: {
            slidesPerView: 3,
          },
          1240: {
            slidesPerView: 4,
          },
        }}
        loop
        className="pt-12"
      >
        {posts.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex max-h-[324px]  w-[296px] flex-col items-center justify-center  bg-lightGray px-4 py-10 hover:bg-postsHover"
          >
            <SwiperItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwiperAuthors;
