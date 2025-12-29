"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-5">
        <div className="text-2xl font-extrabold">
          <span className="text-blue-700">1Clik</span>
          <span className="text-black">Car</span>
        </div>

        <a
          href="#form"
          className="hidden md:inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Recibir oferta
        </a>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Compramos tu coche <br />
            <span className="text-blue-700">hoy mismo</span>
          </h1>

          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Oferta directa y real. Sin intermediarios y sin compromiso.
          </p>

          <a
            href="#form"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl text-lg font-bold"
          >
            Recibir oferta sin compromiso
          </a>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16">
            Así de fácil es vender tu coche
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <Step n="1" title="Formulario rápido" text="Rellena los datos básicos." />
            <Step n="2" title="Oferta real" text="Te contactamos por WhatsApp." />
            <Step n="3" title="Tú decides" text="Aceptas solo si te encaja." />
          </div>
        </div>
      </section>

      {/* BLOQUE CONFIANZA */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
            ¿Por qué vender con <span className="text-blue-700">1ClikCar</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <Trust title="Compra directa" text="No intermediarios ni concesionarios." />
            <Trust title="Sin compromiso" text="Tú decides si aceptas la oferta." />
            <Trust title="Pago seguro" text="Transferencia bancaria clara." />
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16">
            Opiniones de clientes
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <Testimonial text="Proceso rápido y claro. Muy recomendable." name="Carlos · Madrid" />
            <Testimonial text="Trato serio y sin presión." name="Laura · Valencia" />
            <Testimonial text="Oferta justa y directa." name="Javier · Sevilla" />
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="form" className="py-24 px-4 bg-gray-50">
        <Form />
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-16">
            Preguntas frecuentes
          </h2>

          <FAQ q="¿La oferta es gratuita?" a="Sí, totalmente gratuita." />
          <FAQ q="¿Tengo que vender el coche?" a="No, tú decides." />
          <FAQ q="¿Cómo se paga?" a="Transferencia bancaria segura." />
        </div>
      </section>

      {/* BOTÓN MÓVIL */}
      <a
        href="#form"
        className="fixed bottom-0 left-0 right-0 md:hidden bg-blue-700 text-white text-center py-4 font-bold text-lg z-50"
      >
        Quiero mi oferta
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/34651164708"
        target="_blank"
        className="fixed bottom-20 md:bottom-6 right-6 bg-green-600 text-white p-5 rounded-full shadow-xl z-50"
      >
        <MessageCircle size={28} />
      </a>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-center py-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} 1ClikCar ·{" "}
        <a href="/aviso-legal" className="underline">Aviso legal</a> ·{" "}
        <a href="/privacidad" className="underline">Privacidad</a> ·{" "}
        <a href="/cookies" className="underline">Cookies</a>
      </footer>
    </>
  );
}

/* COMPONENTES */

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div>
      <div className="text-5xl font-extrabold text-blue-700 mb-4">{n}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function Trust({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function Testimonial({ text, name }: { text: string; name: string }) {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl shadow">
      <p className="text-gray-600 mb-4">“{text}”</p>
      <p className="font-bold">{name}</p>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg mb-2">{q}</h3>
      <p className="text-gray-600">{a}</p>
    </div>
  );
}

function Form() {
  const [form, setForm] = useState<any>({});

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendForm = () => {
    const text = `
Marca: ${form.marca || ""}
Modelo: ${form.modelo || ""}
Año: ${form.año || ""}
KM: ${form.km || ""}
Provincia: ${form.provincia || ""}
Teléfono: ${form.telefono || ""}
Info: ${form.info || ""}
    `;
    window.open(
      `https://wa.me/34651164708?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
        Recibe tu oferta sin compromiso
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
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
          placeholder="Información adicional"
          onChange={handleChange}
          className="border p-4 rounded-xl md:col-span-2"
        />

        <button
          onClick={sendForm}
          className="md:col-span-2 bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl text-lg font-bold"
        >
          Quiero mi oferta
        </button>
      </div>
    </div>
  );
}
