import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const message = `
🚗 NUEVO COCHE - 1ClikCar

Marca: ${data.marca}
Modelo: ${data.modelo}
Año: ${data.año}
Kilómetros: ${data.km}

Provincia: ${data.provincia}
Teléfono: ${data.telefono}

Información adicional:
${data.info || "No indicada"}
`;

  const whatsappUrl = `https://wa.me/34651164708?text=${encodeURIComponent(
    message
  )}`;

  // (Email se añadirá en el siguiente bloque)

  return NextResponse.json({ whatsappUrl });
}
