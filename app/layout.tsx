import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "1ClikCar | Compra directa de coches",
  description: "Compramos tu coche de forma inmediata y sin intermediarios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} bg-gradient-to-b from-gray-100 via-white to-gray-200 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
