"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold">
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
      <section className="py-32 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-16 text-center">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Compramos tu coche
            <br />
            <span className="text-blue-700">sin intermediarios</span>
          </h1>

          <p className="text-gray-600 text-lg mb-10">
            Compra directa, análisis profesional y trato transparente.
          </p>

          <a
            href="#form"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl text-lg font-semibold transition"
          >
            Enviar datos del coche
          </a>
        </div>
      </section>

      {/* BLOQUE CONFIANZA */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center">
          <div>
            <p className="text-4xl font-extrabold">Compra directa</p>
            <p className="opacity-80 mt-2">Sin concesionarios</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold">Pago rápido</p>
            <p className="opacity-80 mt-2">Proceso ágil</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold">España</p>
            <p className="opacity-80 mt-2">Operamos a nivel nacional</p>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="form" className="py-32 px-6 bg-gray-100">
        <CompleteForm />
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/34600000000"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-5 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        <MessageCircle size={28} />
      </a>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500">
        © {new Date().getFullYear()} 1ClikCar · Compra directa de vehículos
      </footer>
    </>
  );
}

/* ===========================
   FORMULARIO PROFESIONAL
=========================== */

function CompleteForm() {
  const [form, setForm] = useState({
    marca: "",
    modelo: "",
    año: "",
    km: "",
    combustible: "",
    cambio: "",
    llaves: "",
    accidentes: "",
    estado: "",
    provincia: "",
    telefono: "",
    info: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendForm = async () => {
    const res = await fetch("/api/offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    window.open(data.whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-16">
      <h2 className="text-4xl font-extrabold text-center mb-4">
        Datos del vehículo
      </h2>

      <p className="text-center text-gray-600 mb-12">
        Cuanta más información nos facilites, mejor podremos valorar tu coche.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <input name="marca" placeholder="Marca" onChange={handleChange} className="border p-4 rounded-xl" />
        <input name="modelo" placeholder="Modelo" onChange={handleChange} className="border p-4 rounded-xl" />
        <input name="año" placeholder="Año" onChange={handleChange} className="border p-4 rounded-xl" />
        <input name="km" placeholder="Kilómetros" onChange={handleChange} className="border p-4 rounded-xl" />

        <select name="combustible" onChange={handleChange} className="border p-4 rounded-xl">
          <option value="">Combustible</option>
          <option>Gasolina</option>
          <option>Diésel</option>
          <option>Híbrido</option>
          <option>Eléctrico</option>
        </select>

        <select name="cambio" onChange={handleChange} className="border p-4 rounded-xl">
          <option value="">Cambio</option>
          <option>Manual</option>
          <option>Automático</option>
        </select>

        <select name="llaves" onChange={handleChange} className="border p-4 rounded-xl">
          <option value="">Número de llaves</option>
          <option>1 llave</option>
          <option>2 llaves</option>
        </select>

        <select name="accidentes" onChange={handleChange} className="border p-4 rounded-xl">
          <option value="">¿Ha tenido accidentes?</option>
          <option>No</option>
          <option>Sí, leve</option>
          <option>Sí, grave</option>
        </select>

        <select name="estado" onChange={handleChange} className="border p-4 rounded-xl md:col-span-2">
          <option value="">Estado general del vehículo</option>
          <option>Excelente</option>
          <option>Bueno</option>
          <option>Normal</option>
          <option>Necesita reparaciones</option>
        </select>

        <input name="provincia" placeholder="Provincia" onChange={handleChange} className="border p-4 rounded-xl" />
        <input name="telefono" placeholder="Teléfono / WhatsApp" onChange={handleChange} className="border p-4 rounded-xl" />

        <textarea
          name="info"
          placeholder="Información adicional (extras, averías, observaciones...)"
          onChange={handleChange}
          className="border p-4 rounded-xl md:col-span-2"
        />

        <button
          onClick={sendForm}
          className="md:col-span-2 bg-blue-700 hover:bg-blue-800 text-white py-5 rounded-xl text-lg font-bold transition"
        >
          Enviar información del coche
        </button>
      </div>
    </div>
  );
}
