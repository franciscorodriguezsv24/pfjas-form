import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

export default function CardActivities() {
  return (
  <div className="flex justify-center items-center w-auto">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[200px] h-[320px]"
      >
        <SwiperSlide className="flex items-center justify-center rounded-[18px] text-[22px] font-bold text-white bg-[#f9f2dd]">
            <div className='h-full flex flex-col items-center pt-5 gap-7'>
                <p className="text-[#1f5c5c] text-center">Nuevos amigos</p>

                <img src='/amigos.png' alt="Friends activities"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-[18px] text-[22px] font-bold text-white bg-[#1f5c5c]">
            <div className='h-full flex flex-col items-center pt-5 gap-5'>
                <p className="text-[#f9f2dd] text-center">La mejor fiesta del año</p>

                <img src='/bailando.png' alt='bailando'/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-[18px] text-[22px] font-bold text-white bg-[#f9f2dd]">
            <div className='h-full flex flex-col items-center pt-5 gap-5'>
                <p className="text-[#1f5c5c] text-center">Conectaras con la naturaleza</p>

                <img src='/bosque.png' alt='bosque'/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-[18px] text-[22px] font-bold text-white bg-[#1f5c5c]">
            <div className='h-full flex flex-col items-center pt-5 gap-5'>
                <p className="text-[#f9f2dd] text-center">Diversion en todos lados</p>

                <img src='/columpio-giratorio.png' alt='carrusell'/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-[18px] text-[22px] font-bold text-white bg-[#f9f2dd]">
            <div className='h-full flex flex-col items-center pt-5 gap-5'>
                <p className="text-[#1f5c5c] text-center">Mensajes inspiradores</p>
                <img src='/discurso.png' alt='discurso'/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-[18px] text-[22px] font-bold text-white bg-[#1f5c5c]">
            <div className='h-full flex flex-col items-center justify-center px-5'>
                <p className="text-[#f9f2dd] text-center">Pero sobre todo...</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-[18px] text-[22px] font-bold text-white bg-[#f9f2dd]">
            <div className='h-full flex flex-col items-center pt-5 gap-5'>
                <p className="text-[#1f5c5c] text-center">Conectaras con Dios</p>

            <img src='/orar.png' alt='orar'/>
            </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}