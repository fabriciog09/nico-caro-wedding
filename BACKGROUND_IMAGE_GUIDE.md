# 🖼️ Guía para Agregar Imagen de Fondo al Hero

## 📁 Paso 1: Preparar tu Imagen

### Requisitos Recomendados

- **Resolución**: Mínimo 1920x1080px (Full HD)
- **Formato**: JPG, PNG o WEBP
- **Tamaño de archivo**: Máximo 500KB (optimiza para web)
- **Orientación**: Horizontal (landscape)
- **Proporción**: 16:9 ideal

### Optimización de Imagen

Usa herramientas como:
- [TinyPNG](https://tinypng.com/) - Comprime sin perder calidad
- [Squoosh](https://squoosh.app/) - Optimizador de Google
- [ImageOptim](https://imageoptim.com/) - Para Mac

## 📂 Paso 2: Colocar la Imagen

Coloca tu imagen en la carpeta: `public/images/`

**Ejemplo:**
```
public/
  └── images/
      └── hero-background.jpg
```

## 🎨 Paso 3: Elegir una Opción de Diseño

Edita `src/components/Hero.css` (líneas 10-41) y elige una de estas opciones:

### **Opción 1: Solo Gradiente** ⭐ (Actual)

```css
.hero-background {
  background: linear-gradient(135deg, #002E5A 0%, #AEDCEB 50%, #E1F2F9 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}
```

**Pros:**
- ✅ Siempre se ve bien
- ✅ Carga rápida
- ✅ Animación suave

---

### **Opción 2: Imagen con Gradiente Overlay** 🎨 (Recomendado)

**Paso A:** Comenta las líneas 18-20 (gradiente actual)
**Paso B:** Descomenta las líneas 23-31

```css
.hero-background {
  /* Comenta esto: */
  /* background: linear-gradient(135deg, #002E5A 0%, #AEDCEB 50%, #E1F2F9 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite; */
  
  /* Descomenta esto: */
  background-image: 
    linear-gradient(135deg, rgba(0, 46, 90, 0.75) 0%, rgba(174, 220, 235, 0.75) 50%, rgba(225, 242, 249, 0.75) 100%),
    url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: none;
}
```

**Pros:**
- ✅ Imagen de fondo hermosa
- ✅ Mantiene los colores de la marca
- ✅ Texto siempre legible
- ✅ Apariencia profesional

**Ajustar opacidad del overlay:**
Cambia `0.7` a otro valor:
- `0.5` = Más transparente (imagen más visible)
- `0.8` = Más opaco (colores más fuertes)

---

### **Opción 3: Solo Imagen** 🖼️

**Paso A:** Comenta las líneas 18-20
**Paso B:** Descomenta las líneas 34-39

```css
.hero-background {
  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: none;
}
```

**IMPORTANTE:** Si usas esta opción, también actualiza el overlay:

En `Hero.css` línea 62, descomenta:
```css
.hero-overlay {
  background: rgba(0, 0, 0, 0.3);  /* Oscurece la imagen para mejor legibilidad */
}
```

**Ajustar oscurecimiento:**
- `rgba(0, 0, 0, 0.2)` = Más claro
- `rgba(0, 0, 0, 0.5)` = Más oscuro

---

## 🎯 Ejemplos Completos

### Ejemplo 1: Foto de la Pareja con Overlay Dorado

```css
.hero-background {
  background-image: 
    linear-gradient(135deg, rgba(0, 46, 90, 0.65) 0%, rgba(174, 220, 235, 0.65) 100%),
    url('/images/couple-photo.jpg');
  background-size: cover;
  background-position: center top;  /* Enfoca la parte superior */
  background-repeat: no-repeat;
  animation: none;
}
```

### Ejemplo 2: Paisaje Romántico

```css
.hero-background {
  background-image: url('/images/sunset-landscape.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: none;
}

.hero-overlay {
  background: rgba(0, 46, 90, 0.35);  /* Tinte azul suave */
}
```

### Ejemplo 3: Textura Elegante

```css
.hero-background {
  background-image: 
    linear-gradient(135deg, rgba(0, 46, 90, 0.85) 0%, rgba(174, 220, 235, 0.85) 100%),
    url('/images/elegant-texture.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: none;
}
```

## 🎨 Control Avanzado de Posición

### Background Position

```css
background-position: center;        /* Centrada */
background-position: center top;    /* Centrada arriba */
background-position: center bottom; /* Centrada abajo */
background-position: left center;   /* Izquierda centrada */
background-position: 30% 50%;       /* Personalizado */
```

### Background Size

```css
background-size: cover;    /* Cubre todo (recomendado) */
background-size: contain;  /* Se ajusta completa */
background-size: 100% auto;/* Ancho completo */
```

### Efecto Parallax (Opcional)

Para agregar efecto parallax, agrega esto:

```css
.hero-background {
  background-attachment: fixed;  /* Agrega esta línea */
  /* ... resto del código ... */
}
```

## 📱 Responsive

### Cambiar Imagen en Móvil

Agrega esto al final de `Hero.css`:

```css
@media (max-width: 768px) {
  .hero-background {
    background-image: url('/images/hero-mobile.jpg');
    background-position: center;
  }
}
```

### Ajustar Overlay en Móvil

```css
@media (max-width: 768px) {
  .hero-overlay {
    background: rgba(0, 0, 0, 0.4);  /* Más oscuro en móvil */
  }
}
```

## 🖼️ Recursos para Imágenes Gratuitas

### Fotos de Alta Calidad
- [Unsplash](https://unsplash.com/) - Fotos gratis de alta calidad
- [Pexels](https://www.pexels.com/) - Banco de imágenes gratuito
- [Pixabay](https://pixabay.com/) - Imágenes libres de derechos

### Busca por palabras clave:
- "wedding couple"
- "romantic sunset"
- "elegant texture"
- "golden hour"
- "love photography"

## 💡 Tips Importantes

### 1. **Legibilidad del Texto**
- El texto blanco debe ser siempre legible
- Usa overlay si la imagen es muy clara
- Prueba en diferentes dispositivos

### 2. **Rendimiento**
- Comprime la imagen antes de subirla
- Usa formato WEBP si es posible
- Máximo 500KB recomendado

### 3. **Pruebas**
- Prueba en diferentes tamaños de pantalla
- Verifica en modo oscuro del navegador
- Comprueba la carga en 3G

### 4. **Múltiples Imágenes**
Puedes cambiar la imagen según la sección:
```css
background-image: 
  linear-gradient(...),
  url('/images/image1.jpg'),
  url('/images/image2.jpg');
```

## 🔄 Volver al Gradiente Original

Si no te gusta el resultado, simplemente:

1. Comenta las líneas de imagen
2. Descomenta las líneas 18-20 (gradiente)
3. Recarga la página

## 📝 Ejemplo Completo Paso a Paso

1. **Descarga una imagen** de Unsplash (ej: foto de pareja)
2. **Comprímela** con TinyPNG
3. **Renómbrala** a `hero-background.jpg`
4. **Colócala** en `public/images/`
5. **Edita** `Hero.css`:

```css
.hero-background {
  /* Comenta líneas 18-20 */
  background-image: 
    linear-gradient(135deg, rgba(0, 46, 90, 0.7) 0%, rgba(174, 220, 235, 0.7) 100%),
    url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: none;
}
```

6. **Guarda** y recarga la página
7. **Ajusta** la opacidad si es necesario

## ✅ Checklist Final

- [ ] Imagen optimizada (< 500KB)
- [ ] Resolución mínima 1920x1080
- [ ] Colocada en `public/images/`
- [ ] Código actualizado en `Hero.css`
- [ ] Texto legible en desktop
- [ ] Texto legible en móvil
- [ ] Overlay ajustado si es necesario
- [ ] Probado en diferentes navegadores

¡Disfruta tu Hero con imagen de fondo personalizada! 🎉

