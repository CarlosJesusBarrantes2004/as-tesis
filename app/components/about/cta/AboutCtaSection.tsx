import Link from "next/link";

function AboutCtaSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Quieres formar parte de nuestro equipo?
          </h2>
          <p className="text-lg mb-8">
            Estamos siempre buscando talento que comparta nuestra pasión por la
            innovación y el compromiso con la excelencia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={"/contacto"} className="btn btn-outline text-white">
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCtaSection;
