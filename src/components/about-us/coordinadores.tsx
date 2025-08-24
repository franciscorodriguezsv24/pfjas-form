import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Coordinadores = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-center pt-10">
      <h1 className="text-[#f6d233] bg-[#021c1e] text-2xl font-bold">Conoce a nuestros coordinadores</h1>
      <div className="space-y-10 mt-10 md:flex md:flex-col md:justify-center md:items-center ">
        {/* Coordinador 1 */}
        <div
          className="flex flex-col md:flex-row md:w-6/12 justify-center items-center w-full"
          data-aos="fade-up"
        >
          <div>
            <img
              src="/img/coordinador.webp"
              className="w-60 h-60 md:h-55 object-cover object-bottom rounded-full "
              alt="Coordinador"
            />
          </div>
          <div className="w-5/6 pt-7">
            <h2 className="text-[#f6d233] bg-[#021c1e] font-bold">Aaron Amaya</h2>
            <p className="p-5 text-sm block text-[#f6d233] bg-[#021c1e]">
              Hola, soy Aaron Amaya, tengo 24 años y estoy en el último ciclo de la Licenciatura en Radiología e Imágenes. Me bauticé en 2010. Me gusta cantar, bailar, jugar fútbol, practicar deportes y también los videojuegos. Uno de mis talentos es la fotografía y el diseño publicitario. Mi escritura favorita es Josué 1:9 porque me recuerda que no debo temer, ya que Dios siempre está conmigo.
            </p>
          </div>
        </div>

        {/* Coordinador 2 */}
        <div
          className="flex flex-col md:flex-row md:w-6/12 justify-center items-center w-full"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div>
            <img
              src="/img/coordinadora.webp"
              className="w-60 h-60 md:h-55 object-cover object-bottom rounded-full "
              alt="Coordinadora"
            />
          </div>
          <div className="w-5/6 pt-7">
            <h2 className="text-[#f6d233] bg-[#021c1e] font-bold">
              Rubi Henríquez
            </h2>
            <p className="p-5 text-sm text-[#f6d233] bg-[#021c1e]">
              Hola, tengo 26 años, soy internacionalista y estudio en BYU–Idaho. Me bauticé en 2016 y serví una misión en Panamá del 2021 al 2023. Me gusta bailar, hacer pilates y disfrutar de historias románticas. Una de mis escrituras favoritas es 2 Nefi 26:24 porque me recuerda que todo en el plan de Dios tiene un propósito.
            </p>
          </div>
        </div>

        {/* Coordinador 3 */}
        <div
          className="flex flex-col md:flex-row md:w-6/12 justify-center items-center w-full mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <img
              src="/img/compas.webp"
              className="w-60 h-60 md:h-55 object-cover object-bottom rounded-full"
              alt="Coordinadores"
            />
          </div>
          <div className="w-5/6 pt-10">
            <h2 className="text-[#f6d233] bg-[#021c1e] font-bold">
              Inscríbete ahora!
            </h2>
            <p className="p-5 text-sm text-[#f6d233] bg-[#021c1e]">
              Queremos invitarte con mucho entusiasmo a participar en el Campamento PFJAS 2025, una oportunidad especial para fortalecer tu fe, hacer nuevos amigos y vivir experiencias inolvidables que te acercarán más al Señor. ¡Te esperamos para compartir juntos momentos de crecimiento, alegría y unidad!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinadores;
