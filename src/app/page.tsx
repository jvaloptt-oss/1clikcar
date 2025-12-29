"use client";

import { useState } from "react";
import { MessageCircle, ShieldCheck, Clock, Euro } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-extrabold">
          <span className="text-blue-700">1Clik</span>
          <span className="text-black">Car</span>
        </div>

        <a
          href="#form"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Vender mi coche
        </a>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Compramos tu coche
            <br />
            <span className="text-blue-700">de forma directa y segura</span>
          </h1>

          <p className="text-gray-600 text-xl mb-10 max-w-3xl mx-auto">
            Sin intermediarios, sin concesionarios y sin pérdida de tiempo.
            Valoración profesional y compra inmediata.
          </p>

          <a
            href="#form"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-12 py-5 rounded-xl text-lg font-semibold transition"
          >
            Enviar datos del vehículo
          </a>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-16">
            Proceso en <span className="text-blue-700">3 pasos</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <Step number="1" title="Formulario" text="Rellena los datos del coche." />
            <Step number="2" title="Contacto" text="Te llamamos o escribimos." />
            <Step number="3" title="Compra" text="Compra directa y segura." />
          </div>
        </div>
      </section>

      {/* METRICAS */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <Metric number="+1.200" label="Coches analizados" />
            <Metric number="24h" label="Tiempo medio de respuesta" />
            <Metric number="100%" label="Compra directa" />
            <Metric number="España" label="Cobertura nacional" />
          </div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6">
          <Feature
            icon={<Euro size={36} />}
            title="Precio real"
            text="Oferta directa sin subastas ni intermediarios."
          />
          <Feature
            icon={<Clock size={36} />}
            title="Rapidez"
            text="Respuesta clara y proceso ágil."
          />
          <Feature
            icon={<ShieldCheck size={36} />}
            title="Seguridad"
            text="Compra profesional y documentación clara."
          />
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-16">
            Opiniones de clientes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              text="Proceso muy claro y sin sorpresas. Pago rápido y trato profesional."
              author="Carlos · Madrid"
            />
            <Testimonial
              text="Nada que ver con concesionarios. Trato directo y transparente."
              author="Laura · Valencia"
            />
            <Testimonial
              text="Desde el primer contacto me dieron confianza. Repetiría."
              author="Miguel · Sevilla"
            />
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="form" className="py-32 px-6 bg-gray-50">
        <CompleteForm />
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-16">
            Preguntas frecuentes
          </h2>

          <FAQ q="¿La valoración es gratuita?" a="Sí, totalmente gratuita y sin compromiso." />
          <FAQ q="¿Tengo que aceptar la oferta?" a="No, tú decides si te encaja." />
          <FAQ q="¿Cómo se realiza el pago?" a="Transferencia bancaria segura." />
          <FAQ q="¿Compráis coches con muchos kilómetros?" a="Sí, analizamos cada caso individualmente." />
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/34600000000"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-5 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        <MessageCircle size={28} />
      </a>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-center py-10 text-gray-500">
        © {new Date().getFullYear()} 1ClikCar ·{" "}
        <a href="/quienes-somos" className="underline">Quiénes somos</a> ·{" "}
        <a href="/privacidad" className="underline">Privacidad</a>
      </footer>
    </>
  );
}

/* COMPONENTES */

function Step({ number, title, text }: any) {
  return (
    <div>
      <div className="text-6xl font-extrabold text-blue-700 mb-4">{number}</div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{text}</p>
    </div>
  );
}

function Feature({ icon, title, text }: any) {
  return (
    <div className="text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="opacity-80 mt-2">{text}</p>
    </div>
  );
}

function Metric({ number, label }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-4xl font-extrabold text-blue-700 mb-2">
        {number}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}

function Testimonial({ text, author }: any) {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl shadow">
      <p className="text-gray-700 mb-6 italic">“{text}”</p>
      <p className="font-semibold text-blue-700">{author}</p>
    </div>
  );
}

function FAQ({ q, a }: any) {
  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg mb-2">{q}</h3>
      <p className="text-gray-600">{a}</p>
    </div>
  );
}

/* FORMULARIO */

function CompleteForm() {
  const [form, setForm] = useState<any>({});

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendForm = async () => {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    window.open(data.whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-16">
      <h2 className="text-4xl font-extrabold text-center mb-10">
        Información del vehículo
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {["marca", "modelo", "año", "km", "provincia", "telefono"].map((f) => (
          <input
            key={f}
            name={f}
            placeholder={f.toUpperCase()}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />
        ))}

        <textarea
          name="info"
          placeholder="Información adicional (estado, extras, observaciones...)"
          onChange={handleChange}
          className="border p-4 rounded-xl md:col-span-2"
        />

        <div className="md:col-span-2 flex gap-3 text-sm text-gray-600">
          <input type="checkbox" required />
          <p>
            Acepto la{" "}
            <a href="/privacidad" className="text-blue-700 underline">
              política de privacidad
            </a>
          </p>
        </div>

        <button
          onClick={sendForm}
          className="md:col-span-2 bg-blue-700 hover:bg-blue-800 text-white py-5 rounded-xl text-lg font-bold transition"
        >
          Enviar información
        </button>
      </div>
    </div>
  );
}
