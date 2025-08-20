import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function CarrusellTestimonies() {
  const slides = [
    { src: '/img/pfjas-love.jpg', alt: 'love', label: 'Amor y comunidad', className:"w-full h-full object-cover object-[50%_50%] rounded-2xl"
    },
    { src: '/img/pfjas-friends2.jpg', alt: 'friend', label: 'Amistades genuinas', className:"w-full h-full object-cover object-[35%_65%] rounded-2xl" },
    { src: '/img/pfjas-diversion2.jpg', alt: 'diversion', label: 'Momentos de diversión', className:"w-full h-full object-cover object-[50%_50%] rounded-2xl" },
    { src: '/img/pfjas-party.jpg', alt: 'party', label: 'Fiestas inolvidables', className: "w-full h-full object-cover object-[45%_55%] rounded-2xl" },
    { src: '/img/pfjas-inspiracion.jpg', alt: 'inspiracion', label: 'Inspiración diaria', className: "w-full h-full object-cover object-[35%_65%] rounded-2xl" },
    { src: '/img/pfjas-talleres.jpg', alt: 'talleres', label: 'Talleres creativos', className: "w-full h-full object-cover object-[15%_85%] rounded-2xl"},
    { src: '/img/pfjas-testimonio.jpg', alt: 'testimony', label: 'Testimonios reales', className: "w-full h-full object-cover object-[40%_60%] rounded-2xl" },
  ];

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      style={{ height: 600 }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img
            src={slide.src}
            alt={slide.alt}
            className={slide.className}
          />
          {/* Overlay con texto */}
          <div className="absolute bottom-2 left-2 font-bold text-white px-4 py-2 rounded-xl text-lg">
            {slide.label}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}



