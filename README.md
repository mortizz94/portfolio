# Portfolio de Diego Martínez

Portfolio profesional desarrollado con **React**, **TypeScript** y **Vite**. Diseñado para ser rápido, accesible y modular, desplegado en **Cloudflare Pages**.

![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🚀 Características Principales

- **Arquitectura Moderna:** Single Page Application (SPA) construida con React 19 y TypeScript.
- **Rendimiento:** Optimizado con Vite para cargas instantáneas.
- **Internacionalización (i18n):** Soporte completo para Inglés (EN) y Español (ES) mediante Context API.
- **Integraciones:**
  - **GitHub API:** Visualización dinámica de repositorios destacados.
  - **Lucide React:** Iconografía moderna y ligera.
- **Cumplimiento Legal:** Modal integrado para Aviso Legal (LSSI), Privacidad (RGPD) y Cookies.
- **Diseño Responsivo:** Adaptado a dispositivos móviles, tablets y escritorio.

## 🛠️ Stack Tecnológico

- **Frontend:** React, TypeScript, CSS3 (Variables & Glassmorphism)
- **Build Tool:** Vite
- **Despliegue:** Cloudflare Pages
- **Linter:** ESLint + TypeScript-ESLint

## 📦 Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/mortizz94/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

4. **Construir para producción:**
   ```bash
   npm run build
   ```

## 🌐 Estructura del Proyecto

```
src/
├── components/      # Componentes de React (Navbar, Hero, Experience, etc.)
├── context/         # Context Providers (LanguageContext, ThemeContext)
├── data/            # Archivos de contenido y tipos (es.ts, en.ts, types.ts)
├── styles/          # (Opcional) Estilos modulares si aplica
└── index.css        # Estilos globales y variables CSS
```

## 📝 Changelog

### v1.1.0 - 2026-01-04
- **Feature:** Implementación de soporte multi-idioma (Español/Inglés).
- **Refactor:** Migración de todo el contenido estático a archivos de datos tipados (`src/data`).
- **Update:** Refactorización de componentes principales para consumir los nuevos contextos.

### v1.0.0
- Migración inicial a React + Vite.
- Despliegue en Cloudflare Pages.

---
&copy; 2026 Diego Martínez Ortiz
