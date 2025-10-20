# 🎵 Configuración de Música de Fondo

## 📋 Cómo Funciona

La invitación ahora incluye un sistema completo de música de fondo, similar al de [Fixdate](https://fixdate.io/uy/modelo-invitacion/hojas):

### Flujo de Usuario

1. **Pantalla de Bienvenida**: El usuario elige "Ingresar con música" o "Ingresar sin música"
2. **Reproducción Automática**: Si elige con música, la canción comienza automáticamente
3. **Botón Flotante**: Aparece un botón en la esquina superior derecha para controlar la música
4. **Control Manual**: El usuario puede pausar/reanudar en cualquier momento

### Componentes Implementados

#### 1. **MusicPlayer** (`src/components/MusicPlayer.tsx`)
- Reproduce música usando iframe de YouTube
- Controla play/pause mediante postMessage API
- Muestra botón flotante con animaciones

#### 2. **Botón Flotante**
- **Posición**: Esquina superior derecha
- **Diseño**: Circular con gradiente dorado
- **Animaciones**:
  - Pulso cuando está reproduciendo
  - Ondas de sonido animadas
  - Efecto glow al hover
  - Rotación del icono

## 🎼 Personalizar la Canción

### Opción 1: YouTube (Recomendado)

Edita `src/components/MusicPlayer.tsx`, línea 19:

```typescript
// Reemplaza VIDEO_ID con el ID de tu canción de YouTube
const musicUrl = 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&loop=1&playlist=VIDEO_ID&controls=0&showinfo=0&rel=0&modestbranding=1'
```

**Ejemplo:**
- URL original: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID del video: `dQw4w9WgXcQ`
- URL para iframe: `https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1&playlist=dQw4w9WgXcQ&controls=0`

**Parámetros importantes:**
- `autoplay=1`: Inicia automáticamente
- `loop=1`: Reproduce en bucle
- `playlist=VIDEO_ID`: Necesario para que el loop funcione
- `controls=0`: Oculta controles
- `showinfo=0`: Oculta información del video
- `rel=0`: No muestra videos relacionados
- `modestbranding=1`: Minimiza branding de YouTube

### Opción 2: SoundCloud

```typescript
// Ejemplo con SoundCloud
const musicUrl = 'https://w.soundcloud.com/player/?url=https://soundcloud.com/ARTIST/TRACK&auto_play=true&buying=false&sharing=false&show_artwork=false&show_playcount=false&show_user=false&hide_related=true'
```

### Opción 3: Spotify (Web Player)

```typescript
// Ejemplo con Spotify
const musicUrl = 'https://open.spotify.com/embed/track/TRACK_ID?utm_source=generator&theme=0'
```

## 🎨 Personalizar el Diseño del Botón

Edita `src/components/MusicPlayer.css`:

### Cambiar Posición

```css
.music-toggle {
  top: 2rem;    /* Distancia desde arriba */
  right: 2rem;  /* Distancia desde la derecha */
  
  /* Para posicionar abajo a la derecha: */
  /* bottom: 2rem; */
  /* right: 2rem; */
}
```

### Cambiar Colores

```css
.music-toggle {
  /* Gradiente del botón */
  background: linear-gradient(135deg, #8B7355 0%, #C9A76B 100%);
  
  /* Color del borde */
  border: 3px solid #FFFFFF;
}
```

### Cambiar Tamaño

```css
.music-toggle {
  width: 60px;   /* Ancho */
  height: 60px;  /* Alto */
}

.music-icon {
  font-size: 1.8rem;  /* Tamaño del icono */
}
```

## 🔧 Funcionalidades Técnicas

### Control de Reproducción

El componente usa la API de postMessage de YouTube para controlar el video:

```typescript
// Pausar
iframeRef.current.contentWindow?.postMessage(
  '{"event":"command","func":"pauseVideo","args":""}',
  '*'
)

// Reproducir
iframeRef.current.contentWindow?.postMessage(
  '{"event":"command","func":"playVideo","args":""}',
  '*'
)
```

### Estado de la Música

El estado se maneja en `App.tsx`:

```typescript
const [playMusic, setPlayMusic] = useState(false)

const handleEnter = (withMusic: boolean) => {
  setPlayMusic(withMusic)
  setShowWelcome(false)
}
```

## 🎭 Animaciones Incluidas

### 1. Entrada del Botón
- Aparece con scale de 0 a 1
- Delay de 1 segundo después de entrar

### 2. Icono Reproduciendo
- Pulso suave cada 2 segundos
- Rotación oscilante (-10° a +10°)

### 3. Ondas de Sonido
- 3 barras que oscilan a diferentes velocidades
- Solo visible cuando está reproduciendo

### 4. Hover
- Escala a 1.1x
- Efecto glow animado
- Sombra más pronunciada

### 5. Click
- Escala a 0.9x (feedback táctil)

## 📱 Responsive

El botón se adapta automáticamente:

- **Desktop**: 60px × 60px
- **Tablet**: 50px × 50px  
- **Mobile**: 45px × 45px

## 🚨 Notas Importantes

### 1. **Autoplay en Navegadores**

Algunos navegadores bloquean autoplay. Para mejor compatibilidad:
- Usa videos de YouTube con audio
- El usuario debe interactuar primero (botón "Ingresar con música")

### 2. **Copyright de Música**

- Asegúrate de tener derechos para usar la música
- YouTube puede bloquear algunos videos con copyright
- Considera usar música libre de derechos:
  - [YouTube Audio Library](https://www.youtube.com/audiolibrary)
  - [Free Music Archive](https://freemusicarchive.org/)
  - [Incompetech](https://incompetech.com/)

### 3. **Performance**

- El iframe se carga solo si el usuario elige música
- Se oculta visualmente pero sigue activo
- Impacto mínimo en performance

## 🎯 Ejemplos de URLs de Música

### Música Romántica (YouTube)
```typescript
// Ed Sheeran - Perfect
'https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=1&loop=1&playlist=2Vv-BfVoq4g&controls=0'

// John Legend - All of Me
'https://www.youtube.com/embed/450p7goxZqg?autoplay=1&loop=1&playlist=450p7goxZqg&controls=0'

// Instrumental Piano
'https://www.youtube.com/embed/jgpJVI3tDbY?autoplay=1&loop=1&playlist=jgpJVI3tDbY&controls=0'
```

## 🔄 Desactivar la Música Completamente

Si prefieres no tener música, simplemente no importes o comenta el MusicPlayer en `App.tsx`:

```typescript
// import MusicPlayer from './components/MusicPlayer'

// En el return:
// <MusicPlayer isPlaying={playMusic} />
```

## 💡 Tips

1. **Elige una canción sin copyright**: Evita problemas legales
2. **Volumen moderado**: YouTube reproduce al volumen que tengas configurado
3. **Duración**: Canciones de 3-5 minutos son ideales
4. **Prueba en diferentes dispositivos**: Algunos móviles pueden no reproducir
5. **Considera música instrumental**: Menos intrusiva que música con letra

¡Disfruta tu invitación con música! 🎉

