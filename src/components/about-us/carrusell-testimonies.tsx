import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function CarrusellTestimonies() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {[
          { src: '/img/pfjas-love.jpg', label: 'Amor' },
          { src: '/img/pfjas-friends2.jpg', label: 'Amigos' },
          { src: '/img/pfjas-diversion2.jpg', label: 'Diversión' },
          { src: '/img/pfjas-party.jpg', label: 'Fiesta' },
          { src: '/img/pfjas-inspiracion.jpg', label: 'Inspiración' },
          { src: '/img/pfjas-talleres.jpg', label: 'Talleres' },
          { src: '/img/pfjas-testimonio.jpg', label: 'Creyentes' },
        ].map(({ src, label }, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <div className="relative w-full sm:w-9/12 mx-auto">
                <img src={src} className="w-full h-auto rounded" />
                <p className="absolute bottom-2 left-2 text-white text-xl font-bold bg-opacity-50 p-2 rounded">
                  {label}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
