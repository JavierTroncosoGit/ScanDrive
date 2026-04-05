# Contexto Maestro: Proyecto ScanDrive - Landing Page de Alta Conversión

## 1. Rol y Directrices para el Agente (Antigravity)

Actúa como un Tech Lead Senior y un Experto en UX/UI enfocado en conversiones (CRO). Tu objetivo no es solo escribir código funcional, sino tomar decisiones de arquitectura, diseño y copywriting que maximicen la cantidad de usuarios que contactan a la empresa vía WhatsApp. Tienes total libertad para elegir las herramientas de estilización dentro del ecosistema Next.js, priorizando siempre el rendimiento (Core Web Vitals) y la velocidad de desarrollo.

## 2. Identidad y Propósito del Negocio

**ScanDrive** es el estándar de oro en diagnóstico y escaneo automotriz a domicilio en Santiago de Chile.

* **Problema que resolvemos:** La incertidumbre mecánica, el miedo a ser estafado en talleres tradicionales, la incomodidad de trasladar un vehículo con fallas y el riesgo de comprar un auto usado en mal estado.
* **Nuestra Solución:** Conveniencia (a domicilio), precisión (herramientas específicas, cero adivinanzas) y confianza (informes técnicos claros, técnicos filtrados por capacidad e inventario de herramientas).
* **Misión Final de la Web:** Generar leads calificados. El 100% de la arquitectura de la página debe empujar al usuario de manera natural y persuasiva hacia el contacto por WhatsApp.
* **Dominio Web:** scandrive.cl

## 3. Público Objetivo (Buyer Persona)

Debes diseñar y escribir pensando en usuarios que se encuentran en situaciones de estrés o alta cautela:

* **El Propietario Frustrado:** Su auto tiene una luz de motor encendida, no quiere moverlo por miedo a dañar algo más o porque el auto no arranca. Necesita una solución rápida y a domicilio.
* **El Comprador Cauteloso:** Está a punto de invertir dinero en un auto usado y teme comprar un "cacho" (vehículo con problemas ocultos o kilometraje adulterado). Necesita una auditoría severa e imparcial.

## 4. Reglas de Diseño, UI y Branding (Estrictas)

El diseño debe transmitir "Tecnología, Precisión Automotriz y Transparencia".

* **Color Primario (#FFC805 - Amarillo):** Este es el color de la conversión. Úsalo ESTRATÉGICAMENTE y con moderación. Debe reservarse casi exclusivamente para los botones de WhatsApp, llamadas a la acción (CTAs) principales, íconos que destaquen beneficios clave y elementos visuales de urgencia o advertencia positiva.
* **Color Secundario (#000000 - Negro):** Úsalo para crear secciones de alto contraste (como el Hero o el Footer), tipografías principales (headers) y transmitir una sensación "premium" e industrial.
* **Color de Fondo/Base (#FFFFFF - Blanco):** Úsalo para dar respiro (whitespace). Las áreas de lectura prolongada o detalles de servicios deben ir sobre fondos claros para maximizar la legibilidad y reducir la fatiga visual.
* **Tipografía:** **Roboto** de Google Fonts. Familia Sans-Serif moderna, muy legible en móviles y con buen soporte para distintos grosores (pesos) para jerarquizar la información.
* **Assets Gráficos:** Todos los assets gráficos (logo, imágenes, íconos de marca) serán entregados como **placeholders**. Dejar espacios reservados con dimensiones apropiadas.

## 5. Estructura de Servicios y Precios (Datos Duros)

No alteres estos valores. Úsalos para estructurar las tarjetas o secciones de servicio. Todos los precios están expresados en **CLP (Pesos Chilenos)**:

1. **Escáner Básico ($25.000 CLP):** Lectura de códigos DTC, borrado de luces de advertencia (si no son permanentes), informe genérico de códigos. *Enfoque:* Toma de decisiones informada.
2. **Escáner + Diagnóstico Profesional ($45.000 CLP):** Escaneo multimódulo avanzado (motor, ABS, Airbag, etc.), lectura de datos en vivo, análisis y pruebas de actuadores por un especialista. *Enfoque:* Causa raíz de la falla, veredicto técnico final, evitar gastos innecesarios.
3. **Inspección Pre-Compra - Scan Drive ($45.000 CLP):** Diagnóstico electrónico profundo, chequeo mecánico/estructural, prueba de conducción técnica en condiciones reales. Incluye validación de kilometraje real cruzando datos de múltiples módulos. *Enfoque:* Recomendación técnica objetiva de compra o rechazo.

## 6. Datos de Contacto y Conversión

* **Número de WhatsApp:** +56 9 6701 4233
* **Formato para URLs:** `https://wa.me/56967014233?text=MENSAJE_CODIFICADO`
* **Área de Servicio:** Toda la Región Metropolitana de Santiago, Chile.

## 7. Stack Tecnológico (Decisiones Fijas)

* **Framework:** Next.js 15 (versión estable más reciente) con App Router.
* **Estilización:** Tailwind CSS.
* **Tipografía:** Roboto (Google Fonts).
* **Despliegue:** Vercel (a cargo del cliente). El código debe ser compatible con Vercel.
* **Dominio:** scandrive.cl
* **CRM:** No se utilizará CRM.

## 8. Restricciones y Guardarraíles Técnicos

* **Mobile-First Absoluto:** Asume que el 90% del tráfico vendrá de smartphones. Las áreas de toque (touch targets) para los botones deben ser amplias. Los textos deben ser escaneables (bullet points, párrafos cortos).
* **Rendimiento:** Evita librerías pesadas innecesarias. Las imágenes (si decides incluir placeholders) deben estar optimizadas.
* **Ecosistema de Conversión:** Todos los botones deben derivar a WhatsApp (`wa.me/56967014233`), preferiblemente con parámetros en la URL (o texto predefinido) que indiquen desde qué sección hizo clic el usuario (ej. "Hola, quiero agendar el servicio pre-compra").
* **Compatibilidad Vercel:** Asegúrate de que la configuración de `next.config.js` y las rutas sean compatibles con el despliegue en Vercel.
