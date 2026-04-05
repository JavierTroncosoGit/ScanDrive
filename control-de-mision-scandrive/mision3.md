# Misión 3: Diseño UI, Estilización y Optimización de Conversión (CRO)

## 1. Objetivo de la Misión

Transformar la estructura semántica y los textos persuasivos en una interfaz visual de alto impacto. Tu meta es utilizar **Tailwind CSS**, la tipografía **Roboto** y la paleta corporativa con principios de diseño Mobile-First para guiar el ojo del usuario directamente hacia los botones de conversión (WhatsApp).

## 2. Directrices de Identidad Visual y UI

Debes aplicar **Tailwind CSS** siguiendo estas reglas estrictas de color y contraste:

* **Fondo y Respiro (#FFFFFF - Blanco):** Utilízalo como fondo principal de la página, especialmente en las secciones de mucha lectura (como el detalle de los servicios). Garantiza máxima legibilidad y transmite limpieza.
* **Estructura y Contraste (#000000 - Negro):** Utilízalo para la tipografía principal, los fondos de secciones clave (como el Footer o el Hero, para darle un toque "premium" e industrial) y bordes definidos. Un texto blanco o amarillo sobre fondo negro genera una retención altísima.
* **El Color de la Conversión (#FFC805 - Amarillo):** **RESTRICCIÓN CRÍTICA:** No uses este color como fondo de secciones enteras. Úsalo EXCLUSIVAMENTE para elementos accionables:
  * Botones principales de llamado a la acción (CTAs).
  * Íconos de validación (checkmarks) en las listas de beneficios.
  * Elementos que requieran urgencia o atención inmediata.
* **Tipografía:** **Roboto** (ya configurada en Misión 1 vía `next/font/google`). Utiliza los distintos pesos (400, 500, 700, 900) para crear jerarquía visual.
* **Assets Gráficos:** Todos los elementos gráficos (logo, imágenes del Hero, íconos de marca) deben ser **placeholders**. Utiliza contenedores con dimensiones adecuadas, fondo gris claro y texto indicativo (ej: "[Logo ScanDrive - 200×60px]", "[Imagen Hero - 1920×1080px]").

## 3. Orquestación de Botones y WhatsApp (El Motor de Ventas)

El 100% de la conversión depende de esto. **Número WhatsApp: +56 9 6701 4233**

* **Botón Flotante (Sticky):** Implementa un botón de WhatsApp flotante, persistente en la esquina inferior derecha de la pantalla en todo momento. Debe tener el ícono reconocible de WhatsApp (utilizar SVG inline para máximo rendimiento).
* **Enlaces Inteligentes (wa.me):** Configura dinámicamente las URLs de los botones para abrir la API de WhatsApp con mensajes pre-llenados según la sección. Todos apuntan a `https://wa.me/56967014233?text=MENSAJE_CODIFICADO`.
  * *Ejemplo Botón Hero:* `Hola ScanDrive, necesito agendar un diagnóstico a domicilio.`
  * *Ejemplo Botón Escáner Básico:* `Hola ScanDrive, me interesa el Escáner Básico de $25.000.`
  * *Ejemplo Botón Diagnóstico:* `Hola ScanDrive, quiero solicitar el Diagnóstico Profesional de $45.000.`
  * *Ejemplo Botón Pre-Compra:* `Hola ScanDrive, me interesa el servicio de Inspección Pre-Compra de $45.000.`
  * *Ejemplo Botón Footer:* `Hola ScanDrive, vi su página web y me gustaría agendar un servicio.`
* **Áreas de Toque (Touch Targets):** Asegúrate de que todos los botones tengan al menos 48x48 píxeles de área interactiva para evitar clics erróneos en teléfonos móviles.

## 4. Diseño de Componentes Específicos

* **Tarjetas de Servicio (Pricing Cards):** Diseña los 3 servicios (Básico, Profesional, Pre-Compra) como tarjetas visualmente diferenciadas. Destaca la opción "Inspección Pre-Compra" visualmente (con un borde o etiqueta amarilla) como el servicio más recomendado o popular.
* **Sección Hero:** Debe dominar la pantalla inicial (viewport). Título grande, subtítulo claro y un botón amarillo inmenso y clickeable. Usa un placeholder de imagen de fondo con un overlay negro semitransparente para que el texto resalte.
* **Sección de Reseñas:** Diseña las tarjetas de reseñas/testimonios con placeholders editables. Estrellas amarillas (#FFC805), nombre del cliente y texto de la reseña.
* **Breakpoints:** Usa los breakpoints por defecto de Tailwind CSS (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).

## 5. Restricciones Críticas

* **No Alterar Textos:** Respeta el copy generado en la Misión 2. Tu enfoque ahora es puramente visual e interactivo.
* **Rendimiento:** No agregues animaciones pesadas ni efectos de scroll excesivos (parallax, etc.) que puedan ralentizar la carga en conexiones móviles 3G/4G o afectar los Core Web Vitals. Mantén transiciones sutiles (ej. hover en botones, fade-in suave).
* **No Alterar Assets:** Mantén los placeholders para logo, imágenes e íconos de marca. No intentes generar ni buscar imágenes reales.
* **Compatibilidad Vercel:** Asegúrate de que el código final sea compatible con despliegue en Vercel.

## 6. Criterios de Aceptación

1. La página tiene un aspecto profesional, moderno y respeta estrictamente la proporción de la paleta (`#FFFFFF` base, `#000000` contraste, `#FFC805` conversión).
2. La landing page es 100% responsiva (Mobile-First) y se ve impecable en resoluciones de teléfonos inteligentes.
3. El botón flotante de WhatsApp está presente y no interfiere con el contenido del pie de página.
4. Todos los CTAs redirigen a `https://wa.me/56967014233` con el mensaje contextual correcto según la sección.
5. La tipografía **Roboto** se renderiza correctamente en todos los dispositivos.
6. Todos los assets gráficos son placeholders editables con dimensiones apropiadas.
