import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "1ClikCar | Compramos tu coche en toda España",
  description:
    "Compra directa de coches sin intermediarios. Valoración profesional y pago rápido en toda España.",
  keywords: [
    "comprar coche",
    "vender coche",
    "compramos tu coche",
    "venta coche usada",
    "tasación coche",
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    import "./globals.css";
import Script from "next/script";

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
          src={`https://www.googletagmanager.com/gtag/js?id=G-TSSTESBTP0`}
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TSSTESBTP0', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  );
}

  );
}
