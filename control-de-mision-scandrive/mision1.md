# Misión 1: Fundación de Arquitectura, Rendimiento y SEO Técnico

## 1. Objetivo de la Misión

Establecer la base del proyecto en **Next.js 15** (versión estable más reciente). El objetivo principal en esta fase NO es visual, sino estructural. Debes crear un entorno de alto rendimiento, optimizado para los Core Web Vitals de Google, y preparar toda la meta-información necesaria para dominar el SEO Local en la Región Metropolitana de Santiago, Chile.

## 2. Directrices de Arquitectura Base

* **Inicialización:** Configura el proyecto **Next.js 15** utilizando el **App Router** por sus ventajas en Server Components.
* **Setup de Herramientas:** Configura el entorno con **Tailwind CSS** como sistema de estilización, dejando el archivo `tailwind.config.ts` listo con nuestras variables de color (`#FFC805`, `#000000`, `#FFFFFF`), pero **no apliques diseño todavía**.
* **Tipografía:** Configura **Roboto** de Google Fonts utilizando `next/font/google` para optimizar la carga.
* **Estructura Semántica (Esqueleto):** Crea el layout base de la aplicación. Utiliza estrictamente etiquetas semánticas de HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). Un lector de pantalla o un bot de Google debería poder entender la jerarquía de la página solo leyendo estas etiquetas. Asegúrate de incluir `lang="es-CL"` en el tag `<html>`.

## 3. Estrategia de SEO Local y Metadatos

Tu prioridad técnica es que los motores de búsqueda entiendan que ScanDrive es la mejor opción en la Región Metropolitana.

* **Metadata API (Next.js):** Configura los metadatos globales (`title`, `description`).
  * *Keywords obligatorias a integrar de forma natural:* "escáner automotriz a domicilio", "Santiago", "Región Metropolitana", "revisión pre-compra", "diagnóstico electrónico".
  * *Ejemplo de enfoque:* "ScanDrive: Escáner Automotriz a Domicilio en Santiago | Diagnóstico y Pre-Compra".
  * *Canonical URL:* `https://scandrive.cl`
* **Open Graph y Twitter Cards:** Prepara las etiquetas meta para que, cuando el link se comparta por WhatsApp o redes sociales, genere una tarjeta de previsualización profesional (deja placeholders para las imágenes OG en dimensión 1200×630px).
* **SEO Técnico Adicional:**
  * Genera un `robots.txt` adecuado para el dominio `scandrive.cl`.
  * Genera un `sitemap.xml` básico apuntando a `https://scandrive.cl`.
  * Deja placeholders para `favicon.ico` y los íconos de apple-touch.

## 4. Marcado de Datos Estructurados (Schema.org)

Debes implementar un script JSON-LD en el layout principal para inyectar datos estructurados. Esto es innegociable para el SEO local.

* **Tipo de Schema:** Utiliza `AutoRepair` o `LocalBusiness`.
* **Datos a incluir en el JSON-LD:**
  * Nombre: ScanDrive
  * URL: <https://scandrive.cl>
  * Servicios ofrecidos: Escáner Automotriz, Diagnóstico Profesional, Inspección Pre-Compra.
  * Área de servicio (`areaServed`): Región Metropolitana, Santiago, Chile.
  * Teléfono/contacto: +56967014233
  * Precios: Rango de $25.000 a $45.000 CLP (`priceCurrency: "CLP"`).

## 5. Restricciones Críticas (Lo que NO debes hacer en esta misión)

* **Cero Copywriting Final:** No pierdas tiempo redactando los textos persuasivos del cuerpo de la página, usa *Lorem Ipsum* o textos descriptivos básicos (ej: `<h1>Título Principal Hero</h1>`).
* **Cero Diseño Visual:** No apliques márgenes complejos, padding, sombras ni intentes que la página "se vea bonita". Solo enfócate en que las etiquetas semánticas estén en su lugar.
* **Sin Rutas Innecesarias:** Esta es una Landing Page (Single Page Application). Todo el contenido debe fluir en una sola página (scroll), no crees un sistema de múltiples páginas.

## 6. Criterios de Aceptación (¿Cuándo está terminada esta misión?)

1. El proyecto compila sin errores en **Next.js 15**.
2. El código fuente renderizado (HTML) contiene las etiquetas de SEO Local, OpenGraph y el `<script type="application/ld+json">` con la información de ScanDrive en la Región Metropolitana.
3. El layout principal utiliza etiquetas HTML5 correctamente anidadas con `lang="es-CL"`.
4. Las variables de la paleta de colores corporativa están declaradas en `tailwind.config.ts` listas para ser usadas en futuras misiones.
5. La tipografía **Roboto** está configurada vía `next/font/google`.
6. Existen archivos `robots.txt` y `sitemap.xml` básicos apuntando al dominio `scandrive.cl`.
7. El proyecto es compatible con despliegue en **Vercel**.
