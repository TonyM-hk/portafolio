# Portafolio de Desarrollador(a) de Software

Portafolio profesional, responsive y bilingüe (ES/EN), construido con **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** y **Framer Motion**.

> Professional, responsive, bilingual (ES/EN) developer portfolio built with Next.js 14, TypeScript, Tailwind CSS and Framer Motion.

---

## 🚀 Empezar / Getting started

Requisitos: Node.js 18.18+ (recomendado 20+).

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para producción:

```bash
npm run build
npm run start
```

---

## ✏️ Cómo actualizar tu información (sin tocar el código)

Todo el contenido del sitio vive en **`data/content.ts`**. Es el único archivo que necesitas editar para personalizar el portafolio:

- `personal` — nombre, rol, biografía, contacto, redes, CV.
- `skillCategories` — habilidades agrupadas por Frontend / Backend / Bases de datos / Herramientas, con nivel (0–100).
- `projects` — proyectos con imagen, tecnologías, enlaces y categoría (`web`, `mobile`, `backend`, `frontend`) para los filtros.
- `experience` — experiencia laboral (timeline).
- `education` / `courses` — formación académica y cursos destacados.
- `achievements` — certificaciones, hackathons, reconocimientos y cursos.
- `testimonials` — recomendaciones para el carrusel.

Cada campo de texto visible tiene versión `es` y `en`, por ejemplo:

```ts
description: {
  es: "Descripción en español...",
  en: "Description in English...",
}
```

Los textos fijos de la interfaz (botones, títulos de sección, mensajes del formulario) están en **`lib/translations.ts`**.

### Imágenes y CV

- Reemplaza los SVG en `public/images/project-*.svg` por capturas reales de tus proyectos (o usa `.png`/`.jpg`, solo actualiza la ruta en `data/content.ts`).
- Reemplaza `public/resume.pdf` con tu CV real (mismo nombre de archivo, o actualiza `personal.resumeUrl`).
- `public/images/og-cover.svg` es la imagen de vista previa al compartir en redes — actualízala con tus datos.

### Formulario de contacto

El formulario envía los datos a `app/api/contact/route.ts`. Ahora mismo solo registra el mensaje en consola (`console.log`) para que el proyecto funcione sin configuración adicional. Para producción, conéctalo a un proveedor de correo como [Resend](https://resend.com), SendGrid o Nodemailer — hay un comentario `TODO` marcando dónde agregar la integración.

### 📄 Documentos de trabajo destacados (Java, bases de datos, JavaScript, etc.)

Hay una sección llamada **"Documentos de Trabajo"** (justo después de Proyectos) pensada para mostrar ejercicios, tareas y prácticas que quieras compartir como evidencia — PDFs, código, diagramas, archivos comprimidos, etc.

**Cómo agregar un documento nuevo:**

1. Copia tu archivo a `public/docs/` (ej: `public/docs/mi-ejercicio-java.pdf`).
2. Abre `data/content.ts` y busca el arreglo `workDocuments` al final del archivo.
3. Agrega un objeto nuevo, por ejemplo:
   ```ts
   {
     id: "sql-consultas-avanzadas",
     title: "Consultas SQL avanzadas",
     description: {
       es: "Ejercicios de JOINs, subconsultas y funciones de agregación sobre una base de datos de ventas.",
       en: "JOINs, subqueries, and aggregate function exercises on a sales database.",
     },
     categoryKey: "database",     // debe coincidir con un "key" de workDocumentCategories
     fileUrl: "/docs/sql-consultas-avanzadas.pdf",
     fileType: "pdf",              // "pdf" | "doc" | "zip" | "code" | "image" | "other"
     date: "2026",
     tech: ["MySQL", "SQL"],
   },
   ```
4. Guarda — el documento aparece automáticamente en la sección, con su filtro de categoría correspondiente.

**Categorías:** ya vienen configuradas `java`, `database`, `python` y `web` en `workDocumentCategories`. Puedes agregar, quitar o renombrar categorías libremente (por ejemplo `javascript`, `csharp`, `excel`); el filtro de la sección se arma solo con base en lo que definas ahí.

Si el arreglo `workDocuments` queda vacío, la sección simplemente no se muestra en el sitio — no rompe nada quitar todos los documentos.

### 🖼️ Galería, video y detalles ampliados por proyecto

Al hacer clic en cualquier proyecto se abre un modal con más detalle. Todos estos campos son opcionales — si no los llenas, esa parte del modal simplemente no aparece:

```ts
{
  id: "mi-proyecto",
  // ...campos básicos...
  role: { es: "Mi rol en el proyecto", en: "My role in the project" },
  duration: "2026",
  longDescription: { es: "Descripción más completa...", en: "Longer description..." },
  highlights: {
    es: ["Punto destacado 1", "Punto destacado 2"],
    en: ["Highlight 1", "Highlight 2"],
  },
  gallery: ["/images/projects/mi-proyecto-2.png", "/images/projects/mi-proyecto-3.png"],
  video: "/videos/mi-proyecto-demo.mp4", // o un link de YouTube embebido
  documents: [
    { label: { es: "Diseño de base de datos (PDF)", en: "Database design (PDF)" }, url: "/docs/database/mi-doc.pdf" },
  ],
}
```

Coloca las imágenes en `public/images/projects/` y los videos en `public/videos/`. Los videos se comprimen automáticamente mejor si los subes ya optimizados (recomendado: 1280px de ancho, H.264, menos de 15 MB) para que el sitio cargue rápido.

`demoUrl` y `githubUrl` también son opcionales — si un proyecto no tiene demo pública o repositorio público, simplemente omite ese campo y el botón correspondiente no se mostrará.



Cada elemento de `achievements` en `data/content.ts` acepta un campo opcional `fileUrl`. Si lo defines, la tarjeta de ese logro se vuelve clickeable y abre el certificado, título o constancia real (PDF o imagen) en una pestaña nueva:

```ts
{
  id: "c1",
  title: "Técnico Superior Universitario — ...",
  issuer: "Universidad Tecnológica de Escuinapa",
  date: "2025",
  type: "degree",   // "certification" | "hackathon" | "award" | "course" | "degree"
  fileUrl: "/certificates/titulo-tsu-tecnologias-informacion.jpg",
},
```

Coloca los archivos reales en `public/certificates/`. Si un logro no tiene `fileUrl`, la tarjeta se muestra igual mente pero no es clickeable.

> Nota: incluí algunos PDFs y un `.zip` de ejemplo en `public/docs/` para que puedas ver la sección funcionando de inmediato. Reemplázalos por tus archivos reales cuando estés listo.

---

## 🗂️ Estructura del proyecto

```
app/
  api/contact/route.ts   # Endpoint del formulario de contacto
  layout.tsx              # Layout raíz, metadatos SEO, providers
  page.tsx                 # Ensambla todas las secciones
  sitemap.ts                # Sitemap dinámico
  globals.css                # Estilos globales y utilidades Tailwind
components/
  navbar.tsx, footer.tsx, loading-screen.tsx
  sections/                  # Hero, About, Skills, Projects, Experience,
                              # Education, Achievements, Testimonials, Contact
  ui/                         # Botones flotantes, toggles, tarjetas reutilizables
context/
  theme-context.tsx           # Modo claro/oscuro (persistido en localStorage)
  language-context.tsx        # Idioma ES/EN (persistido en localStorage)
data/
  content.ts                   # ⭐ Toda la información editable del portafolio
lib/
  translations.ts               # Textos fijos de la interfaz (ES/EN)
public/
  images/, resume.pdf, robots.txt
```

---

## ✨ Funcionalidades incluidas

- Modo claro / oscuro con detección de preferencia del sistema y persistencia.
- Selector de idioma Español ⇄ English con detección del idioma del navegador y persistencia.
- Animaciones con Framer Motion: fade-in, slide-up, scroll-reveal, hover, y una pantalla de carga inicial.
- Barra de navegación fija con indicador de sección activa (Intersection Observer).
- Barra de progreso de scroll.
- Botones flotantes de WhatsApp y "volver arriba".
- Galería de proyectos con filtros por categoría.
- Timeline de experiencia, sección de educación, logros y carrusel de testimonios.
- Formulario de contacto funcional con validación y estados de carga/éxito/error.
- SEO: metadatos Open Graph/Twitter, JSON-LD (`Person`), `sitemap.xml`, `robots.txt`.
- Accesibilidad: enlace "saltar al contenido", estados de foco visibles, `aria-label`s, `prefers-reduced-motion` respetado.
- Totalmente responsive (móvil, tablet, escritorio).

---

## ☁️ Despliegue en Vercel

1. Sube este proyecto a un repositorio de GitHub/GitLab/Bitbucket.
2. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio.
3. Vercel detecta Next.js automáticamente — no se necesita configuración adicional.
4. (Opcional) agrega variables de entorno si conectas un proveedor de correo real para el formulario de contacto.
5. Despliega. Cada push a la rama principal generará un nuevo despliegue.

---

## 🧱 Stack técnico

| Categoría   | Tecnología |
|-------------|------------|
| Framework   | Next.js 14 (App Router) |
| Lenguaje    | TypeScript |
| Estilos     | Tailwind CSS |
| Animaciones | Framer Motion |
| Iconos      | Lucide React |
| Despliegue  | Vercel |

---

Hecho con cuidado por detalle. Reemplaza los datos de ejemplo por tu información real y este portafolio queda listo para publicarse.
