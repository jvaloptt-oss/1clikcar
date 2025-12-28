import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const message = `
🚗 NUEVO COCHE
Marca: ${data.marca}
Modelo: ${data.modelo}
Año: ${data.año}
KM: ${data.km}
Provincia: ${data.provincia}
Teléfono: ${data.telefono}

Info:
${data.info}
`;

  return NextResponse.json({
    whatsappUrl: `https://wa.me/34651164708?text=${encodeURIComponent(
      message
    )}`,
  });
}
