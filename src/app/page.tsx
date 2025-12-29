"use client";

import { useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { MessageCircle, ShieldCheck, Clock, Euro } from "lucide-react";

/* =====================
   FIX TYPING FRAMER
===================== */
const MotionDiv = (props: HTMLMotionProps<"div">) => (
  <motion.div {...props} />
);

/* =====================
   ANIMATION VARIANTS
===================== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

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
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
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
        </MotionDiv>
      </section>

      {/* PROCESO */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-16">
            Proceso en <span className="text-blue-700">3 pasos</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: "1", t: "Formulario", d: "Rellena los datos del coche." },
              { n: "2", t: "Contacto", d: "Te llamamos o escribimos." },
              { n: "3", t: "Compra", d: "Compra directa y segura." },
            ].map((s, i) => (
              <MotionDiv
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="text-6xl font-extrabold text-blue-700 mb-4">
                  {s.n}
                </div>
                <h3 className="text-2xl font-bold">{s.t}</h3>
                <p className="text-gray-600 mt-2">{s.d}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6">
          {[
            {
              icon: <Euro size={36} />,
              t: "Precio real",
              d: "Oferta directa sin subastas.",
            },
            { icon: <Clock size={36} />, t: "Rapidez", d: "Proceso ágil y claro." },
            {
              icon: <ShieldCheck size={36} />,
              t: "Seguridad",
              d: "Compra profesional.",
            },
          ].map((f, i) => (
            <MotionDiv
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="text-2xl font-bold">{f.t}</h3>
              <p className="opacity-80 mt-2">{f.d}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="form" className="py-32 px-6 bg-gray-50">
        <CompleteForm />
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
        <a href="/quienes-somos" className="underline">
          Quiénes somos
        </a>{" "}
        ·{" "}
        <a href="/privacidad" className="underline">
          Privacidad
        </a>
      </footer>
    </>
  );
}

/* =====================
   FORMULARIO
===================== */
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
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-16"
    >
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
          placeholder="Información adicional"
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
          Recibir oferta sin compromiso
        </button>
      </div>
    </MotionDiv>
  );
}
