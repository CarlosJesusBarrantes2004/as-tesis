import Link from "next/link";

function ServicesCtaSection() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern-dots"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para impulsar tu éxito académico?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Nuestro equipo de especialistas está preparado para ayudarte a
            alcanzar tus metas académicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn btn-secondary">
              Solicitar Asesoría Gratuita
            </Link>
            {/*<Link href="/testimonios" className="btn text-white btn-outline">
              Ver Testimonios
            </Link>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCtaSection;
