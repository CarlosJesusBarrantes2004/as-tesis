import { z } from "zod";

// Definimos los tipos de formulario que aceptamos
const complaintTypes = ["reclamo", "queja"] as const;

export const ComplaintSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  dni: z
    .string()
    .regex(/^\d{8}$/, "El DNI debe tener 8 dígitos")
    .refine((val) => val.length === 8, "Debe contener exactamente 8 dígitos"),
  tel: z
    .string()
    .regex(/^9\d{8}$/, "El número debe tener 9 dígitos y comenzar con 9")
    .refine((val) => val.length === 9, "Debe contener exactamente 9 dígitos"),
  email: z.string().email("Correo electrónico inválido"),
  type: z.enum(complaintTypes, {
    required_error: "Por favor seleccione el tipo de formulario",
    invalid_type_error: "Tipo inválido, debe ser 'reclamo' o 'queja'",
  }),
  message: z
    .string()
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .max(1000, "La descripción debe tener máximo 1000 caracteres"),
});

export type ComplaintFormProps = z.infer<typeof ComplaintSchema>;
