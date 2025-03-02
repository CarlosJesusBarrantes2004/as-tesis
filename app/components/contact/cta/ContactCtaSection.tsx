"use client";

import { COMPANY_PHONE } from "@/app/data/companyInfo";

function ContactCtaSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          ¿Listo para dar el siguiente paso en tu proyecto académico?
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          No esperes más para recibir la asesoría que necesitas. Contáctanos hoy
          y comienza tu camino hacia el éxito académico.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={`tel:${COMPANY_PHONE}`} className="btn btn-secondary">
            Llamar ahora
          </a>
          <a
            href="#contactForm"
            className="btn bg-white text-primary hover:bg-gray-100"
          >
            Enviar mensaje
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCtaSection;
