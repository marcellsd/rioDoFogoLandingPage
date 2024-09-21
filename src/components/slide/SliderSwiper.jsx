import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'

const SliderSwiper = () => {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src='/img1.png'/></SwiperSlide>
        <SwiperSlide><img src='/img1.png'/></SwiperSlide>
        <SwiperSlide><img src='/img1.png'/></SwiperSlide>
        <SwiperSlide><img src='/img1.png'/></SwiperSlide>
    
      </Swiper>
    );
  };

export default SliderSwiper