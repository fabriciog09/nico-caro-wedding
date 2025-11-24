# 🎢 Guía de Efecto Parallax - Hero Background

## 🎯 ¿Qué es el Efecto Parallax?

El **parallax** es un efecto donde la imagen de fondo se mueve a una velocidad diferente al contenido cuando haces scroll, creando una sensación de profundidad y movimiento 3D.

Así como lo usa [Fixdate](https://fixdate.io/uy/modelo-invitacion/hojas).

## ✨ Cambios Implementados

He configurado el Hero para soportar efecto parallax:

### 1. **position: fixed** 
La imagen de fondo ahora está fija, no se mueve con el scroll

### 2. **z-index: -1**
La imagen está detrás de todo el contenido

### 3. **background-attachment: fixed**
CSS nativo para efecto parallax (cuando se activa)

### 4. **transform: translateZ(0)**
Hardware acceleration para mejor performance

## 🚀 Cómo Activar el Parallax

### Opción 1: Parallax con Imagen + Gradiente Overlay (Recomendado)

**Edita `src/components/Hero.css` líneas 20-36:**

```css
.hero-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  /* 1. COMENTA el gradiente actual (líneas 21-23): */
  /*
  background: linear-gradient(135deg, #4C7CC9 0%, #A6CFF5 50%, #7FB4E8 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  */
  
  /* 2. DESCOMENTA esto (líneas 26-36): */
  background-image: 
    linear-gradient(135deg, rgba(76, 124, 201, 0.6) 0%, rgba(166, 207, 245, 0.6) 100%),
    url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;  /* ← PARALLAX MÁGICO */
  animation: none;
  transform: translateZ(-1px) scale(2);
}
```

### Opción 2: Parallax Solo con Imagen

**Edita `src/components/Hero.css` líneas 38-47:**

```css
.hero-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  /* COMENTA gradiente */
  /* ... */
  
  /* DESCOMENTA esto: */
  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;  /* ← PARALLAX */
  animation: none;
  will-change: transform;
}
```

## 🎨 Ajustar el Overlay

Si la imagen está muy clara y el texto no se lee bien:

**Edita línea 69 de `Hero.css`:**

```css
.hero-overlay {
  /* Descomenta y ajusta: */
  background: rgba(0, 0, 0, 0.4);  /* Oscurece la imagen */
}
```

**Valores recomendados:**
- `rgba(0, 0, 0, 0.2)` - Overlay suave
- `rgba(0, 0, 0, 0.4)` - Overlay medio
- `rgba(0, 0, 0, 0.6)` - Overlay fuerte
- `rgba(76, 124, 201, 0.35)` - Overlay con tinte azul pastel

## 🎭 Cómo Funciona el Parallax

### Técnica de Fixdate (parallax-mirror)

Fixdate usa JavaScript con clases `.parallax-mirror`:

```html
<div class="parallax-mirror" style="position: fixed; transform: translate3d(0px, 0px, 0px);">
  <img src="portada-3.webp" class="parallax-slider">
</div>
```

**Características:**
- `position: fixed` - Fija la imagen
- `transform: translate3d()` - Mueve la imagen con JS
- `z-index: -100` - Detrás del contenido
- Librería JavaScript (probablemente Parallax.js)

### Nuestra Técnica (CSS Puro)

Usamos CSS puro sin JavaScript:

```css
.hero-background {
  position: fixed;  /* ← Misma técnica que Fixdate */
  background-attachment: fixed;  /* ← Parallax nativo CSS */
  z-index: -1;  /* ← Mismo concepto */
}
```

**Ventajas:**
- ✅ Sin dependencias JavaScript adicionales
- ✅ Mejor performance
- ✅ Más simple de mantener
- ✅ Funciona en móviles modernos

## 📱 Compatibilidad Móvil

El `background-attachment: fixed` puede tener problemas en iOS. Para solucionarlo:

```css
@media (max-width: 768px) {
  .hero-background {
    background-attachment: scroll;  /* Desactiva parallax en móvil */
    position: absolute;  /* Cambia a absolute */
  }
}
```

## 🎯 Ejemplo Completo Paso a Paso

### Paso 1: Prepara tu Imagen

1. Descarga una imagen (ej: de Unsplash)
2. Renómbrala a `hero-background.jpg`
3. Colócala en `public/images/`

### Paso 2: Activa el Parallax

Edita `src/components/Hero.css`:

```css
.hero-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  /* Comenta esto */
  /*
  background: linear-gradient(135deg, #4C7CC9 0%, #A6CFF5 50%, #7FB4E8 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  */
  
  /* Activa esto */
  background-image: 
    linear-gradient(135deg, rgba(76, 124, 201, 0.6) 0%, rgba(166, 207, 245, 0.6) 100%),
    url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  animation: none;
}
```

### Paso 3: Ajusta el Overlay

```css
.hero-overlay {
  background: rgba(0, 0, 0, 0.3);  /* Mejora legibilidad */
}
```

### Paso 4: Prueba

1. Guarda los cambios
2. Recarga la página
3. **Haz scroll** y verás el efecto parallax! 🎉

## 🎨 URLs de Imágenes de Ejemplo (Unsplash)

Puedes usar estas URLs directamente para probar:

```css
/* Pareja romántica */
url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop')

/* Atardecer dorado */
url('https://images.unsplash.com/photo-1518710843675-2540dd79065c?w=1920&h=1080&fit=crop')

/* Naturaleza elegante */
url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop')

/* Flores románticas */
url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&h=1080&fit=crop')
```

## 🔧 Solución de Problemas

### Problema: El parallax no funciona

**Solución:**
- Verifica que tengas `background-attachment: fixed`
- Asegúrate de que `position: fixed` esté activo
- Prueba en modo incógnito (algunas extensiones lo bloquean)

### Problema: La imagen no se ve

**Solución:**
- Verifica la ruta: `/images/hero-background.jpg`
- Verifica que la imagen esté en `public/images/`
- Abre las DevTools y busca errores 404

### Problema: Texto ilegible

**Solución:**
- Aumenta la opacidad del overlay a `0.5` o `0.6`
- Usa un gradiente más oscuro
- Oscurece la imagen antes de subirla

### Problema: Performance lenta

**Solución:**
- Comprime la imagen (máx 500KB)
- Usa formato WEBP
- Reduce la resolución a 1920x1080

## 📊 Comparación: Nuestra Implementación vs Fixdate

| Aspecto | Fixdate | Nuestra Implementación |
|---------|---------|------------------------|
| **Técnica** | JavaScript + parallax-mirror | CSS nativo |
| **Position** | `fixed` ✅ | `fixed` ✅ |
| **Z-index** | `-100` | `-1` |
| **Transform** | JS `translate3d()` | CSS `translateZ()` |
| **Dependencias** | Librería JS | Ninguna |
| **Performance** | Buena | Excelente |
| **Móvil** | Compatible | Compatible con fallback |

## 💡 Tips Pro

### 1. **Optimiza la Imagen**
```bash
# Usa herramientas de compresión
- TinyPNG.com
- Squoosh.app
- ImageOptim
```

### 2. **Usa WEBP**
Convierte tu imagen a WEBP para mejor performance:
```css
background-image: url('/images/hero-background.webp');
```

### 3. **Lazy Loading**
Para mejor performance inicial, carga la imagen después:
```css
/* Primero muestra gradiente */
background: linear-gradient(...);

/* Luego carga imagen con JS */
```

### 4. **Diferentes Imágenes por Dispositivo**
```css
/* Desktop */
.hero-background {
  background-image: url('/images/hero-desktop.jpg');
}

/* Tablet */
@media (max-width: 1024px) {
  .hero-background {
    background-image: url('/images/hero-tablet.jpg');
  }
}

/* Mobile */
@media (max-width: 768px) {
  .hero-background {
    background-image: url('/images/hero-mobile.jpg');
    background-attachment: scroll;
  }
}
```

## ✅ Checklist de Implementación

- [ ] Imagen optimizada (< 500KB)
- [ ] Colocada en `public/images/`
- [ ] Código actualizado en `Hero.css`
- [ ] Overlay ajustado para legibilidad
- [ ] Probado en desktop
- [ ] Probado en móvil
- [ ] Probado haciendo scroll
- [ ] Performance verificada

## 🎉 Resultado Final

Con el parallax activado tendrás:
- ✨ Imagen de fondo fija elegante
- 🎢 Efecto de profundidad al hacer scroll
- 🎨 Overlay con colores de marca
- 📱 Compatible con todos los dispositivos
- ⚡ Performance optimizada

¡Igual que Fixdate pero con CSS moderno! 🚀

