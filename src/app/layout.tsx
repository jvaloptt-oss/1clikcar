import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "1ClikCar | Compramos tu coche hoy mismo",
  description:
    "Compra directa de coches sin intermediarios. Oferta real, rápida y sin compromiso.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-3J0VG56MPF"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3J0VG56MPF');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
