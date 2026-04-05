import Image from "next/image";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  const checkIcon = (
    <svg className="h-5 w-5 flex-shrink-0 text-brand-yellow" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="relative font-roboto bg-brand-white text-brand-black antialiased">
      {/* Botón flotante WhatsApp Animado */}
      <WhatsAppWidget />

      {/* ===== HEADER / NAVEGACIÓN ===== */}
      <header id="site-header" className="sticky top-0 z-40 w-full bg-brand-black shadow-md">
        <nav aria-label="Navegación principal" className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="https://scandrive.cl" aria-label="ScanDrive - Inicio" className="flex items-center">
            <svg className="h-[40px] w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 63.77"><rect width="63.77" height="63.77" rx="4.27" ry="4.27" /><rect width="281.3" height="63.77" x="68.7" fill="#fdc606" rx="4.27" ry="4.27" /><path fill="#fff" d="M51.66 21.92V8.36l-27.04.13s-12.5 1.42-12.5 12.48c0 8.43 5.34 11.89 7.87 13.05-7.61.28-7.87 6.63-7.87 6.63v13.56l27.04-.13s12.5-1.42 12.5-12.48c0-8.43-5.34-11.89-7.87-13.05 7.61-.28 7.87-6.63 7.87-6.63M29.33 47.04V34h-7.69l12.79-18.48v13.04h7.69z" /><path d="M101.89 53.21c-5.72 0-10.14-1.29-13.24-3.87-3.11-2.58-4.66-6.24-4.66-10.99h9.88c.08 2.05.83 3.66 2.26 4.81s3.38 1.73 5.86 1.73c2.19 0 3.95-.43 5.28-1.28s2-1.98 2-3.38q0-1.815-1.74-2.97c-1.16-.77-3.04-1.42-5.63-1.96l-4.41-.89c-8.45-1.73-12.67-5.77-12.67-12.12 0-2.65.71-4.98 2.12-6.98 1.41-2.01 3.38-3.57 5.92-4.69 2.53-1.12 5.48-1.68 8.84-1.68 5.14 0 9.2 1.24 12.18 3.73s4.53 5.93 4.66 10.32h-9.59c-.15-1.77-.86-3.16-2.13-4.19s-2.93-1.54-4.98-1.54-3.56.42-4.79 1.27c-1.24.84-1.86 1.94-1.86 3.28 0 1.17.54 2.11 1.63 2.82s2.86 1.31 5.31 1.81l3.77.75c4.76.94 8.22 2.4 10.38 4.36 2.16 1.97 3.24 4.61 3.24 7.93 0 4.32-1.55 7.69-4.66 10.11q-4.665 3.63-12.96 3.63Zm33.82 0c-3.15 0-5.9-.67-8.25-2a14.1 14.1 0 0 1-5.5-5.57c-1.31-2.38-1.97-5.15-1.97-8.32s.66-5.92 1.97-8.31 3.15-4.25 5.51-5.59c2.36-1.33 5.11-2 8.23-2 2.82 0 5.33.54 7.52 1.61s3.93 2.56 5.23 4.46 2.02 4.09 2.17 6.57h-9.56c-.15-1.44-.69-2.6-1.6-3.47s-2.1-1.31-3.56-1.31c-1.86 0-3.31.72-4.33 2.15-1.03 1.43-1.54 3.39-1.54 5.89s.52 4.46 1.55 5.89c1.04 1.43 2.48 2.15 4.32 2.15q2.19 0 3.51-1.32c1.32-1.32 1.42-2.06 1.61-3.54h9.59c-.08 2.48-.75 4.67-2.03 6.58s-3.02 3.41-5.24 4.51c-2.22 1.09-4.77 1.64-7.64 1.64Zm25.93-.18c-3.05 0-5.55-.74-7.5-2.23s-2.92-3.75-2.92-6.78c0-2.28.53-4.09 1.6-5.41s2.49-2.3 4.28-2.94 3.76-1.04 5.93-1.21q4.095-.345 5.76-.84c1.11-.33 1.67-.95 1.67-1.87v-.14c0-.9-.38-1.64-1.14-2.2-.76-.57-1.79-.85-3.1-.85-1.38 0-2.48.31-3.3.92s-1.27 1.44-1.37 2.48h-9.21c.21-3.3 1.53-5.88 3.96-7.73s5.85-2.78 10.26-2.78 7.8.93 10.16 2.78 3.54 4.46 3.54 7.82v20.47h-9.67v-4.26h-.11c-.9 1.63-2.06 2.84-3.48 3.61s-3.21 1.17-5.36 1.17Zm3.03-6.47c1.65 0 3.04-.46 4.18-1.37 1.13-.91 1.7-2.12 1.7-3.61v-2.76q-.78.375-2.16.66c-1.38.285-2 .39-3.22.6-1.32.21-2.41.6-3.27 1.15-.85.56-1.28 1.33-1.28 2.33 0 .94.37 1.67 1.12 2.2s1.73.79 2.94.79Zm28.09-10.57v16.53h-9.91V22.11h9.79v4.92c1.02-1.73 2.31-3.09 3.89-4.09q2.355-1.5 5.79-1.5c3.3 0 5.87 1.06 7.7 3.17s2.75 5.04 2.75 8.78v19.12h-9.91V35.46c0-1.8-.43-3.18-1.3-4.13-.86-.95-2.08-1.43-3.66-1.43s-2.8.49-3.74 1.48q-1.41 1.485-1.41 4.59Zm37.8 16.53h-13.88V9.61h14.31c4.2 0 7.83.86 10.87 2.59s5.38 4.19 7.01 7.39 2.45 7 2.45 11.42-.82 8.26-2.46 11.47-4.01 5.69-7.11 7.43q-4.65 2.61-11.19 2.61m-7.48-5.56h7.08q7.515 0 11.13-4.23c2.41-2.82 3.61-6.73 3.61-11.72s-1.19-8.85-3.57-11.65c-2.38-2.79-5.96-4.19-10.74-4.19h-7.52v31.79Zm31.05 5.56V22.11h5.82v4.92h.12c.56-1.67 1.43-2.97 2.63-3.9s2.77-1.4 4.71-1.4c.46 0 .88.02 1.27.06s.7.07.95.09v5.67c-.23-.06-.64-.12-1.24-.19-.59-.07-1.25-.1-1.96-.1-1.71 0-3.17.6-4.39 1.79s-1.83 3.02-1.83 5.5v17.97zm20.21-35.65c-1.07 0-1.98-.36-2.72-1.08q-1.11-1.08-1.11-2.64c0-1.56.37-1.94 1.11-2.66s1.65-1.08 2.72-1.08 1.99.36 2.74 1.08 1.12 1.61 1.12 2.66-.37 1.91-1.12 2.64-1.66 1.08-2.74 1.08m-3.03 35.65V22.11h6.08v30.41zm18.82 0-11.58-30.41h6.51l6.05 16.67c.42 1.19.83 2.38 1.21 3.57s.77 2.37 1.15 3.54c.38-1.17.77-2.35 1.15-3.54s.78-2.38 1.18-3.57l5.96-16.67h6.42l-11.6 30.41zm31.09.69c-3.01 0-5.6-.68-7.76-2.04s-3.82-3.24-4.98-5.63q-1.74-3.585-1.74-8.16c0-4.575.61-5.83 1.81-8.23 1.21-2.4 2.88-4.29 5.01-5.66s4.58-2.06 7.34-2.06 5.38.67 7.5 2.02c2.12 1.34 3.77 3.21 4.94 5.6s1.76 5.15 1.76 8.28v1.64h-22.37c.11 2.75.91 4.96 2.38 6.65s3.54 2.53 6.2 2.53q3 0 4.92-1.35c1.29-.9 2.14-2.07 2.56-3.51h5.85c-.36 1.96-1.18 3.69-2.43 5.18s-2.83 2.66-4.72 3.5-3.98 1.25-6.26 1.25Zm-8.44-18.86h16.38c-.25-2.42-1.1-4.33-2.56-5.74s-3.34-2.12-5.64-2.12-4.18.7-5.63 2.12-2.3 3.33-2.55 5.74" /></svg>
          </a>
          <ul className="hidden space-x-8 text-sm font-medium text-brand-white md:flex">
            <li><a href="#servicios" className="transition-colors hover:text-brand-yellow">Servicios</a></li>
            <li><a href="#por-que-nosotros" className="transition-colors hover:text-brand-yellow">Por Qué Nosotros</a></li>
            <li><a href="#como-funciona" className="transition-colors hover:text-brand-yellow">Cómo Funciona</a></li>
            <li><a href="#resenas" className="transition-colors hover:text-brand-yellow">Reseñas</a></li>
            <li><a href="#faq" className="transition-colors hover:text-brand-yellow">FAQ</a></li>
          </ul>
        </nav>
      </header>

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <main id="main-content">
        {/* --- Hero Section --- */}
        <section id="hero" aria-label="Sección principal" className="relative flex min-h-[calc(100vh-5rem)] items-center bg-brand-black px-6 text-brand-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/fondo-hero.png"
              alt="Diagnóstico automotriz a domicilio"
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-brand-black/85"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-4xl text-center md:text-left">
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Diagnóstico Automotriz Electrónico a Domicilio en Santiago
            </h1>
            <h2 className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-zinc-300 sm:text-xl md:text-2xl">
              Evita adivinanzas y gastos innecesarios. Encontramos la <strong className="font-bold text-brand-yellow">causa raíz</strong> de la falla de tu vehículo donde estés.
            </h2>
            <a
              href="https://wa.me/56967014233?text=Hola%20ScanDrive%2C%20necesito%20agendar%20un%20diagnóstico%20a%20domicilio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] items-center justify-center rounded bg-brand-yellow px-8 py-4 text-center text-lg font-bold text-brand-black shadow-lg transition-transform hover:-translate-y-1 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
            >
              Agendar mi Escáner por WhatsApp
            </a>
          </div>
        </section>

        {/* --- Servicios --- */}
        <section id="servicios" aria-label="Nuestros servicios" className="scroll-mt-20 bg-zinc-50 px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-black tracking-tight text-brand-black sm:text-4xl">
                Nuestros Servicios de Diagnóstico
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Card Básico */}
              <article className="flex flex-col rounded-2xl border border-zinc-200 bg-brand-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-yellow/60 relative">
                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-bold text-brand-black">Escáner Básico</h3>
                  <p className="text-4xl font-black text-brand-black">$25.000 <span className="text-lg font-normal text-zinc-500">CLP</span></p>
                </div>
                <p className="mb-8 text-zinc-600">
                  Ideal para decisiones rápidas si acaba de aparecer una luz de alerta en tu tablero o necesitas una revisión rápida y puntual.
                </p>
                <ul className="mb-8 flex-1 space-y-4">
                  <li className="flex items-start gap-3 text-zinc-700">{checkIcon} <span>Lectura de códigos de error.</span></li>
                  <li className="flex items-start gap-3 text-zinc-700">{checkIcon} <span>Borrado de códigos (si la falla ha sido reparada o es intermitente).</span></li>
                  <li className="flex items-start gap-3 text-zinc-700">{checkIcon} <span>Revisión básica de sensores.</span></li>
                </ul>
                <a
                  href="https://wa.me/56967014233?text=Hola%2C%20quiero%20agendar%20un%20Escáner%20Básico%20de%20%2425.000."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded border-2 border-brand-black bg-transparent px-4 py-2 font-bold text-brand-black transition-colors hover:bg-zinc-100"
                >
                  Solicitar Escáner Básico
                </a>
              </article>

              {/* Card Profesional (HIGHLIGHT) */}
              <article className="flex flex-col rounded-2xl border-[3px] border-brand-yellow bg-brand-black p-8 shadow-xl relative transform transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(255,200,5,0.4)] md:-translate-y-4 md:hover:-translate-y-6">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-black">
                  Más Solicitado
                </div>
                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-bold text-brand-white">Diagnóstico Profesional</h3>
                  <p className="text-4xl font-black text-brand-white">$45.000 <span className="text-lg font-normal text-zinc-400">CLP</span></p>
                </div>
                <p className="mb-8 text-zinc-300">
                  Análisis avanzado para fallas complejas. Si tu vehículo presenta anomalías graves, pérdida de potencia o ruidos.
                </p>
                <ul className="mb-8 flex-1 space-y-4">
                  <li className="flex items-start gap-3 text-brand-white">{checkIcon} <span>Escáner <strong>Multimódulo</strong> (Motor, ABS, etc).</span></li>
                  <li className="flex items-start gap-3 text-brand-white">{checkIcon} <span>Pruebas de actuadores y datos en vivo.</span></li>
                  <li className="flex items-start gap-3 text-brand-white">{checkIcon} <span><strong>Veredicto Técnico Final</strong> causal exacto.</span></li>
                </ul>
                <a
                  href="https://wa.me/56967014233?text=Hola%2C%20quiero%20agendar%20un%20Diagnóstico%20Profesional%20de%20%2445.000."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded bg-brand-yellow px-4 py-2 font-bold text-brand-black transition-colors hover:bg-yellow-400"
                >
                  Solicitar Profesional
                </a>
              </article>

              {/* Card Pre-Compra */}
              <article className="flex flex-col rounded-2xl border border-zinc-200 bg-brand-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-yellow/60 relative">
                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-bold text-brand-black">Inspección Pre-Compra</h3>
                  <p className="text-4xl font-black text-brand-black">$45.000 <span className="text-lg font-normal text-zinc-500">CLP</span></p>
                </div>
                <p className="mb-8 text-zinc-600">
                  Para el comprador cauteloso. No arriesgues tu inversión comprando un auto usado lleno de problemas ocultos.
                </p>
                <ul className="mb-8 flex-1 space-y-4">
                  <li className="flex items-start gap-3 text-zinc-700">{checkIcon} <span>Validación de kilometraje real (desde módulos).</span></li>
                  <li className="flex items-start gap-3 text-zinc-700">{checkIcon} <span>Revisión del historial oculto del computador.</span></li>
                  <li className="flex items-start gap-3 text-zinc-700">{checkIcon} <span>Prueba de conducción técnica exhaustiva.</span></li>
                </ul>
                <a
                  href="https://wa.me/56967014233?text=Hola%2C%20necesito%20agendar%20una%20Inspección%20Pre-Compra%20de%20%2445.000."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded border-2 border-brand-black bg-transparent px-4 py-2 font-bold text-brand-black transition-colors hover:bg-zinc-100"
                >
                  Solicitar Inspección
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* --- ¿Por qué ScanDrive? --- */}
        <section id="por-que-nosotros" aria-label="Por qué elegir ScanDrive" className="scroll-mt-20 bg-brand-black px-6 py-20 text-brand-white lg:py-28">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-black sm:text-4xl">
              ¿Por qué ScanDrive?
            </h2>
            <ul className="grid gap-8 sm:grid-cols-2">
              <li className="flex flex-col gap-3 rounded-lg bg-zinc-900 border border-zinc-800 p-6">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-yellow/20 text-brand-yellow">
                  <span className="font-bold text-lg">1</span>
                </div>
                <strong className="text-xl text-brand-white">Equipos de Alta Gama</strong>
                <p className="text-zinc-400">Usamos tecnología de concesionario a un precio accesible en la puerta de tu casa.</p>
              </li>
              <li className="flex flex-col gap-3 rounded-lg bg-zinc-900 border border-zinc-800 p-6">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-yellow/20 text-brand-yellow">
                  <span className="font-bold text-lg">2</span>
                </div>
                <strong className="text-xl text-brand-white">Profundo vs Superficial</strong>
                <p className="text-zinc-400">No sólo leemos un código, entendemos qué lo causa. <span className="text-brand-yellow">Cero adivinanzas.</span></p>
              </li>
              <li className="flex flex-col gap-3 rounded-lg bg-zinc-900 border border-zinc-800 p-6">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-yellow/20 text-brand-yellow">
                  <span className="font-bold text-lg">3</span>
                </div>
                <strong className="text-xl text-brand-white">Atención Especializada</strong>
                <p className="text-zinc-400">Técnicos equipados con inventario de herramientas específico para mediciones eléctricas y rutas.</p>
              </li>
              <li className="flex flex-col gap-3 rounded-lg bg-zinc-900 border border-zinc-800 p-6">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-yellow/20 text-brand-yellow">
                  <span className="font-bold text-lg">4</span>
                </div>
                <strong className="text-xl text-brand-white">Comodidad Total</strong>
                <p className="text-zinc-400">Llegamos a donde tu vehículo se encuentre dentro de la Región Metropolitana.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* --- ¿Cómo Funciona? --- */}
        <section id="como-funciona" aria-label="Cómo funciona el servicio" className="scroll-mt-20 bg-brand-white px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 text-center text-3xl font-black text-brand-black sm:text-4xl">
              ¿Cómo Funciona?
            </h2>
            <div className="grid gap-12 md:grid-cols-4 relative">
              <div className="hidden md:block absolute top-[28px] left-0 w-full h-1 bg-zinc-100 z-0"></div>

              <article className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-black text-xl font-bold text-brand-white shadow-md">1</div>
                <h3 className="mb-3 text-lg font-bold text-brand-black">Agenda vía WhatsApp</h3>
                <p className="text-zinc-600">Escríbenos tu problema electrónico o de compra y coordinamos rápidamente.</p>
              </article>

              <article className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-black text-xl font-bold text-brand-white shadow-md">2</div>
                <h3 className="mb-3 text-lg font-bold text-brand-black">Vamos a tu ubicación</h3>
                <p className="text-zinc-600">Nuestro equipo se desplaza a tu domicilio u oficina en Santiago.</p>
              </article>

              <article className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-black text-xl font-bold text-brand-white shadow-md">3</div>
                <h3 className="mb-3 text-lg font-bold text-brand-black">Diagnóstico profundo</h3>
                <p className="text-zinc-600">Conectamos el equipo y evaluamos a fondo todos los sistemas.</p>
              </article>

              <article className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-black text-xl font-bold text-brand-white shadow-md">4</div>
                <h3 className="mb-3 text-lg font-bold text-brand-black">Informe entregado</h3>
                <p className="text-zinc-600">Recibes un reporte con la falla y los pasos lógicos para repararla.</p>
              </article>
            </div>
          </div>
        </section>

        {/* --- Reseñas / Prueba Social --- */}
        <section id="resenas" aria-label="Reseñas de nuestros clientes" className="scroll-mt-20 bg-zinc-50 px-6 pt-20 pb-10 lg:pt-28 lg:pb-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 text-center text-3xl font-black text-brand-black sm:text-4xl">
              Experiencias de nuestros clientes
            </h2>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <article className="flex flex-col rounded-xl bg-brand-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-200 text-[10px] text-zinc-500 overflow-hidden text-center">
                    [FOTO 1]
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black">Carlos Martínez</h3>
                    <div className="flex text-brand-yellow">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>
                <p className="italic text-zinc-700">
                  "Increíble el servicio. Tenía el Check Engine encendido y me querían hacer cambiar el catalítico en otro lado por un dineral. ScanDrive revisó todo y resultó ser solo un sensor sucio. Ahorré un montón."
                </p>
              </article>

              <article className="flex flex-col rounded-xl bg-brand-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-200 text-[10px] text-zinc-500 overflow-hidden text-center">
                    [FOTO 2]
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black">Javiera Silva</h3>
                    <div className="flex text-brand-yellow">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>
                <p className="italic text-zinc-700">
                  "Contacté para revisión pre-compra de una camioneta de trabajo. Gracias a Dios; detectaron el odómetro adulterado y códigos borrados de transmisión que iban a fallar. Me evitaron un dolor de cabeza."
                </p>
              </article>

              <article className="flex flex-col rounded-xl bg-brand-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-200 text-[10px] text-zinc-500 overflow-hidden text-center">
                    [FOTO 3]
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black">Francisco Lagos</h3>
                    <div className="flex text-brand-yellow">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>
                <p className="italic text-zinc-700">
                  "Rápidos y súper profesionales. Trabajan rápido y te enseñan lo que están viendo en su escáner en tiempo real. Me daba miedo elegir un servicio a domicilio pero su diagnóstico fue brillante."
                </p>
              </article>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/56967014233?text=Hola%2C%20leí%20las%20reseñas%20y%20quiero%20agendar%20un%20diagnóstico%20a%20domicilio."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar diagnóstico basado en reseñas por WhatsApp"
                className="inline-flex min-h-[56px] items-center justify-center rounded font-bold text-brand-black bg-brand-yellow px-8 py-3 transition-colors hover:bg-yellow-400"
              >
                Agenda tu diagnóstico como ellos lo hicieron
              </a>
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section id="faq" aria-label="Preguntas frecuentes" className="scroll-mt-20 bg-zinc-50 px-6 pt-10 pb-20 lg:pt-12 lg:pb-28">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-brand-black sm:text-4xl relative inline-block">
                Preguntas Frecuentes
                <div className="absolute -bottom-3 left-1/2 h-1 w-1/2 -translate-x-1/2 rounded-full bg-brand-yellow"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group rounded-2xl border-l-[6px] border-transparent border border-zinc-200 bg-brand-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 [&_summary::-webkit-details-marker]:hidden open:border-l-brand-yellow open:shadow-lg">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-brand-black focus:outline-none">
                  <h3 className="text-lg">¿Qué es un diagnóstico automotriz electrónico avanzado?</h3>
                  <span className="shrink-0 rounded-full bg-zinc-100 p-2 text-brand-black transition duration-300 group-open:-rotate-45 group-open:bg-brand-yellow group-open:text-brand-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-zinc-100 text-zinc-600 leading-relaxed animate-in slide-in-from-top-4 fade-in duration-500">
                  <p>
                    A diferencia de un escáner común que sólo "lee" el código, el diagnóstico avanzado implica pruebas de los actuadores del auto en vivo, verificar el estado del cableado asociado y utilizar verdadero conocimiento técnico para apuntar a la causa exacta de la falla, <strong className="text-brand-black">cero adivinanzas</strong>.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border-l-[6px] border-transparent border border-zinc-200 bg-brand-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 [&_summary::-webkit-details-marker]:hidden open:border-l-brand-yellow open:shadow-lg">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-brand-black focus:outline-none">
                  <h3 className="text-lg">¿Cubren toda la Región Metropolitana?</h3>
                  <span className="shrink-0 rounded-full bg-zinc-100 p-2 text-brand-black transition duration-300 group-open:-rotate-45 group-open:bg-brand-yellow group-open:text-brand-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-zinc-100 text-zinc-600 leading-relaxed animate-in slide-in-from-top-4 fade-in duration-500">
                  <p>
                    Sí, prestamos nuestros servicios de escáner a domicilio a lo largo de toda la Provincia de Santiago y otras comunas aledañas de la Región Metropolitana. Consúltanos por WhatsApp tu dirección exacta y agendamos de inmediato.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border-l-[6px] border-transparent border border-zinc-200 bg-brand-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 [&_summary::-webkit-details-marker]:hidden open:border-l-brand-yellow open:shadow-lg">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-brand-black focus:outline-none">
                  <h3 className="text-lg">¿El servicio es a domicilio o debo llevar el auto a un taller?</h3>
                  <span className="shrink-0 rounded-full bg-zinc-100 p-2 text-brand-black transition duration-300 group-open:-rotate-45 group-open:bg-brand-yellow group-open:text-brand-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-zinc-100 text-zinc-600 leading-relaxed animate-in slide-in-from-top-4 fade-in duration-500">
                  <p>
                    Nuestro servicio es <strong>100% móvil</strong>. Vamos al lugar donde se encuentre tu vehículo, ya sea tu domicilio, lugar de trabajo o donde el auto esté aparcado, para que no tengas que moverlo si presenta fallas de seguridad.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border-l-[6px] border-transparent border border-zinc-200 bg-brand-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 [&_summary::-webkit-details-marker]:hidden open:border-l-brand-yellow open:shadow-lg">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-brand-black focus:outline-none">
                  <h3 className="text-lg">¿Cuánto tiempo demora cada servicio?</h3>
                  <span className="shrink-0 rounded-full bg-zinc-100 p-2 text-brand-black transition duration-300 group-open:-rotate-45 group-open:bg-brand-yellow group-open:text-brand-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-zinc-100 text-zinc-600 leading-relaxed animate-in slide-in-from-top-4 fade-in duration-500">
                  <p>
                    El <strong>Escáner Básico</strong> toma aproximadamente 20 a 30 minutos. El <strong>Diagnóstico Profesional</strong> y la <strong>Inspección Pre-Compra</strong> son procesos más exhaustivos y suelen demorar entre 1 y 2 horas, dependiendo de las condiciones y anomalías del vehículo.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border-l-[6px] border-transparent border border-zinc-200 bg-brand-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 [&_summary::-webkit-details-marker]:hidden open:border-l-brand-yellow open:shadow-lg">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-brand-black focus:outline-none">
                  <h3 className="text-lg">¿Atienden todas las marcas y modelos de vehículos?</h3>
                  <span className="shrink-0 rounded-full bg-zinc-100 p-2 text-brand-black transition duration-300 group-open:-rotate-45 group-open:bg-brand-yellow group-open:text-brand-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-zinc-100 text-zinc-600 leading-relaxed animate-in slide-in-from-top-4 fade-in duration-500">
                  <p>
                    Sí, contamos con escáneres multimarca actualizados de última generación que nos permiten acceder a los módulos de la inmensa mayoría de los vehículos asiáticos, americanos y europeos del mercado.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border-l-[6px] border-transparent border border-zinc-200 bg-brand-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 [&_summary::-webkit-details-marker]:hidden open:border-l-brand-yellow open:shadow-lg">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-brand-black focus:outline-none">
                  <h3 className="text-lg">¿Qué formas de pago aceptan?</h3>
                  <span className="shrink-0 rounded-full bg-zinc-100 p-2 text-brand-black transition duration-300 group-open:-rotate-45 group-open:bg-brand-yellow group-open:text-brand-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-zinc-100 text-zinc-600 leading-relaxed animate-in slide-in-from-top-4 fade-in duration-500">
                  <p>
                    Puedes pagar al momento de finalizar el diagnóstico y recibir los resultados, ya sea mediante transferencia bancaria, pago en efectivo o link de pago con tarjetas de crédito/débito.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

      </main>

      {/* --- Contacto / CTA Final y Footer Wrapper --- */}
      <div className="flex flex-col min-h-[calc(100vh-5rem)] bg-brand-black">
        <section id="contacto" aria-label="Contacto final" className="flex-1 flex flex-col justify-center px-6 py-24 text-center text-brand-white">
          <div className="mx-auto max-w-2xl w-full">
            <h2 className="mb-6 text-3xl font-black sm:text-4xl">No pierdas más tiempo ni dinero</h2>
            <p className="mb-10 text-lg text-zinc-300">
              Resuelve la falla de tu vehículo de manera inteligente hoy mismo. Contacta a un técnico especialista a domicilio en Santiago, Chile.
            </p>
            <a
              href="https://wa.me/56967014233?text=Hola%2C%20me%20gustaría%20hacerles%20una%20consulta%20técnica%20antes%20de%20agendar."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar a ScanDrive por WhatsApp para consultas"
              className="inline-flex min-h-[56px] items-center justify-center rounded bg-brand-yellow px-10 py-4 text-lg font-bold text-brand-black transition-transform hover:-translate-y-1 hover:bg-yellow-400"
            >
              Escríbenos ahora al WhatsApp
            </a>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer id="site-footer" className="bg-zinc-950 px-6 py-12 text-zinc-400 mt-auto">
          <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 items-center">
            <div>
              <p className="text-xl font-bold text-brand-white mb-2">ScanDrive</p>
              <p className="text-sm">Diagnóstico Electrónico Seguro y Preciso</p>
            </div>

            <div className="text-sm">
              <p className="mb-1"><strong>Área de servicio:</strong> Región Metropolitana, Santiago, Chile.</p>
              <p><strong>Contacto:</strong> +56 9 6701 4233</p>
            </div>

            <nav aria-label="Navegación del pie de página" className="md:text-right">
              <ul className="flex flex-wrap gap-6 md:justify-end text-sm">
                <li><a href="#servicios" className="hover:text-brand-white transition-colors">Servicios</a></li>
                <li><a href="#como-funciona" className="hover:text-brand-white transition-colors">Cómo Funciona</a></li>
                <li><a href="#contacto" className="hover:text-brand-white transition-colors">Contacto</a></li>
              </ul>
            </nav>
          </div>
          <div className="mt-12 text-center text-xs border-t border-zinc-800 pt-8">
            <p>&copy; {new Date().getFullYear()} ScanDrive. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
