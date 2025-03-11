import { ContactSchema } from "@/app/components/contact/form/schema";
import { EMAIL_PASS, EMAIL_RECEIVER, EMAIL_USER } from "@/config";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getServiceName(serviceKey: string) {
  const services: { [key: string]: string } = {
    tesis: "Asesoría de Tesis",
    redaccion: "Redacción Académica",
    presentacion: "Presentación y Verificación",
    estadistica: "Análisis Estadístico",
    proyectos: "Proyectos Especiales",
  };
  return services[serviceKey] || "Servicio no especificado";
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validar los datos con Zod (opcional, pero recomendado)
    const validationResult = ContactSchema.safeParse(data);
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

    if (!EMAIL_USER || !EMAIL_PASS)
      return NextResponse.json(
        {
          error: "Error en la configuración del servidor de correo",
        },
        { status: 500 }
      );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Generar un número de referencia para seguimiento
    const referenceNumber = `CONT-${new Date().getFullYear()}-${Math.floor(
      Math.random() * 10000
    )
      .toString()
      .padStart(4, "0")}`;

    // Email para el administrador
    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_RECEIVER || EMAIL_USER,
      subject: "📄 Nuevo mensaje de contacto - " + validData.name,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nuevo Contacto - ${validData.name}</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; color: #1a1a1a;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="padding: 2rem 1rem; background-color: #f8f9fa;">
                <table width="100%" max-width="600px" border="0" cellspacing="0" cellpadding="0">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 2rem; background-color: #ffffff; border-radius: 8px 8px 0 0; border-bottom: 2px solid #e9ecef;">
                      <h1 style="margin: 0; color: #2d3436; font-size: 1.5rem;">
                        📬 Nuevo mensaje de contacto
                      </h1>
                      <p style="margin: 0.5rem 0 0; font-size: 1rem; color: #6c757d;">Referencia: ${referenceNumber}</p>
                    </td>
                  </tr>
    
                  <!-- Datos del usuario -->
                  <tr>
                    <td style="padding: 2rem; background-color: #ffffff;">
                      <h2 style="margin: 0 0 1rem 0; color: #2d3436; font-size: 1.25rem;">Información del contacto</h2>
                      
                      <table cellpadding="5" style="width: 100%;">
                        <tr>
                          <td width="30%" style="color: #6c757d; padding: 0.5rem 0;">Nombre:</td>
                          <td style="padding: 0.5rem 0; font-weight: 500;">${
                            validData.name
                          }</td>
                        </tr>
                        <tr>
                          <td style="color: #6c757d; padding: 0.5rem 0;">Teléfono:</td>
                          <td style="padding: 0.5rem 0;">
                            <a href="tel:${
                              validData.tel
                            }" style="color: #2d3436; text-decoration: none;">
                              ${validData.tel}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="color: #6c757d; padding: 0.5rem 0;">Correo:</td>
                          <td style="padding: 0.5rem 0;">
                            <a href="mailto:${
                              validData.email
                            }" style="color: #007bff; text-decoration: none;">
                              ${validData.email}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="color: #6c757d; padding: 0.5rem 0;">Servicio:</td>
                          <td style="padding: 0.5rem 0;">
                            <span style="display: inline-block; padding: 0.25rem 0.75rem; background-color: #e9ecef; border-radius: 20px;">
                              ${getServiceName(validData.service)}
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
    
                  <!-- Mensaje -->
                  <tr>
                    <td style="padding: 0 2rem 2rem 2rem; background-color: #ffffff;">
                      <div style="border-top: 1px solid #e9ecef; padding-top: 2rem;">
                        <h3 style="margin: 0 0 1rem 0; color: #2d3436; font-size: 1.1rem;">Mensaje:</h3>
                        <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 4px; line-height: 1.6; white-space: pre-wrap;">
                          ${
                            validData.message ||
                            "<em style='color: #6c757d;'>No se incluyó mensaje</em>"
                          }
                        </div>
                      </div>
                    </td>
                  </tr>
    
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 1.5rem 2rem; background-color: #ffffff; border-radius: 0 0 8px 8px; border-top: 1px solid #e9ecef;">
                      <p style="margin: 0; color: #6c757d; font-size: 0.875rem;">
                        Mensaje enviado desde el formulario de contacto • ${new Date().toLocaleDateString(
                          "es-ES",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </p>
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

    // Email de confirmación para el cliente
    const clientMailOptions = {
      from: EMAIL_USER,
      to: validData.email,
      subject: "✅ Hemos recibido tu mensaje",
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmación de Contacto</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; color: #1a1a1a;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="padding: 2rem 1rem; background-color: #f0f7ff;">
                <table width="100%" max-width="600px" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 2rem; background-color: #0070f3; color: white; text-align: center; border-radius: 8px 8px 0 0;">
                      <h1 style="margin: 0; font-size: 1.5rem;">✅ Hemos recibido tu mensaje</h1>
                    </td>
                  </tr>
                  
                  <!-- Contenido -->
                  <tr>
                    <td style="padding: 2rem;">
                      <p style="margin-top: 0;">Estimado/a <strong>${
                        validData.name
                      }</strong>,</p>
                      
                      <p>Gracias por contactarnos. Hemos recibido tu mensaje correctamente y nos pondremos en contacto contigo lo antes posible.</p>
                      
                      <p>Si tienes alguna consulta adicional, puedes responder a este correo o contactarnos por teléfono.</p>
                      
                      <div style="margin: 2rem 0; padding: 1.5rem; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #0070f3;">
                        <h3 style="margin-top: 0; color: #0070f3;">Resumen de tu mensaje:</h3>
                        <p><strong>Referencia:</strong> ${referenceNumber}</p>
                        <p><strong>Servicio:</strong> ${getServiceName(
                          validData.service
                        )}</p>
                        <p><strong>Fecha:</strong> ${new Date().toLocaleDateString(
                          "es-ES",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}</p>
                      </div>
                      
                      <p>Saludos cordiales,</p>
                      <p><strong>El equipo de AS-Tesis</strong></p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 1.5rem; background-color: #f8fafc; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e9ecef;">
                      <p style="margin: 0; font-size: 0.875rem; color: #6c757d;">Este es un mensaje automático, por favor no respondas directamente a este correo.</p>
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

    // Enviar email de confirmación al cliente
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json({
      message: "Mensaje enviado exitosamente",
      reference: referenceNumber,
    });
  } catch (error) {
    console.error("Error enviando el correo:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intente nuevamente." },
      { status: 500 }
    );
  }
}
