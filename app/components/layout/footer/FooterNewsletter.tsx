function FooterNewsletter() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-800">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4">
          Suscríbete a nuestro boletín
        </h3>
        <p className="text-gray-400 mb-6">
          Recibe consejos, recursos y promociones exclusivas para tu desarrollo
          académico
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-yellow flex-grow"
            required
          />
          <button type="submit" className="btn btn-secondary whitespace-nowrap">
            Suscribirse
          </button>
        </form>
      </div>
    </div>
  );
}

export default FooterNewsletter;
