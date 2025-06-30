# 🎥 Configuración del Video Tour

Este documento te guía para configurar el recorrido virtual del departamento.

## 📋 Opciones de Hosting de Video

### 1. **YouTube** (Recomendado)
- ✅ Gratuito
- ✅ Fácil de usar
- ✅ Buena calidad
- ✅ Compatible con todos los dispositivos

### 2. **Vimeo**
- ✅ Mejor calidad
- ✅ Sin anuncios
- ✅ Más profesional
- ⚠️ Plan gratuito limitado

### 3. **Video Directo** (MP4)
- ✅ Control total
- ✅ Sin dependencias externas
- ⚠️ Mayor uso de ancho de banda
- ⚠️ Necesitas hosting para el video

---

## 🔧 Configuración con YouTube

### Paso 1: Subir el video a YouTube
1. Ve a [youtube.com](https://youtube.com)
2. Haz clic en "Subir video"
3. Selecciona tu archivo de video
4. Configura como **"No listado"** (privado pero accesible con link)
5. Copia el ID del video de la URL

### Paso 2: Configurar el componente
1. Abre `src/components/VideoTour.jsx`
2. Busca esta línea:
   ```javascript
   const videoUrl = 'https://www.youtube.com/embed/TU_VIDEO_ID_AQUI'
   ```
3. Reemplaza `TU_VIDEO_ID_AQUI` con el ID de tu video:
   ```javascript
   const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'
   ```

### Paso 3: Personalizar información
Edita estos campos en el componente:
```javascript
// Duración del video
<span className="font-semibold">Duración:</span> 3:45 minutos

// Descripción del contenido
<span className="font-semibold">Incluye:</span> Todas las habitaciones, baños, cocina y áreas comunes
```

---

## 🔧 Configuración con Vimeo

### Paso 1: Subir el video a Vimeo
1. Ve a [vimeo.com](https://vimeo.com)
2. Haz clic en "Subir"
3. Selecciona tu archivo de video
4. Configura como **"Solo con link"**
5. Copia el ID del video

### Paso 2: Configurar el componente
1. En `src/components/VideoTour.jsx`, cambia:
   ```javascript
   // Comenta la línea de YouTube
   // const videoUrl = 'https://www.youtube.com/embed/TU_VIDEO_ID_AQUI'
   
   // Descomenta la línea de Vimeo
   const videoUrl = 'https://player.vimeo.com/video/TU_VIDEO_ID_AQUI'
   ```

---

## 🔧 Configuración con Video Directo

### Paso 1: Preparar el archivo
1. Convierte tu video a MP4
2. Optimiza el tamaño (máximo 50MB)
3. Usa resolución 1080p o 720p

### Paso 2: Colocar el archivo
1. Crea la carpeta: `public/videos/`
2. Coloca tu video como: `public/videos/tour-departamento.mp4`

### Paso 3: Configurar el componente
1. En `src/components/VideoTour.jsx`, cambia:
   ```javascript
   // Comenta las líneas de YouTube/Vimeo
   // const videoUrl = 'https://www.youtube.com/embed/TU_VIDEO_ID_AQUI'
   
   // Descomenta la línea de video directo
   const videoUrl = '/videos/tour-departamento.mp4'
   ```

### Paso 4: Modificar el reproductor
Reemplaza el iframe con un elemento video:
```javascript
<video
  src={videoUrl}
  controls
  className="w-full h-full"
  poster="/images/video-thumbnail.jpg"
>
  Tu navegador no soporta el elemento video.
</video>
```

---

## 🎬 Consejos para el Video

### Contenido Recomendado
1. **Introducción** (30 segundos)
   - Saludo y presentación del departamento
   - Ubicación y características principales

2. **Recorrido Principal** (2-3 minutos)
   - Entrada y recibidor
   - Sala de estar
   - Cocina
   - Habitaciones (una por una)
   - Baños
   - Balcón/terraza

3. **Cierre** (30 segundos)
   - Resumen de características
   - Información de contacto
   - Llamada a la acción

### Técnicas de Grabación
- **Estabilización**: Usa un trípode o estabilizador
- **Iluminación**: Graba con buena luz natural
- **Movimiento**: Camina lentamente y suavemente
- **Audio**: Usa un micrófono externo si es posible
- **Duración**: Máximo 5 minutos

### Edición
- **Transiciones**: Suaves entre habitaciones
- **Música**: Fondo suave y profesional
- **Texto**: Subtítulos con información clave
- **Calidad**: Exporta en 1080p

---

## 📱 Optimización para Móviles

### YouTube/Vimeo
- ✅ Automáticamente responsive
- ✅ Adapta calidad según conexión
- ✅ Funciona en todos los dispositivos

### Video Directo
- Agrega múltiples formatos:
```html
<video controls>
  <source src="/videos/tour-departamento.mp4" type="video/mp4">
  <source src="/videos/tour-departamento.webm" type="video/webm">
  Tu navegador no soporta video.
</video>
```

---

## 🎨 Personalización del Thumbnail

### Opción 1: Imagen Personalizada
1. Crea una imagen atractiva del departamento
2. Colócala en: `public/images/video-thumbnail.jpg`
3. Reemplaza el div del thumbnail en el componente

### Opción 2: Thumbnail de YouTube
Si usas YouTube, puedes usar el thumbnail automático:
```javascript
<img 
  src={`https://img.youtube.com/vi/TU_VIDEO_ID/maxresdefault.jpg`}
  alt="Thumbnail del video"
  className="w-full h-full object-cover"
/>
```

---

## 📊 Análisis y Seguimiento

### YouTube Analytics
- Ve a tu video en YouTube Studio
- Revisa estadísticas de visualización
- Analiza retención de audiencia

### Vimeo Analytics
- Dashboard con estadísticas detalladas
- Información de engagement
- Datos demográficos

---

## 🚨 Solución de Problemas

### Video no reproduce
- Verifica que el ID del video sea correcto
- Asegúrate de que el video sea público o no listado
- Revisa la consola del navegador

### Video lento
- Optimiza el archivo de video
- Considera usar YouTube/Vimeo
- Verifica la conexión a internet

### No se abre el modal
- Verifica que no haya errores en la consola
- Asegúrate de que el componente esté importado correctamente

---

## 💡 Consejos Adicionales

1. **Prueba en diferentes dispositivos** antes de publicar
2. **Optimiza el thumbnail** para llamar la atención
3. **Incluye información de contacto** al final del video
4. **Mantén el video actualizado** si cambias algo del departamento
5. **Promociona el video** en redes sociales

---

## 📞 Recursos Útiles

- **YouTube Studio**: [studio.youtube.com](https://studio.youtube.com)
- **Vimeo**: [vimeo.com](https://vimeo.com)
- **Compresión de Video**: [handbrake.fr](https://handbrake.fr)
- **Edición Online**: [canva.com](https://canva.com)

---

**¡Tu video tour estará funcionando en minutos! 🎬** 