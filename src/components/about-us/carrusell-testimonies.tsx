import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import TestimonyCard from './tetimony-card';

const CarrusellTestimonies = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
        >
            <SwiperSlide><TestimonyCard/></SwiperSlide>
            <SwiperSlide><TestimonyCard/></SwiperSlide>
            <SwiperSlide><TestimonyCard/></SwiperSlide>
            <SwiperSlide><TestimonyCard/></SwiperSlide>
            <SwiperSlide><TestimonyCard/></SwiperSlide>
        </Swiper>
    );
};

export default CarrusellTestimonies;