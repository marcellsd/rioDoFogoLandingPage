import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar} from "swiper";
import "swiper/css";
import "./styles.css";



const galeria = [
  {id:1, href: "/galeria/",    src: "/img10.jpg" },
  {id:2, href: "/galeria/2",   src: "/img2.jpg" },
  {id:3, href: "/galeria/3",   src: "/img3.jpg" },
  {id:4, href: "/galeria/4",   src: "/img5.jpg" },
  {id:5, href: "/galeria/5",   src: "/img7.jpg" },
  {id:6, href: "/galeria/6",   src: "/img1.jpg" },
  {id:7, href: "/galeria/7",   src: "/img4.jpg" },
  {id:8, href: "/galeria/8",   src: "/img6.jpg" },
  {id:9, href: "/galeria/9",   src: "/img8.jpg" },
  {id:10, href: "/galeria/10", src: "/img9.jpg" },
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
        scrollbar={{ draggable: true }}
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
           <SwiperSlide key={imagem.id} >
           <a href={imagem.href}><img src={imagem.src} className="hover:scale-105 transition-transform"/></a>
         </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
};

export default SliderSwiper;
