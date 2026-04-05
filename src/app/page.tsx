import Image from "next/image";

export default function Home() {
  const checkIcon = (
    <svg className="h-5 w-5 flex-shrink-0 text-brand-yellow" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="relative font-roboto bg-brand-white text-brand-black scroll-smooth antialiased">
      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/56967014233"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow text-brand-black shadow-2xl transition-transform hover:scale-110"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-9 w-9">
          <path d="M12.031 0C5.385 0 .003 5.385.003 12.031c0 2.12.553 4.195 1.603 6.012L.09 23.639l5.748-1.507c1.761 1 3.754 1.526 5.807 1.526 6.648 0 12.03-5.386 12.03-12.031S18.293 0 12.031 0zm0 21.651c-1.84 0-3.642-.494-5.215-1.428l-.373-.221-3.873 1.016 1.034-3.774-.243-.387a10.02 10.02 0 01-1.533-5.309c0-5.545 4.512-10.057 10.057-10.057 5.543 0 10.054 4.511 10.054 10.057 0 5.545-4.511 10.054-10.054 10.054zm5.518-7.534c-.302-.151-1.791-.884-2.068-.985-.278-.101-.482-.151-.684.151-.202.302-.782.985-.959 1.186-.176.201-.354.226-.656.076-1.579-.785-2.732-1.745-3.791-3.535-.177-.302.261-.277.838-1.431.101-.201.051-.378-.025-.529-.076-.151-.684-1.652-.937-2.262-.246-.593-.497-.513-.684-.523-.176-.01-.378-.01-.58-.01s-.529.076-.807.378c-.278.302-1.06 1.033-1.06 2.518s1.085 2.915 1.236 3.116c.151.201 2.122 3.238 5.138 4.538 1.956.845 2.7.935 3.551.785.807-.142 2.624-1.072 2.991-2.109.366-1.037.366-1.926.257-2.109-.11-.183-.412-.284-.714-.435z" />
        </svg>
      </a>

      {/* ===== HEADER / NAVEGACIÓN ===== */}
      <header id="site-header" className="sticky top-0 z-40 w-full bg-brand-black shadow-md">
        <nav aria-label="Navegación principal" className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="https://scandrive.cl" aria-label="ScanDrive - Inicio" className="flex items-center">
            {/* Placeholder de Logo */}
            <div className="flex h-[40px] w-[160px] items-center justify-center rounded-sm bg-zinc-800 text-xs font-bold text-zinc-500 border border-zinc-700">
              [Logo ScanDrive 160x40]
            </div>
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
        <section id="hero" aria-label="Sección principal" className="relative flex min-h-[85vh] items-center bg-brand-black px-6 text-brand-white">
          <div className="absolute inset-0 z-0">
            {/* Placeholder Fondo Hero */}
            <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-zinc-700 text-xl font-bold">
              [Imagen Hero Alta Opacidad - 1920x1080px]
            </div>
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

        {/* --- Agitación del Problema --- */}
        <section id="problema" aria-label="El problema de las fallas no diagnosticadas" className="bg-brand-white px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-black tracking-tight text-brand-black sm:text-4xl">
              ¿Una luz en el tablero te quita la tranquilidad?
            </h2>
            <div className="space-y-6 text-lg text-zinc-700">
              <p>
                Sabemos lo estresante que es ver el <strong className="text-brand-black">Check Engine</strong> encendido, no saber si es seguro conducir y temer que el arreglo te cueste una fortuna.
              </p>
              <p>
                Ir a un taller tradicional significa perder tiempo, pedir permisos en el trabajo y, muchas veces, pagar por repuestos que no solucionan tu problema. O peor aún, estás a punto de comprar un auto usado que podría esconder panas graves.
              </p>
              <p className="text-xl font-medium text-brand-black">
                Nosotros vamos <span className="border-b-4 border-brand-yellow">a domicilio</span> para darte respuestas claras y técnicas, sin perder tu día.
              </p>
            </div>
          </div>
        </section>

        {/* --- Servicios --- */}
        <section id="servicios" aria-label="Nuestros servicios" className="bg-zinc-50 px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-black tracking-tight text-brand-black sm:text-4xl">
                Nuestros Servicios de Diagnóstico
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Card Básico */}
              <article className="flex flex-col rounded-2xl border border-zinc-200 bg-brand-white p-8 shadow-sm transition-shadow hover:shadow-md relative">
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

              {/* Card Pre-Compra (HIGHLIGHT) */}
              <article className="flex flex-col rounded-2xl border-[3px] border-brand-yellow bg-brand-black p-8 shadow-xl relative transform md:-translate-y-4">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-black">
                  Más Solicitado
                </div>
                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-bold text-brand-white">Inspección Pre-Compra</h3>
                  <p className="text-4xl font-black text-brand-white">$45.000 <span className="text-lg font-normal text-zinc-400">CLP</span></p>
                </div>
                <p className="mb-8 text-zinc-300">
                  Para el comprador cauteloso. No arriesgues tu inversión comprando un auto usado lleno de problemas ocultos.
                </p>
                <ul className="mb-8 flex-1 space-y-4">
                  <li className="flex items-start gap-3 text-brand-white">{checkIcon} <span>Validación de kilometraje real (desde módulos).</span></li>
                  <li className="flex items-start gap-3 text-brand-white">{checkIcon} <span>Revisión del historial oculto del computador.</span></li>
                  <li className="flex items-start gap-3 text-brand-white">{checkIcon} <span>Prueba de conducción técnica exhaustiva.</span></li>
                </ul>
                <a
                  href="https://wa.me/56967014233?text=Hola%2C%20necesito%20agendar%20una%20Inspección%20Pre-Compra%20de%20%2445.000."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded bg-brand-yellow px-4 py-2 font-bold text-brand-black transition-colors hover:bg-yellow-400"
                >
                  Solicitar Inspección
                </a>
              </article>

              {/* Card Profesional */}
              <article className="flex flex-col rounded-2xl border border-zinc-200 bg-brand-white p-8 shadow-sm transition-shadow hover:shadow-md relative">
                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-bold text-brand-black">Diagnóstico Profesional</h3>
                  <p className="text-4xl font-black text-brand-black">$45.000 <span className="text-lg font-normal text-zinc-500">CLP</span></p>
                </div>
                <p className="mb-8 text-zinc-600">
                  Análisis avanzado para fallas complejas. Si tu vehículo presenta anomalías graves, pérdida de potencia o ruidos.
                </p>
                <ul className="mb-8 flex-1 space-y-4">
                  <li className="flex items-start gap-3 text-zinc-700">{checkIcon} <span>Escáner <strong>Multimódulo</strong> (Motor, ABS, etc).</span></li>
                  <li className="flex items-start gap-3 text-zinc-700">{checkIcon} <span>Pruebas de actuadores y datos en vivo.</span></li>
                  <li className="flex items-start gap-3 text-zinc-700">{checkIcon} <span><strong>Veredicto Técnico Final</strong> causal exacto.</span></li>
                </ul>
                <a
                  href="https://wa.me/56967014233?text=Hola%2C%20quiero%20agendar%20un%20Diagnóstico%20Profesional%20de%20%2445.000."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded border-2 border-brand-black bg-transparent px-4 py-2 font-bold text-brand-black transition-colors hover:bg-zinc-100"
                >
                  Solicitar Profesional
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* --- ¿Por qué ScanDrive? --- */}
        <section id="por-que-nosotros" aria-label="Por qué elegir ScanDrive" className="bg-brand-black px-6 py-20 text-brand-white lg:py-28">
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
        <section id="como-funciona" aria-label="Cómo funciona el servicio" className="bg-brand-white px-6 py-20 lg:py-28">
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
        <section id="resenas" aria-label="Reseñas de nuestros clientes" className="bg-zinc-50 px-6 py-20 lg:py-28">
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
        <section id="faq" aria-label="Preguntas frecuentes" className="bg-brand-white px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-black text-brand-black sm:text-4xl">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-8">
              <article>
                <h3 className="mb-3 text-xl font-bold text-brand-black">¿Qué es un diagnóstico automotriz electrónico avanzado?</h3>
                <p className="text-zinc-600">
                  A diferencia de un escáner común que sólo "lee" el código, el diagnóstico avanzado implica pruebas de los actuadores del auto en vivo, verificar el estado del cableado asociado y utilizar verdadero conocimiento técnico para apuntar a la causa exacta de la falla, <strong className="text-brand-black">cero adivinanzas</strong>.
                </p>
              </article>

              <article>
                <h3 className="mb-3 text-xl font-bold text-brand-black">¿Cubren toda la Región Metropolitana?</h3>
                <p className="text-zinc-600">
                  Sí, prestamos nuestros servicios de escáner a domicilio a lo largo de toda la Provincia de Santiago y otras comunas aledañas de la Región Metropolitana. Consúltanos por WhatsApp tu dirección exacta y agendamos de inmediato.
                </p>
              </article>

              <article>
                <h3 className="mb-3 text-xl font-bold text-brand-black">¿Qué formas de pago aceptan?</h3>
                <p className="text-zinc-600">
                  Puedes pagar al momento de finalizar el diagnóstico y recibir los resultados, ya sea mediante transferencia bancaria, pago en efectivo o link de pago con tarjetas de crédito/débito.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* --- Contacto / CTA Final --- */}
        <section id="contacto" aria-label="Contacto final" className="bg-brand-black px-6 py-24 text-center text-brand-white">
          <div className="mx-auto max-w-2xl">
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
      </main>

      {/* ===== FOOTER ===== */}
      <footer id="site-footer" className="bg-zinc-950 px-6 py-12 text-zinc-400">
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
  );
}
