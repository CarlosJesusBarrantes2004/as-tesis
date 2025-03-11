import Link from "next/link";
import React from "react";
import HeroStats from "./HeroStats";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Overlay de formas decorativas */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-secondary"></div>
        <div className="absolute -left-20 top-40 w-80 h-80 rounded-full bg-primary-100"></div>
        <div className="absolute right-1/4 bottom-0 w-64 h-64 rounded-full bg-secondary-100"></div>
      </div>

      <div className="container-custom mx-auto py-16 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Contenido textual */}
          <div className="text-white z-10 md:pr-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 animate-fadeInUp">
              Expertos en asesoría y redacción de tesis profesional
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fadeInUp-delay-200">
              Potencia tu investigación académica con nuestra guía especializada
              desde el planteamiento hasta la sustentación.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeInUp-delay-400">
              <Link href="/servicios" className="btn btn-secondary">
                Nuestros Servicios
              </Link>
              <Link
                href="https://wa.me/51984297207"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-white border-white"
              >
                Contáctanos
              </Link>
            </div>

            <HeroStats />
          </div>

          {/* Imagen/Ilustración */}
          <div className="relative z-10 flex justify-center animate-fadeInUp-delay-300">
            <div className="relative w-full h-80 md:h-96 lg:h-[500px]">
              <Image
                src="/images/estudiante-asesor.jpg"
                alt="Estudiante investigando con asesoría profesional"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
            {/* Elemento decorativo */}
            <div className="absolute -bottom-5 -right-5 bg-secondary rounded-lg p-4 shadow-lg">
              <div className="text-primary font-bold">
                <span className="block text-xl">100%</span>
                <span className="text-sm">Satisfacción</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full text-white"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,75C1120,75,1280,53,1360,42.7L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
