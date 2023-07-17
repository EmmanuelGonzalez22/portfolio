import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./styles.scss";

const slides = [
  {
    src: "https://emmanuelgonzalez22.github.io/PF-GonzalezSosa.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687793714/mountain2_awnc4z.webp",
  },
  {
    src: "https://emmanuelgonzalez22.github.io/PF-GonzalezSosa.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687793709/mountain_zh3vlj.webp",
  },
  {
    src: "https://emmanuelgonzalez22.github.io/practicando-mundial.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687793709/messi_rbpzmq.webp",
  },
  {
    src: "https://emmanuelgonzalez22.github.io/practicando-mundial.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687793708/messi2_anlg7d.webp",
  },
  {
    src: "https://mi-primer-app-a84ce.web.app/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687793708/pets2_nonlfu.webp",
  },
  {
    src: "https://emmanuelgonzalez22.github.io/PF-GonzalezSosa.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687793711/WhatsApp_Image_2023-06-22_at_23.46.17_gbwiic.webp",
    mobile: true,
  },
  {
    src: "https://emmanuelgonzalez22.github.io/PF-GonzalezSosa.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687793708/WhatsApp_Image_2023-06-22_at_23.46.18_1_x9ly1e.webp",
    mobile: true,
  },
  {
    src: "https://emmanuelgonzalez22.github.io/PF-GonzalezSosa.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687793707/WhatsApp_Image_2023-06-22_at_23.46.18_su8wr9.webp",
    mobile: true,
  },
  {
    src: "https://emmanuelgonzalez22.github.io/PF-GonzalezSosa.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687793707/WhatsApp_Image_2023-06-22_at_23.46.19_qeinaw.webp",
    mobile: true,
  },
  {
    src: "https://emmanuelgonzalez22.github.io/PF-GonzalezSosa.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687793706/WhatsApp_Image_2023-06-22_at_23.46.17_1_wuhjbg.webp",
    mobile: true,
  },
  {
    src: "https://emmanuelgonzalez22.github.io/practicando-mundial.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687793706/messi-mobile_dmmcku.webp",
    mobile: true,
  },
  {
    src: "https://emmanuelgonzalez22.github.io/practicando-mundial.github.io/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687793706/messi2-mobile_jiwkry.webp",
    mobile: true,
  },
  {
    src: "https://mi-primer-app-a84ce.web.app/",
    img: "https://res.cloudinary.com/dfxdwscp4/image/upload/v1687793710/pets_rchstr.webp",
  },
];

const Carousel = () => {
  return (
    <Swiper
      grabCursor
      lazyPreloadPrevNext={true}
      touchMoveStopPropagation={true}
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
