"use client";

import Link from "next/link";
import AcademicAreasSection from "../components/investigation/area/AcademicAreasSection";

function InvestigationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
              Investigación y Desarrollo
            </h1>
            <p
              className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Exploramos, innovamos y creamos soluciones en diversas áreas del
              conocimiento, impulsando proyectos que generan impacto en la
              sociedad.
            </p>
          </div>
        </div>
      </section>

      {/* Introducción a Áreas Académicas */}
      <section className="py-12 bg-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Áreas de Investigación
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En AS-TESIS ofrecemos apoyo en investigación en una amplia gama de
            disciplinas académicas, desde negocios y salud hasta ingeniería y
            ciencias sociales. Descubre las áreas en las que podemos ayudarte.
          </p>
        </div>
      </section>

      {/* Áreas Académicas */}
      <AcademicAreasSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Te interesa colaborar con nosotros?
            </h2>
            <p className="text-lg mb-8">
              Ponte en contacto con nuestro equipo para conocer más sobre
              nuestros proyectos, publicaciones y oportunidades de colaboración.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={"/contacto"} className="btn btn-secondary">
                Solicitar Información
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InvestigationPage;
