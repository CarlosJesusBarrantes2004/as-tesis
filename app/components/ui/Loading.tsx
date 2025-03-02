function Loading() {
  return (
    <div className="flex justify-center items-center w-full py-20">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-t-2 border-b-2 border-primary-blue animate-spin"></div>
          <div
            className="h-12 w-12 rounded-full border-r-2 border-l-2 border-secondary-yellow animate-spin absolute top-0 left-0"
            style={{ animationDirection: "reverse", animationDuration: "1s" }}
          ></div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Cargando...</p>
      </div>
    </div>
  );
}

export default Loading;
