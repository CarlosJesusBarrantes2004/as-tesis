"use client";

function AboutHeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-primary text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-20"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            Conócenos
          </h1>
          <p
            className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Somos un equipo apasionado por crear soluciones innovadoras que
            transforman negocios.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() => scrollToSection("historia")}
              className="btn btn-secondary"
            >
              Nuestra Historia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
