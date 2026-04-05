import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScanDrive: Escáner Automotriz a Domicilio en Santiago | Diagnóstico y Pre-Compra",
  description:
    "ScanDrive ofrece servicio de escáner automotriz a domicilio en Santiago y la Región Metropolitana. Diagnóstico electrónico profesional, revisión pre-compra y más. Agenda tu cita hoy.",
  metadataBase: new URL("https://scandrive.cl"),
  alternates: {
    canonical: "https://scandrive.cl",
  },
  openGraph: {
    title: "ScanDrive: Escáner Automotriz a Domicilio en Santiago",
    description:
      "Diagnóstico electrónico profesional y revisión pre-compra a domicilio en toda la Región Metropolitana. Servicio rápido y confiable.",
    url: "https://scandrive.cl",
    siteName: "ScanDrive",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ScanDrive - Escáner Automotriz a Domicilio en Santiago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScanDrive: Escáner Automotriz a Domicilio en Santiago",
    description:
      "Diagnóstico electrónico profesional y revisión pre-compra a domicilio en toda la Región Metropolitana.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "ScanDrive",
  url: "https://scandrive.cl",
  telephone: "+56967014233",
  description:
    "Servicio de escáner automotriz a domicilio en Santiago y la Región Metropolitana. Diagnóstico electrónico profesional, revisión pre-compra vehicular.",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Región Metropolitana, Santiago, Chile",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios ScanDrive",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Escáner Automotriz",
          description: "Diagnóstico electrónico completo de tu vehículo a domicilio.",
        },
        priceCurrency: "CLP",
        priceRange: "$25.000 - $45.000",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diagnóstico Profesional",
          description: "Lectura y análisis de códigos de falla con equipo profesional.",
        },
        priceCurrency: "CLP",
        priceRange: "$25.000 - $45.000",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inspección Pre-Compra",
          description:
            "Revisión completa del vehículo antes de la compra para tomar decisiones informadas.",
        },
        priceCurrency: "CLP",
        priceRange: "$25.000 - $45.000",
      },
    ],
  },
  priceRange: "$25.000 - $45.000 CLP",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
