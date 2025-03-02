import Link from "next/link";
import CtaFeaturesList from "./CtaFeaturesList";
import ContactForm from "../../contact/form/Form";

function CtaSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary-600 text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container-custom mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para iniciar tu proyecto académico?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              En AS-TESIS te ofrecemos un acompañamiento integral y
              personalizado para que alcances el éxito en tu investigación.
            </p>

            <CtaFeaturesList />

            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="btn btn-secondary">
                Solicitar asesoría
              </Link>
              <Link
                href="/servicios"
                className="btn btn-outline text-white border-white"
              >
                Explorar servicios
              </Link>
            </div>
          </div>

          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Solicita una cotización
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
