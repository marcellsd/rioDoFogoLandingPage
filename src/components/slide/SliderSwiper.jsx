import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "./styles.css";

import SwiperCore, { Thumbs } from "swiper";

SwiperCore.use([Navigation, Thumbs]);

const galeria = [
  { href: "/galeria/", src: "/img1.jpg" },
  { href: "/galeria/2", src: "/img2.jpg" },
  { href: "/galeria/3", src: "/img3.jpg" },
  { href: "/galeria/4", src: "/img4.jpg" },
  { href: "/galeria/5", src: "/img5.jpg" },
  { href: "/galeria/6", src: "/img6.jpg" },
  { href: "/galeria/7", src: "/img7.jpg" },
  { href: "/galeria/8", src: "/img8.png" },
];

const SliderSwiper = ({breakPoints}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
        spaceBetween={40}
        navigation={true}
        pagination={{ clickable: true }}
        Scrollbar={{ draggable: true }}
        slidesPerView={1}
        // thumbs={{ swiper: thumbsSwiper }}
        grabCursor={true}
        breakpoints={
         breakPoints ? {
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1250: {
            slidesPerView: 3,
          },
        }: {}}
        className="mySwiper2"
      >
        <SwiperSlide>
          <a href="/galeria/"><img src="/img1.jpg" className="hover:scale-105 transition-transform"/></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria/2"><img src="/img2.jpg" className="hover:scale-105 transition-transform"  /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria/3"><img src="/img3.jpg" className="hover:scale-105 transition-transform" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria/4"><img src="/img4.jpg" className="hover:scale-105 transition-transform" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria/5"><img src="/img5.jpg" className="hover:scale-105 transition-transform" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria/6"><img src="/img6.jpg" className="hover:scale-105 transition-transform" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria/7"><img src="/img7.jpg" className="hover:scale-105 transition-transform" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria/8"><img src="/img8.png" className="hover:scale-105 transition-transform" /></a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderSwiper;
