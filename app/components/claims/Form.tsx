"use client";

import { useForm } from "react-hook-form";
import { ComplaintFormProps, ComplaintSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

function ComplaintForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<ComplaintFormProps>({ resolver: zodResolver(ComplaintSchema) });
  const watchMessage = watch("message");

  const onSubmit = async (data: ComplaintFormProps) => {
    try {
      const response = await fetch("/api/claims", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Error al enviar el reclamo/queja"
        );
      }

      const result = await response.json();
      toast.success(result.message || "Reclamo/queja enviado exitosamente");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("No se pudo enviar el formulario. Intenta nuevamente.");
    }
  };

  return (
    <form
      id="complaintForm"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      aria-label="Libro de reclamaciones"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
          Nombre completo
          <span aria-label="required" className="text-red-500">
            *
          </span>
        </label>
        <input
          id="name"
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="Tu nombre completo"
          {...register("name")}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-sm" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="dni" className="block text-gray-700 font-medium mb-1">
          DNI
          <span aria-label="required" className="text-red-500">
            *
          </span>
        </label>
        <input
          id="dni"
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="12345678"
          maxLength={8}
          {...register("dni")}
          aria-describedby={errors.dni ? "dni-error" : undefined}
        />
        {errors.dni && (
          <p id="dni-error" className="text-red-500 text-sm" role="alert">
            {errors.dni.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="tel" className="block text-gray-700 font-medium mb-1">
          Teléfono
          <span aria-label="required" className="text-red-500">
            *
          </span>
        </label>
        <input
          id="tel"
          type="tel"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="912345678"
          maxLength={9}
          {...register("tel")}
          aria-describedby={errors.tel ? "tel-error" : undefined}
        />
        {errors.tel && (
          <p id="tel-error" className="text-red-500 text-sm" role="alert">
            {errors.tel.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
          Correo electrónico
          <span aria-label="required" className="text-red-500">
            *
          </span>
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="ejemplo@gmail.com"
          {...register("email")}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="type" className="block text-gray-700 font-medium mb-1">
          Tipo
          <span aria-label="required" className="text-red-500">
            *
          </span>
        </label>
        <div className="flex gap-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-primary"
              value="reclamo"
              {...register("type")}
            />
            <span className="ml-2">Reclamo</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-primary"
              value="queja"
              {...register("type")}
            />
            <span className="ml-2">Queja</span>
          </label>
        </div>
        {errors.type && (
          <p id="type-error" className="text-red-500 text-sm" role="alert">
            {errors.type.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-gray-700 font-medium mb-1"
        >
          Descripción
          <span aria-label="required" className="text-red-500">
            *
          </span>
        </label>
        <textarea
          rows={6}
          id="message"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary resize-y min-h-[150px]"
          placeholder="Describa detalladamente su reclamo o queja..."
          {...register("message")}
          aria-describedby={
            errors.message ? "message-info message-error" : "message-info"
          }
        ></textarea>
        <div className="flex justify-between items-center">
          <p
            id="message-info"
            className={`text-sm ${
              watchMessage?.length >= 1000
                ? "text-red-600"
                : watchMessage?.length >= 900
                ? "text-amber-600"
                : "text-gray-500"
            }`}
          >
            {1000 - (watchMessage?.length || 0)} caracteres disponibles
          </p>
        </div>
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        {isSubmitting ? "Enviando..." : "Enviar reclamo/queja"}
      </button>
    </form>
  );
}

export default ComplaintForm;
