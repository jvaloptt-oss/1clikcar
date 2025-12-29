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
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-16">
            Proceso simple en <span className="text-blue-700">3 pasos</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <Step
              number="1"
              title="Rellena el formulario"
              text="Indícanos los datos básicos y el estado real de tu vehículo."
            />
            <Step
              number="2"
              title="Te contactamos"
              text="Un especialista revisa la información y te contacta por WhatsApp."
            />
            <Step
              number="3"
              title="Compra inmediata"
              text="Si aceptas la oferta, compramos tu coche de forma directa."
            />
          </div>
        </div>
      </section>

      {/* DIFERENCIA */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <Feature
            icon={<Euro size={36} />}
            title="Precio real"
            text="Sin subastas ni intermediarios. Oferta directa y honesta."
          />
          <Feature
            icon={<Clock size={36} />}
            title="Rapidez"
            text="Proceso ágil, sin esperas innecesarias ni llamadas comerciales."
          />
          <Feature
            icon={<ShieldCheck size={36} />}
            title="Seguridad"
            text="Gestión profesional, documentación clara y trato transparente."
          />
        </div>
      </section>

      {/* QUE COMPRAMOS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            ¿Qué coches compramos?
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Compramos turismos, SUV, deportivos, coches premium y vehículos con
            uso diario. Estudiamos cada caso de forma individual.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {["Gasolina", "Diésel", "Híbridos", "Eléctricos"].map((t) => (
              <div
                key={t}
                className="bg-white p-6 rounded-xl shadow text-lg font-semibold"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="form" className="py-32 bg-white px-6">
        <CompleteForm />
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/34651164708"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-5 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        <MessageCircle size={28} />
      </a>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-center py-10 text-gray-500">
        © {new Date().getFullYear()} 1ClikCar · Compra directa de vehículos en
        España
      </footer>
    </>
  );
}

/* COMPONENTES */

function Step({ number, title, text }: any) {
  return (
    <div>
      <div className="text-blue-700 text-6xl font-extrabold mb-4">
        {number}
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function Feature({ icon, title, text }: any) {
  return (
    <div className="text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="opacity-80">{text}</p>
    </div>
  );
}

/* FORMULARIO */

function CompleteForm() {
  const [form, setForm] = useState<any>({});

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl shadow-2xl p-16">
      <h2 className="text-4xl font-extrabold text-center mb-10">
        Información del vehículo
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          "Marca",
          "Modelo",
          "Año",
          "Kilómetros",
          "Provincia",
          "Teléfono / WhatsApp",
        ].map((p) => (
          <input
            key={p}
            name={p}
            placeholder={p}
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
        <div className="md:col-span-2 flex items-start gap-3 text-sm text-gray-600">
  <input
    type="checkbox"
    required
    className="mt-1 accent-blue-700"
  />
  <p>
    He leído y acepto la{" "}
    <a href="/privacidad" className="text-blue-700 underline">
      política de privacidad
    </a>{" "}
    y autorizo el tratamiento de mis datos.
  </p>
</div>

        <button className="md:col-span-2 bg-blue-700 hover:bg-blue-800 text-white py-5 rounded-xl text-lg font-bold transition">
          Enviar información
        </button>
      </div>
    </div>
  );
}
