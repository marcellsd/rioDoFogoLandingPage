import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'
import './styles.css'


const SliderSwiper = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        slidesPerView={1}
        pagination={{clickable: true}}
        scrollbar={{draggable:true}}
        grabCursor={true}
        breakpoints={{
            500:{
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
              },
            1250:{
                slidesPerView: 5,
            },
        }}
      >
        <SwiperSlide class='py-5 lg:px-8'><a href="/galeria/"><img src='/img1.png' class=' h-[85%] mt-9 shadow-2xl rounded-xl hover:scale-105 transition-transform  duration-300'/></a></SwiperSlide>
        <SwiperSlide class='py-5 lg:px-8'><a href="/galeria/2"><img src='/img2.jpg' class=' h-[85%] mt-9 shadow-2xl rounded-xl hover:scale-105 transition-transform  duration-300'/></a></SwiperSlide>
        <SwiperSlide class='py-5 lg:px-8'><a href="/galeria/3"><img src='/img3.jpg' class=' h-[85%] mt-9 shadow-2xl rounded-xl hover:scale-105 transition-transform  duration-300'/></a></SwiperSlide>
        <SwiperSlide class='py-5 lg:px-8'><a href="/galeria/4"><img src='/img4.jpg' class=' h-[85%] mt-9 shadow-2xl rounded-xl hover:scale-105 transition-transform  duration-300'/></a></SwiperSlide>
        <SwiperSlide class='py-5 lg:px-8'><a href="/galeria/5"><img src='/img5.jpg' class=' h-[85%] mt-9 shadow-2xl rounded-xl hover:scale-105 transition-transform  duration-300'/></a></SwiperSlide>
        <SwiperSlide class='py-5 lg:px-8'><a href="/galeria/6"><img src='/img1.png' class=' h-[85%] mt-9 shadow-2xl rounded-xl hover:scale-105 transition-transform  duration-300'/></a></SwiperSlide>
        <SwiperSlide class='py-5 lg:px-8'><a href="/galeria/7"><img src='/img1.png' class=' h-[85%] mt-9 shadow-2xl rounded-xl hover:scale-105 transition-transform  duration-300'/></a></SwiperSlide>


    
      </Swiper>
    );
  };

export default SliderSwiper