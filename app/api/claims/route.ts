import { ComplaintSchema } from "@/app/components/claims/schema";
import { EMAIL_COMPLAINTS_BOOK, PASS_COMPLAINTS_BOOK } from "@/config";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validar los datos con Zod
    const validationResult = ComplaintSchema.safeParse(data);
    if (!validationResult.success)
      return NextResponse.json(
        {
          error: "Datos de formulario inválidos",
          details: validationResult.error.format(),
        },
        { status: 400 }
      );

    // Datos validados
    const validData = validationResult.data;

    if (!EMAIL_COMPLAINTS_BOOK || !PASS_COMPLAINTS_BOOK)
      return NextResponse.json(
        { error: "Error en la configuración del servidor de correo" },
        { status: 500 }
      );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_COMPLAINTS_BOOK,
        pass: PASS_COMPLAINTS_BOOK,
      },
    });

    // Generar un número de ticket para seguimiento
    const ticketNumber = `REC-${new Date().getFullYear()}-${Math.floor(
      Math.random() * 10000
    )
      .toString()
      .padStart(4, "0")}`;

    // Determinar el tipo de formulario para el asunto
    const formType = validData.type === "reclamo" ? "Reclamo" : "Queja";

    const mailOptions = {
      from: EMAIL_COMPLAINTS_BOOK,
      to: EMAIL_COMPLAINTS_BOOK,
      subject: `📢 Nuevo ${formType} - ${validData.name} [${ticketNumber}]`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nuevo ${formType} - ${validData.name}</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="padding: 2rem 1rem; background-color: #ffebee;">
                <table width="100%" max-width="600px" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <tr>
                    <td style="padding: 1.5rem; background-color: ${
                      validData.type === "reclamo" ? "#d32f2f" : "#ff9800"
                    }; color: white; text-align: center; border-radius: 8px 8px 0 0;">
                      <h1 style="margin: 0; font-size: 1.5rem;">📢 Nuevo ${formType}</h1>
                      <p style="margin: 0.5rem 0 0; font-size: 1rem;">Ticket: ${ticketNumber}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 2rem;">
                      <h2 style="margin-bottom: 1rem; font-size: 1.25rem;">Detalles del ${formType.toLowerCase()}</h2>
                      <table width="100%" cellpadding="5">
                        <tr><td><strong>Nombre:</strong></td><td>${
                          validData.name
                        }</td></tr>
                        <tr><td><strong>DNI:</strong></td><td>${
                          validData.dni
                        }</td></tr>
                        <tr><td><strong>Teléfono:</strong></td><td>${
                          validData.tel
                        }</td></tr>
                        <tr><td><strong>Correo:</strong></td><td>${
                          validData.email
                        }</td></tr>
                        <tr><td><strong>Tipo:</strong></td><td>${formType}</td></tr>
                        <tr><td><strong>Fecha:</strong></td><td>${new Date().toLocaleDateString(
                          "es-ES",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}</td></tr>
                      </table>
                      <h3 style="margin-top: 1.5rem;">Descripción:</h3>
                      <p style="background-color: #fce4ec; padding: 1rem; border-radius: 4px; white-space: pre-wrap;">${
                        validData.message
                      }</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 1.5rem; background-color: #f5f5f5; text-align: center; border-radius: 0 0 8px 8px;">
                      <p style="margin: 0; font-size: 0.875rem; color: #555;">Mensaje enviado el ${new Date().toLocaleDateString(
                        "es-ES",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Enviar email al administrador
    await transporter.sendMail(mailOptions);

    // Opcional: Enviar confirmación al cliente
    const clientMailOptions = {
      from: EMAIL_COMPLAINTS_BOOK,
      to: validData.email,
      subject: `Confirmación de ${formType} - ${ticketNumber}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmación de ${formType}</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="padding: 2rem 1rem; background-color: #e8f5e9;">
                <table width="100%" max-width="600px" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <tr>
                    <td style="padding: 1.5rem; background-color: #43a047; color: white; text-align: center; border-radius: 8px 8px 0 0;">
                      <h1 style="margin: 0; font-size: 1.5rem;">✅ Recibimos su ${formType}</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 2rem;">
                      <p>Estimado/a <strong>${validData.name}</strong>,</p>
                      <p>Hemos recibido su ${formType.toLowerCase()} correctamente. Su número de ticket es: <strong>${ticketNumber}</strong></p>
                      <p>Nos pondremos en contacto con usted a la brevedad posible para darle seguimiento.</p>
                      <p>Agradecemos su paciencia y comprensión.</p>
                      <hr style="margin: 1.5rem 0; border: 0; border-top: 1px solid #eee;">
                      <p><strong>Resumen:</strong></p>
                      <ul style="padding-left: 20px;">
                        <li><strong>Tipo:</strong> ${formType}</li>
                        <li><strong>Fecha:</strong> ${new Date().toLocaleDateString(
                          "es-ES",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 1.5rem; background-color: #f5f5f5; text-align: center; border-radius: 0 0 8px 8px;">
                      <p style="margin: 0; font-size: 0.875rem; color: #555;">Por favor, no responda a este correo electrónico. Es un mensaje generado automáticamente.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Enviar email de confirmación al cliente (opcional)
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json({
      message: `${formType} enviado exitosamente`,
      ticketNumber: ticketNumber,
    });
  } catch (error) {
    console.error("Error enviando el reclamo/queja:", error);
    return NextResponse.json(
      { error: "No se pudo procesar su solicitud. Intente nuevamente." },
      { status: 500 }
    );
  }
}
