"use client";

import { useState, useEffect } from "react";

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const serviciosOpciones = [
    { value: "Escáner Básico", label: "Escáner Básico ($25.000)" },
    { value: "Diagnóstico Profesional", label: "Diagnóstico Profesional ($45.000)" },
    { value: "Inspección Pre-Compra", label: "Inspección Pre-Compra ($45.000)" },
    { value: "Consulta Técnica", label: "Solo Consulta Técnica (Gratis)" },
  ];

  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    ubicacion: "",
    servicio: "Diagnóstico Profesional",
    problema: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility based on 50% of the viewport height (approx 1/2 of Hero)
      if (window.scrollY > window.innerHeight / 8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        // Opcional: Si el usuario vuelve a lo alto de todo, cerramos el pop-up
        if (isOpen) setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initial state in case user already scrolled down on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "56967014233"; // Número de ScanDrive

    // Construir el mensaje predeterminado
    const msg = `Hola ScanDrive, me gustaría agendar su servicio.
    
*Nombre:* ${formData.nombre}
*Ubicación:* ${formData.ubicacion}
*Servicio Solicitado:* ${formData.servicio}

*Breve descripción del problema:*
${formData.problema}

Por favor confírmenme disponibilidad para una visita. ¡Gracias!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");

    // Cerramos el widget tras enviar
    setIsOpen(false);

    // Reseteamos el form (opcional)
    setFormData({
      nombre: "",
      ubicacion: "",
      servicio: "Diagnóstico Profesional",
      problema: "",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ease-out 
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"}`}
    >
      {/* Pop-up Formulario */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 mb-2 w-[340px] max-w-[calc(100vw-3rem)] rounded-2xl bg-brand-white p-6 shadow-2xl border border-zinc-200 text-brand-black animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-black text-brand-black">¿Chateamos?</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-brand-black transition-colors"
              aria-label="Cerrar chat"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <p className="text-sm text-zinc-600 mb-5 leading-relaxed">
            Estás a un paso de identificar el problema de tu auto. Llena estos datos rápido y el técnico sabrá exactamente cómo ayudarte por WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                required
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre y apellido"
                className="w-full rounded-md border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm focus:border-brand-yellow focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-colors placeholder:text-zinc-400"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="ubicacion"
                value={formData.ubicacion}
                onChange={handleChange}
                placeholder="Ubicación rápida (Ej: Ñuñoa)"
                className="w-full rounded-md border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm focus:border-brand-yellow focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-colors placeholder:text-zinc-400"
              />
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full flex items-center justify-between rounded-md border text-sm transition-colors px-3 py-2 text-left ${
                  isDropdownOpen 
                    ? "border-brand-yellow bg-white ring-2 ring-brand-yellow/50" 
                    : "border-zinc-300 bg-zinc-50 hover:bg-zinc-100"
                }`}
              >
                <span className={formData.servicio ? "text-brand-black" : "text-zinc-500"}>
                  {serviciosOpciones.find((opt) => opt.value === formData.servicio)?.label || "Selecciona un servicio"}
                </span>
                <svg
                  className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-zinc-200 rounded-md shadow-xl py-1 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                  {serviciosOpciones.map((opcion) => (
                    <button
                      key={opcion.value}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, servicio: opcion.value });
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        formData.servicio === opcion.value
                          ? "bg-brand-yellow/10 text-brand-black font-semibold"
                          : "text-zinc-700 hover:bg-zinc-50 hover:text-brand-black"
                      }`}
                    >
                      {opcion.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div>
              <textarea
                required
                name="problema"
                value={formData.problema}
                onChange={handleChange}
                placeholder="Breve descripción de la falla o auto a comprar..."
                rows={3}
                className="w-full resize-none rounded-md border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm focus:border-brand-yellow focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-colors placeholder:text-zinc-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 rounded-md bg-brand-yellow py-3 text-sm font-bold text-brand-black transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 0C5.385 0 .003 5.385.003 12.031c0 2.12.553 4.195 1.603 6.012L.09 23.639l5.748-1.507c1.761 1 3.754 1.526 5.807 1.526 6.648 0 12.03-5.386 12.03-12.031S18.293 0 12.031 0zm0 21.651c-1.84 0-3.642-.494-5.215-1.428l-.373-.221-3.873 1.016 1.034-3.774-.243-.387a10.02 10.02 0 01-1.533-5.309c0-5.545 4.512-10.057 10.057-10.057 5.543 0 10.054 4.511 10.054 10.057 0 5.545-4.511 10.054-10.054 10.054zm5.518-7.534c-.302-.151-1.791-.884-2.068-.985-.278-.101-.482-.151-.684.151-.202.302-.782.985-.959 1.186-.176.201-.354.226-.656.076-1.579-.785-2.732-1.745-3.791-3.535-.177-.302.261-.277.838-1.431.101-.201.051-.378-.025-.529-.076-.151-.684-1.652-.937-2.262-.246-.593-.497-.513-.684-.523-.176-.01-.378-.01-.58-.01s-.529.076-.807.378c-.278.302-1.06 1.033-1.06 2.518s1.085 2.915 1.236 3.116c.151.201 2.122 3.238 5.138 4.538 1.956.845 2.7.935 3.551.785.807-.142 2.624-1.072 2.991-2.109.366-1.037.366-1.926.257-2.109-.11-.183-.412-.284-.714-.435z" />
              </svg>
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      )}

      {/* Botón Flotante Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar Chat" : "Abrir Chat WhatsApp"}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow text-brand-black shadow-2xl transition-transform hover:scale-110 relative ml-auto"
      >
        {!isOpen && <span className="absolute inset-0 rounded-full bg-brand-yellow animate-ping opacity-20"></span>}

        {isOpen ? (
          // Icono X para cerrar
          <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          // Icono WhatsApp
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-9 w-9 relative z-10">
            <path d="M12.031 0C5.385 0 .003 5.385.003 12.031c0 2.12.553 4.195 1.603 6.012L.09 23.639l5.748-1.507c1.761 1 3.754 1.526 5.807 1.526 6.648 0 12.03-5.386 12.03-12.031S18.293 0 12.031 0zm0 21.651c-1.84 0-3.642-.494-5.215-1.428l-.373-.221-3.873 1.016 1.034-3.774-.243-.387a10.02 10.02 0 01-1.533-5.309c0-5.545 4.512-10.057 10.057-10.057 5.543 0 10.054 4.511 10.054 10.057 0 5.545-4.511 10.054-10.054 10.054zm5.518-7.534c-.302-.151-1.791-.884-2.068-.985-.278-.101-.482-.151-.684.151-.202.302-.782.985-.959 1.186-.176.201-.354.226-.656.076-1.579-.785-2.732-1.745-3.791-3.535-.177-.302.261-.277.838-1.431.101-.201.051-.378-.025-.529-.076-.151-.684-1.652-.937-2.262-.246-.593-.497-.513-.684-.523-.176-.01-.378-.01-.58-.01s-.529.076-.807.378c-.278.302-1.06 1.033-1.06 2.518s1.085 2.915 1.236 3.116c.151.201 2.122 3.238 5.138 4.538 1.956.845 2.7.935 3.551.785.807-.142 2.624-1.072 2.991-2.109.366-1.037.366-1.926.257-2.109-.11-.183-.412-.284-.714-.435z" />
          </svg>
        )}
      </button>
    </div>
  );
}
