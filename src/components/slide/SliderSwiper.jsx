import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar} from "swiper";
import "swiper/css";
import "./styles.css";



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

const SliderSwiper = () => {

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={40}
        navigation={true}
        pagination={{ clickable: true }}
        Scrollbar={{ draggable: true }}
        slidesPerView={1}
        grabCursor={true}
        breakpoints={{
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1250: {
              slidesPerView: 3,
            },
          }}
        className="mySwiper2"
      >
        {galeria.map((imagem) =>(
           <SwiperSlide>
           <a href={imagem.href}><img src={imagem.src} className="hover:scale-105 transition-transform"/></a>
         </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
};

export default SliderSwiper;
