import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { EffectCoverflow, Keyboard } from "swiper";
import { useIcons } from "../../../hooks";
import { slides } from "../../../data";
import { Modal } from "../../../components";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./styles.scss";

const Carousel = () => {
  const { Icon } = useIcons();
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (id) => {
    setSelectedId(id);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedId(null);
    setIsOpen(false);
  };

  const handleSlideChange = () => {
    handleCloseModal();
  };
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
      onSlideChange={handleSlideChange}
    >
      <div className='swiper-wrapper'>
        {slides.map(({ img, mobile, title, desc, deploy, src, light, id }) => (
          <SwiperSlide
            key={id}
            style={{
              backgroundImage: `url(${img})`,
            }}
            className={`${mobile ? "mobile" : ""}`}
            onClick={() => handleOpenModal(id)}
          >
            {selectedId === id && (
              <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <header className={`header__modal ${light ? "light" : ""}`}>
                  <h3 className='title__modal'>{title}</h3>
                  <p className='desc__modal'>{desc}</p>
                </header>
                <footer className={`footer__modal`}>
                  <a href={src} target='_blank' rel='noopener noreferrer'>
                    <Icon icon='fab fa-github' />
                  </a>
                  <a href={deploy} target='_blank' rel='noopener noreferrer'>
                    <Icon icon='fa-solid fa-up-right-from-square' />
                  </a>
                </footer>
              </Modal>
            )}
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export { Carousel };
