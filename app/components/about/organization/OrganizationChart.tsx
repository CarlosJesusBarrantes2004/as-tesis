import Image from "next/image";

function OrganizationChart() {
  return (
    <section className="py-16 bg-gray-50" id="organigrama">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Nuestra Estructura Organizativa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conoce cómo está organizado nuestro equipo para ofrecer el mejor
            servicio y garantizar resultados excepcionales.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-card p-6 md:p-8">
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              <Image
                src="/images/organigrama.jpg"
                alt="Organigrama de la empresa"
                width={1200}
                height={800}
                className="w-full rounded-xl shadow-soft"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-gray-900 px-6 py-3 rounded-lg shadow-highlight font-medium">
                Actualizado 2024
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              Nuestra estructura está diseñada para maximizar la colaboración
              entre departamentos y garantizar una comunicación fluida, lo que
              nos permite ser ágiles y eficientes en todos nuestros proyectos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrganizationChart;
