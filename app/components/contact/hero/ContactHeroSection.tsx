function ContactHeroSection() {
  return (
    <section className="relative bg-primary py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/contacto.jpg')] opacity-10"></div>
      </div>
      <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
          Contáctanos
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in">
          Estamos aquí para ayudarte en tu camino académico. Cuéntanos sobre tu
          proyecto y te brindaremos la asesoría que necesitas.
        </p>
      </div>
    </section>
  );
}

export default ContactHeroSection;
