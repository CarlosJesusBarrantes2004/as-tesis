import ComplaintForm from "../components/claims/Form";

function ClaimsPage() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Libro de Reclamaciones
        </h2>
        <ComplaintForm />
      </div>
    </section>
  );
}

export default ClaimsPage;
