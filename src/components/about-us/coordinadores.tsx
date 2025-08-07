import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Coordinadores = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-center">
      <h1>Conoce a nuestros coordinadores</h1>
      <div className="space-y-10 mt-10">
        {/* Coordinador 1 */}
        <div
          className="flex flex-col md:flex-row justify-center items-center w-full"
          data-aos="fade-up"
        >
          <div className="w-xs sm:w-xl bg-white">
            <img
              src="/img/coordinador.webp"
              className="w-full relative top-2 left-2"
              alt="Coordinador"
            />
          </div>
          <div className="w-4/6 bg-white">
            <p className="p-5 relative text-sm block sm:hidden bg-red-400 left-2 top-2">
              Hola, soy Aaron Amaya, tengo 24 años y actualmente estoy cursando
              el último ciclo de la Licenciatura en Radiología e Imágenes. Me
              bauticé en 2010 y viví en Panamá durante dos años y medio.
            </p>
            <p className="text-sm hidden sm:block">
              Hola, soy Aaron Amaya, tengo 24 años y actualmente estoy cursando
              el último ciclo de la Licenciatura en Radiología e Imágenes. Me
              bauticé en 2010 y viví en Panamá durante dos años y medio. He
              tenido la oportunidad de servir en diversos llamamientos;
              actualmente sirvo como Secretario de Barrio y en el área de
              Publicidad del Centro JAS San Salvador. Disfruto mucho cantar,
              bailar, jugar fútbol y practicar la mayoría de los deportes.
              También me gustan mucho los videojuegos. Uno de mis talentos es la
              fotografía, capturar momentos y diseño de publicidad. Mi escritura
              favorita es Josué 1:9, porque nos recuerda que no debemos temer,
              ya que Dios siempre estará con nosotros.
            </p>
          </div>
        </div>

        {/* Coordinador 2 */}
        <div
          className="flex flex-col md:flex-row justify-center items-center w-full"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="w-xs sm:w-xl bg-white">
            <img
              src="/img/coordinadora.webp"
              className="w-full relative top-2 left-2"
              alt="Coordinadora"
            />
          </div>
          <div className="w-4/6 bg-white">
            <p className="p-5 relative text-sm block sm:hidden bg-red-400 left-2 top-2">
              Hola, soy Aaron Amaya, tengo 24 años y actualmente estoy cursando
              el último ciclo de la Licenciatura en Radiología e Imágenes. Me
              bauticé en 2010 y viví en Panamá durante dos años y medio.
            </p>
            <p className="text-sm hidden sm:block">
              Hola, soy Aaron Amaya, tengo 24 años y actualmente estoy cursando
              el último ciclo de la Licenciatura en Radiología e Imágenes. Me
              bauticé en 2010 y viví en Panamá durante dos años y medio. He
              tenido la oportunidad de servir en diversos llamamientos;
              actualmente sirvo como Secretario de Barrio y en el área de
              Publicidad del Centro JAS San Salvador. Disfruto mucho cantar,
              bailar, jugar fútbol y practicar la mayoría de los deportes.
              También me gustan mucho los videojuegos. Uno de mis talentos es la
              fotografía, capturar momentos y diseño de publicidad. Mi escritura
              favorita es Josué 1:9, porque nos recuerda que no debemos temer,
              ya que Dios siempre estará con nosotros.
            </p>
          </div>
        </div>

        {/* Coordinador 3 */}
        <div
          className="flex flex-col md:flex-row justify-center items-center w-full mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="w-xs sm:w-xl bg-white">
            <img
              src="/img/compas.webp"
              className="w-full relative top-2 left-2"
              alt="Coordinadores"
            />
          </div>
          <div className="w-4/6 bg-white">
            <p className="p-5 relative text-sm block sm:hidden bg-red-400 left-2 top-2">
              Hola, soy Aaron Amaya, tengo 24 años y actualmente estoy cursando
              el último ciclo de la Licenciatura en Radiología e Imágenes. Me
              bauticé en 2010 y viví en Panamá durante dos años y medio.
            </p>
            <p className="text-sm hidden sm:block">
              Hola, soy Aaron Amaya, tengo 24 años y actualmente estoy cursando
              el último ciclo de la Licenciatura en Radiología e Imágenes. Me
              bauticé en 2010 y viví en Panamá durante dos años y medio. He
              tenido la oportunidad de servir en diversos llamamientos;
              actualmente sirvo como Secretario de Barrio y en el área de
              Publicidad del Centro JAS San Salvador. Disfruto mucho cantar,
              bailar, jugar fútbol y practicar la mayoría de los deportes.
              También me gustan mucho los videojuegos. Uno de mis talentos es la
              fotografía, capturar momentos y diseño de publicidad. Mi escritura
              favorita es Josué 1:9, porque nos recuerda que no debemos temer,
              ya que Dios siempre estará con nosotros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinadores;
