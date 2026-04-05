# Misión 2: Arquitectura de la Información y Copywriting (CRO)

## 1. Objetivo de la Misión

Tu objetivo es poblar el esqueleto semántico de la Misión 1 con textos persuasivos de alta conversión. Debes redactar el contenido de la landing page pensando en el estado psicológico del usuario (estrés por una falla o miedo a comprar un auto en mal estado) y guiarlo irremediablemente hacia el contacto por WhatsApp.

## 2. Directrices de Tono y Estilo

* **Voz de la Marca:** Profesional, directa, empática y tecnológicamente avanzada. Hablamos desde la autoridad.
* **Escaneabilidad:** En móviles, la gente no lee, escanea. Utiliza párrafos de máximo 3 líneas, listas de viñetas (bullet points) para los beneficios y negritas para resaltar conceptos clave (ej: **causa raíz**, **a domicilio**, **cero adivinanzas**).
* **Tratamiento:** Utilizar "tú" (informal pero profesional), consistente con el español de Chile. El idioma del HTML debe ser `es-CL`.

## 3. Datos de Contacto para CTAs

Todos los botones de llamado a la acción deben apuntar a la API de WhatsApp con el siguiente formato:

* **Número:** +56 9 6701 4233
* **URL base:** `https://wa.me/56967014233?text=MENSAJE_CODIFICADO`
* Cada botón debe tener un **mensaje pre-llenado** contextual según la sección donde se encuentra.

## 4. Estructura Narrativa y Textos Requeridos

Debes estructurar el contenido en las siguientes secciones secuenciales:

* **Sección 1: Hero (El Gancho Inicial)**
  * **H1 (Titular Principal):** Debe ser claro y de alto impacto, combinando el servicio y el beneficio principal (ej. "Diagnóstico Automotriz Electrónico a Domicilio en Santiago").
  * **H2 (Subtítulo):** Explica nuestra promesa de valor. "Evita adivinanzas y gastos innecesarios. Encontramos la falla real de tu vehículo donde estés."
  * **CTA Principal:** Texto del botón orientado a la acción (ej. "Agendar mi Escáner por WhatsApp"). URL: `https://wa.me/56967014233?text=Hola%20ScanDrive%2C%20necesito%20agendar%20un%20diagnóstico%20a%20domicilio.`

* **Sección 2: Agitación del Problema (Empatía)**
  * Conecta con el dolor del cliente: El estrés de una luz en el tablero, la pérdida de tiempo en talleres tradicionales o el riesgo de estafas al comprar un auto usado.

* **Sección 3: Nuestros Servicios (La Oferta - Usa datos del Contexto Maestro)**
  * **Escáner Básico ($25.000 CLP):** Destaca que es ideal para decisiones rápidas e incluye lectura y borrado de códigos.
  * **Diagnóstico Profesional ($45.000 CLP):** Destaca palabras como "Multimódulo", "Pruebas de actuadores" y "Veredicto Técnico Final".
  * **Inspección Pre-Compra ($45.000 CLP):** Enfócate en el comprador cauteloso. Menciona la "Validación de kilometraje real" y la "Prueba de conducción técnica".
  * *Nota:* Cada servicio debe tener su propio botón de CTA con mensaje pre-llenado específico (ej. "Solicitar Diagnóstico Profesional"). Todos apuntan a `wa.me/56967014233`.

* **Sección 4: ¿Por qué ScanDrive? (Autoridad y Confianza)**
  * Redacta 3 o 4 puntos clave basados en nuestra filosofía: Equipos de alta gama, técnicos con inventario de herramientas específico, diagnóstico profundo vs. superficial.

* **Sección 5: Reseñas / Prueba Social**
  * Incluye una sección de reseñas con **placeholders**. Prepara al menos 3 espacios para testimonios de clientes con nombre, texto de la reseña y calificación (estrellas). Usar datos ficticios como ejemplo que serán reemplazados posteriormente.

* **Sección 6: Footer y CTA Final**
  * Un último llamado a la acción para los usuarios que llegaron al final de la página.
  * Incluir datos de contacto: WhatsApp +56 9 6701 4233.
  * Incluir área de servicio: Región Metropolitana, Santiago, Chile.

## 5. Restricciones Críticas

* **Sin Estilos Visuales:** Aún NO debes aplicar clases de Tailwind CSS para colores, márgenes estéticos ni tipografías. Limítate a inyectar el texto dentro de las etiquetas HTML/React correspondientes.
* **Integridad de Precios:** Los precios y nombres de los servicios indicados en el Contexto Maestro son inmutables. No los alteres. Todos los precios están en CLP.
* **Assets Gráficos:** Deja placeholders para cualquier imagen, ícono o elemento gráfico. No intentes generar ni buscar imágenes reales.

## 6. Criterios de Aceptación

1. Todo el texto "Lorem Ipsum" o de relleno ha sido reemplazado por copy persuasivo en español (Chile).
2. La estructura narrativa fluye lógicamente desde el Hero hasta el Footer.
3. Existen al menos 6 puntos de conversión (botones de llamada a la acción) distribuidos a lo largo del documento, todos apuntando a `wa.me/56967014233`.
4. Los servicios reflejan exactamente la información del Contexto Maestro con precios en CLP.
5. Existe una sección de reseñas/testimonios con placeholders.
6. Cada CTA tiene un mensaje pre-llenado contextual para WhatsApp.
