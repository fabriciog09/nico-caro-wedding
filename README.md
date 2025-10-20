# 💒 Invitación Digital - Boda de Nico & Caro

Invitación digital interactiva para la boda de Nico y Caro, creada con React, TypeScript, Vite y Framer Motion.

## ✨ Características

- 🎨 Diseño elegante y moderno con animaciones fluidas
- ⏱️ Contador regresivo en tiempo real
- 📅 Integración con Google Calendar para agendar eventos
- 🗺️ Enlaces directos a Google Maps para ubicaciones
- 📸 Galería de fotos con efectos hover
- 🎵 Sistema de sugerencias de canciones
- 💝 Información de regalos y lista de deseos
- 📱 Diseño responsive para todos los dispositivos
- ✅ Confirmación de asistencia interactiva
- 🎭 Modales para Dress Code, Tips y más

## 🚀 Getting Started

Este proyecto usa **pnpm** como gestor de paquetes. Asegúrate de tenerlo instalado:

```bash
npm install -g pnpm
```

Instalar dependencias:

```bash
pnpm install
```

Ejecutar servidor de desarrollo:

```bash
pnpm dev
```

Construir para producción:

```bash
pnpm build
```

Previsualizar build de producción:

```bash
pnpm preview
```

## 📦 Tecnologías

- **React 19** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool y dev server
- **Framer Motion** - Animaciones
- **React Icons** - Iconografía
- **Date-fns** - Manejo de fechas

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Welcome.tsx      # Pantalla de bienvenida
│   ├── Hero.tsx         # Hero section con nombres
│   ├── Countdown.tsx    # Contador regresivo
│   ├── GuestList.tsx    # Lista de invitados
│   ├── EventDetails.tsx # Ceremonia y Celebración
│   ├── Gallery.tsx      # Galería de fotos
│   ├── PartyInfo.tsx    # Música, Dress Code, Tips
│   ├── Gifts.tsx        # Información de regalos
│   ├── SharePhotos.tsx  # Compartir en redes
│   ├── Footer.tsx       # Footer
│   └── Modal.tsx        # Componente modal reutilizable
├── App.tsx              # Componente principal
├── App.css              # Estilos globales de la app
├── index.css            # Estilos base y variables CSS
└── main.tsx             # Entry point
```

## 🎨 Personalización

### Cambiar Nombres y Fecha

Edita `src/components/Hero.tsx` y `src/App.tsx`:

```tsx
// Hero.tsx - Cambiar nombres
<h1 className="name">Nico</h1>
<h1 className="name">Caro</h1>

// App.tsx - Cambiar fecha del evento
<Countdown targetDate="2025-05-15T17:00:00" />
```

### Modificar Colores

Edita las variables CSS en `src/index.css`:

```css
:root {
  --color-primary: #8B7355;
  --color-secondary: #D4AF37;
  --color-accent: #C9A76B;
  /* ... más colores */
}
```

### Cambiar Fotos de la Galería

Edita el array `photos` en `src/components/Gallery.tsx`:

```tsx
const photos = [
  { id: 1, url: 'ruta/a/tu/foto1.jpg' },
  { id: 2, url: 'ruta/a/tu/foto2.jpg' },
  // ...
]
```

### Actualizar Información de Eventos

Edita `src/components/EventDetails.tsx` para cambiar direcciones, horarios y ubicaciones.

## 🚀 Despliegue

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Vite y desplegará

### Netlify

1. Build: `pnpm build`
2. Output directory: `dist`
3. Deploy!

### GitHub Pages

```bash
pnpm build
# Sube la carpeta dist/ a tu repositorio gh-pages
```

## 📝 Vite Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
