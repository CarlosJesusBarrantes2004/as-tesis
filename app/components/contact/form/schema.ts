import { z } from "zod";

const validServices = [
  "tesis",
  "redaccion",
  "presentacion",
  "estadistica",
  "proyectos",
] as const;

export const ContactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  tel: z
    .string()
    .regex(/^9\d{8}$/, "El número debe tener 9 dígitos y comenzar con 9")
    .refine((val) => val.length === 9, "Debe contener exactamente 9 dígitos"),
  email: z.string().email("Correo electrónico inválido"),
  service: z.enum(validServices, {
    required_error: "Por favor seleccione un servicio",
    invalid_type_error: "Por favor seleccione un servicio",
  }),
  message: z.string().max(500, "El mensaje debe tener máximo 500 caracteres"),
});

export type ContactFormProps = z.infer<typeof ContactSchema>;
