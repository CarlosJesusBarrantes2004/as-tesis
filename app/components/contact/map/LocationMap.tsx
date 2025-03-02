"use client";

import { useEffect, useState } from "react";

function LocationMap() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Nuestra ubicación
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visítanos en nuestras instalaciones. Estamos estratégicamente
            ubicados en el centro de Chiclayo para tu comodidad.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-lg h-96 animate-slide-up">
          {/* Placeholder del mapa con carga simulada */}
          {!isMapLoaded ? (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <p className="text-gray-500">Cargando mapa...</p>
            </div>
          ) : (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4778883421574!2d-79.83999684902865!3d-6.7711123682803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ce8b6fbe7dd05%3A0x4ce6b2a11dba1e54!2sLora%20y%20Cordero%20610%2C%20Chiclayo%2014001%2C%20Per%C3%BA!5e0!3m2!1ses!2sus!4v1580000000000!5m2!1ses!2sus"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de As-Tesis"
              aria-label="Mapa con la ubicación de As-Tesis en Lora y Cordero 610, Chiclayo"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
}

export default LocationMap;
