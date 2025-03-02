import Image from "next/image";
import Link from "next/link";

function ServicesHeroSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-r from-primary to-primary-600 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/servicios.jpg"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        ></Image>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">
            Servicios Académicos Especializados
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Soluciones profesionales para cada etapa de tu carrera académica,
            diseñadas por expertos para garantizar tu éxito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#servicios" className="btn btn-secondary">
              Explorar Servicios
            </a>
            <Link href="/contacto" className="btn text-white btn-outline">
              Solicitar Asesoría
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

export default ServicesHeroSection;
