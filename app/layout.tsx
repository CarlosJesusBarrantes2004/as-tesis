import { Suspense } from "react";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Loading from "./components/ui/Loading";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import { COMPANY_NAME } from "./data/companyInfo";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Asesoría y Redacción de Tesis Profesional`,
  description:
    "Expertos en asesoría y redacción de tesis de pregrado y posgrado. Obtén orientación profesional para estructurar, desarrollar y finalizar tu investigación con éxito.",
  keywords:
    "tesis, asesoría, redacción, investigación, pregrado, posgrado, académico",
  authors: [{ name: "AS-TESIS" }],
  openGraph: {
    title: "AS-TESIS | Asesoría y Redacción de Tesis Profesional",
    description:
      "Expertos en asesoría de tesis académicas para todos los niveles",
    url: "https://www.as-tesis.com",
    siteName: "AS-TESIS",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AS-TESIS | Asesoría y Redacción de Tesis Profesional",
    description:
      "Expertos en asesoría de tesis académicas para todos los niveles",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans flex flex-col min-h-screen bg-gray-50 text-gray-800 antialiased">
        <Header></Header>
        <Suspense fallback={<Loading></Loading>}>
          <main className="flex-1 flex flex-col space-y-4">{children}</main>
        </Suspense>
        <Footer></Footer>
        <Toaster position="top-center"></Toaster>
      </body>
    </html>
  );
}
