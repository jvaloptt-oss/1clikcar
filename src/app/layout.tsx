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
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
