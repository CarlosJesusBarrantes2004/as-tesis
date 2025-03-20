import { FOUNDATION_YEAR } from "@/app/data/companyInfo";
import Image from "next/image";

function HistoryTimeline() {
  return (
    <section className="py-16 bg-gray-50" id="historia">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Nuestra Historia
            </h2>
            <div className="space-y-6">
              <p>
                AS Tesis nació con el propósito de brindar asesoría académica de
                calidad a estudiantes y profesionales en busca de culminar con
                éxito sus trabajos de investigación. Fundada en{" "}
                {FOUNDATION_YEAR}
                en la ciudad de Chiclayo, Lambayeque, nuestra empresa ha crecido
                gracias a la confianza de nuestros clientes y la excelencia de
                nuestros servicios.
              </p>
              <p>
                Desde nuestros inicios, nos enfocamos en ofrecer asesoría
                integral en la elaboración de tesis, tesinas y proyectos de
                investigación, abarcando diferentes áreas del conocimiento. Con
                el tiempo, hemos consolidado un equipo de profesionales
                altamente capacitados, comprometidos con la orientación y el
                acompañamiento en cada etapa del proceso investigativo.
              </p>
              <p>
                Nuestro enfoque se basa en la calidad, ética y responsabilidad,
                asegurando que cada trabajo cumpla con los más altos estándares
                académicos. Gracias a nuestro compromiso, hemos logrado ayudar a
                cientos de estudiantes y profesionales a alcanzar sus objetivos
                académicos y laborales.
              </p>
              <p>
                Hoy en día, AS Tesis sigue evolucionando, adaptándose a las
                nuevas exigencias del mundo académico y ofreciendo soluciones
                innovadoras que faciliten la realización de investigaciones de
                impacto.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-lg opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-lg opacity-20"></div>
              <Image
                src="/images/historia-empresa.jpg"
                alt="Nuestra historia"
                width={600}
                height={500}
                className="relative z-10 rounded-xl shadow-card w-full object-cover"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryTimeline;
