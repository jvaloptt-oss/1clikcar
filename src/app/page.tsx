"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Clock, Euro } from "lucide-react";

const MDiv: any = motion.div;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4 md:py-6">
        <div className="text-xl md:text-2xl font-extrabold">
          <span className="text-blue-700">1Clik</span>
          <span className="text-black">Car</span>
        </div>

        <a
          href="#form"
          className="hidden md:inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Vender mi coche
        </a>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-20 md:pt-32 pb-16 md:pb-32 px-4 md:px-6">
        <MDiv
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
            Compramos tu coche
            <br />
            <span className="text-blue-700">sin intermediarios</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Oferta directa, trato profesional y compra segura.
          </p>

          <a
            href="#form"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl text-lg font-semibold transition"
          >
            Recibir oferta ahora
          </a>
        </MDiv>
      </section>

      {/* PROCESO */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 md:mb-16">
            Proceso en <span className="text-blue-700">3 pasos</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              { n: "1", t: "Formulario", d: "Envíanos los datos del coche." },
              { n: "2", t: "Contacto", d: "Te escribimos por WhatsApp." },
              { n: "3", t: "Compra", d: "Compra directa y pago seguro." },
            ].map((s, i) => (
              <MDiv
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-5xl font-extrabold text-blue-700 mb-3">
                  {s.n}
                </div>
                <h3 className="text-xl font-bold">{s.t}</h3>
                <p className="text-gray-600 mt-2">{s.d}</p>
              </MDiv>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <section className="bg-blue-900 text-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 md:gap-12 px-4 md:px-6">
          {[
            {
              icon: <Euro size={32} />,
              t: "Precio real",
              d: "Sin subastas ni concesionarios.",
            },
            {
              icon: <Clock size={32} />,
              t: "Rapidez",
              d: "Respuesta clara en pocas horas.",
            },
            {
              icon: <ShieldCheck size={32} />,
              t: "Seguridad",
              d: "Proceso profesional y transparente.",
            },
          ].map((f, i) => (
            <MDiv
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mb-3 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-bold">{f.t}</h3>
              <p className="opacity-80 mt-2 text-sm md:text-base">{f.d}</p>
            </MDiv>
          ))}
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="form" className="py-24 px-4 md:px-6 bg-gray-50">
        <CompleteForm />
      </section>

      {/* BOTÓN FIJO MÓVIL */}
      <a
        href="#form"
        className="fixed bottom-0 left-0 right-0 md:hidden bg-blue-700 text-white text-center py-4 font-bold text-lg z-50"
      >
        Recibir oferta ahora
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/34600000000"
        target="_blank"
        className="fixed bottom-20 md:bottom-6 right-6 bg-green-600 text-white p-5 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        <MessageCircle size={28} />
      </a>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-center py-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} 1ClikCar ·{" "}
        <a href="/quienes-somos" className="underline">Quiénes somos</a> ·{" "}
        <a href="/privacidad" className="underline">Privacidad</a>
      </footer>
    </>
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
    <MDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
        Datos del vehículo
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        {["marca", "modelo", "año", "km", "provincia", "telefono"].map((f) => (
          <input
            key={f}
            name={f}
            placeholder={f.toUpperCase()}
            onChange={handleChange}
            className="border p-4 rounded-xl text-base"
          />
        ))}

        <textarea
          name="info"
          placeholder="Información adicional"
          onChange={handleChange}
          className="border p-4 rounded-xl md:col-span-2"
        />

        <div className="md:col-span-2 flex gap-3 text-xs md:text-sm text-gray-600">
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
          className="md:col-span-2 bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl text-lg font-bold transition"
        >
          Recibir oferta sin compromiso
        </button>
      </div>
    </MDiv>
  );
}
