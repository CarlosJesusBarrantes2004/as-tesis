"use client";

import { useForm } from "react-hook-form";
import { ContactFormProps, ContactSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { serviceCategories } from "@/app/data/services";

declare global {
  interface Window {
    gtagSendEvent?: (url?: string) => boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<ContactFormProps>({ resolver: zodResolver(ContactSchema) });
  const watchMessage = watch("message");

  const onSubmit = async (data: ContactFormProps) => {
    try {
      if (window.gtag)
        window.gtag("event", "conversion_event_contact", {
          form_submission: "contact_form",
          form_data: data.service || "general_inquiry",
        });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al enviar el mensaje");
      }

      const result = await response.json();
      toast.success(result.message || "Mensaje enviado exitosamente");
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      id="contactForm"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      aria-label="Formulario de contacto"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
          Nombre completo<span aria-label="required">*</span>
        </label>
        <input
          id="name"
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="Tu nombre"
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
        <label htmlFor="tel" className="block text-gray-700 font-medium mb-1">
          Teléfono<span aria-label="required">*</span>
        </label>
        <input
          id="tel"
          type="tel"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
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
          Correo electrónico<span aria-label="required">*</span>
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
        <label
          htmlFor="service"
          className="block text-gray-700 font-medium mb-1"
        >
          Servicio
        </label>
        <select
          id="service"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
          {...register("service")}
        >
          <option value="">Selecciona un servicio</option>
          {serviceCategories.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="message-error" className="text-red-500 text-sm" role="alert">
            {errors.service.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-gray-700 font-medium mb-1"
        >
          Mensaje
        </label>
        <textarea
          rows={4}
          id="message"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary resize-y min-h-[100px]"
          placeholder="Describe brevemente tu proyecto..."
          {...register("message")}
          aria-describedby={
            errors.message ? "message-info message-error" : undefined
          }
        ></textarea>
        <div className="flex justify-between items-center">
          <p
            id="message-info"
            className={`text-sm ${
              watchMessage?.length >= 500
                ? "text-red-600"
                : watchMessage?.length >= 450
                ? "text-amber-600"
                : "text-gray-500"
            }`}
          >
            {500 - (watchMessage?.length || 0)} caracteres disponibles
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
        className="w-full btn btn-primary"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}

export default ContactForm;
