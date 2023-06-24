import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./styles.scss";

const slides = [
  {
    src: "https://emmanuelgonzalez22.github.io/PF-GonzalezSosa.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687487030/mountain_ew4mex.png",
  },
  {
    src: "https://emmanuelgonzalez22.github.io/PF-GonzalezSosa.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687487035/mountain2_yalhvb.png",
  },
  {
    src: "https://emmanuelgonzalez22.github.io/PF-GonzalezSosa.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687488642/WhatsApp_Image_2023-06-22_at_23.46.17_g0sdhk.jpg",
    mobile: true,
  },
  {
    src: "https://emmanuelgonzalez22.github.io/PF-GonzalezSosa.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687488641/WhatsApp_Image_2023-06-22_at_23.46.18_v33dwq.jpg",
    mobile: true,
  },
  {
    src: "https://emmanuelgonzalez22.github.io/PF-GonzalezSosa.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687488640/WhatsApp_Image_2023-06-22_at_23.46.18_1_a4xzjl.jpg",
    mobile: true,
  },
  {
    src: "https://emmanuelgonzalez22.github.io/PF-GonzalezSosa.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687488641/WhatsApp_Image_2023-06-22_at_23.46.17_1_ojfznc.jpg",
    mobile: true,
  },
  {
    src: "https://emmanuelgonzalez22.github.io/PF-GonzalezSosa.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687488641/WhatsApp_Image_2023-06-22_at_23.46.19_fkfbnu.jpg",
    mobile: true,
  },
  {
    src: "https://emmanuelgonzalez22.github.io/practicando-mundial.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687487029/messi_twkzjy.png",
  },
  {
    src: "https://emmanuelgonzalez22.github.io/practicando-mundial.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687488642/messi-mobile_yivcci.jpg",
    mobile: true,
  },
  {
    src: "https://emmanuelgonzalez22.github.io/practicando-mundial.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687488641/messi2-mobile_bza4ev.jpg",
    mobile: true,
  },
  {
    src: "https://emmanuelgonzalez22.github.io/practicando-mundial.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687486333/messi2_u3slam.png",
  },
  {
    src: "https://mi-primer-app-a84ce.web.app/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687486336/pets_y1bcfw.png",
  },
  {
    src: "https://mi-primer-app-a84ce.web.app/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687486335/pets2_ufcmz5.png",
  },
];

const Carousel = () => {
  return (
    <Swiper
      grabCursor
      centeredSlides
      slidesPerView='auto'
      effect='coverflow'
      loop
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      keyboard
      modules={[EffectCoverflow, Keyboard]}
    >
      <div className='swiper-wrapper'>
        {slides.map((slide, i) => (
          <SwiperSlide
            key={`${slide.img}-${i}`}
            style={{
              backgroundImage: `url(${slide.img})`,
            }}
            className={` ${slide.mobile ? "mobile" : ""}`}
          >
            <a
              href={slide.src}
              target='_blank'
              rel='noopener noreferrer'
              className={`swiper-slide swiper-slide-active swiper-slide-visible`}
            >
              <div className='slide-image' />
            </a>
          </SwiperSlide>
        ))}
      </div>
      <div className='swiper-pagination'></div>
    </Swiper>
  );
};

export { Carousel };
