# 📸 Guía de Imágenes - Departamento Brasil 702

Esta carpeta contiene todas las imágenes del proyecto. Organiza tus fotos según la siguiente estructura:

## 📁 Estructura de Carpetas

```
public/images/
├── gallery/           # Imágenes principales del departamento
│   ├── sala.jpg
│   ├── cocina.jpg
│   ├── habitacion1.jpg
│   ├── habitacion2.jpg
│   ├── habitacion3.jpg
│   ├── bano1.jpg
│   ├── bano2.jpg
│   ├── balcon.jpg
│   └── terraza.jpg
├── exteriores/        # Fotos del edificio y alrededores
│   ├── edificio.jpg
│   ├── entrada.jpg
│   ├── jardin.jpg
│   └── vista.jpg
├── amenities/         # Amenidades del edificio
│   ├── piscina.jpg
│   ├── gimnasio.jpg
│   ├── estacionamiento.jpg
│   └── seguridad.jpg
└── logo/             # Logo de la inmobiliaria (opcional)
    └── logo.png
```

## 🖼️ Especificaciones Recomendadas

### Imágenes de Galería Principal
- **Resolución**: 1920x1080px o 1200x800px
- **Formato**: JPG o WebP
- **Tamaño**: Máximo 500KB por imagen
- **Cantidad**: 8-12 imágenes

### Imágenes de Exteriores
- **Resolución**: 1200x800px
- **Formato**: JPG
- **Tamaño**: Máximo 300KB por imagen

### Logo
- **Formato**: PNG (con transparencia)
- **Resolución**: 200x80px aprox.
- **Tamaño**: Máximo 50KB

## 🔧 Cómo Usar las Imágenes

### 1. Reemplazar URLs en Gallery.jsx
```javascript
// En src/components/Gallery.jsx
const images = [
  '/images/gallery/sala.jpg',
  '/images/gallery/cocina.jpg',
  '/images/gallery/habitacion1.jpg',
  // ... más imágenes
]
```

### 2. Agregar Logo en Header.jsx
```javascript
// En src/components/Header.jsx
<img src="/images/logo/logo.png" alt="Logo Inmobiliaria" />
```

## 📱 Optimización para Web

### Antes de Subir:
1. **Comprime las imágenes** usando herramientas como:
   - TinyPNG
   - ImageOptim
   - Squoosh.app

2. **Convierte a WebP** para mejor rendimiento:
   - Usa herramientas online como CloudConvert
   - Mantén JPG como fallback

3. **Redimensiona** si es necesario:
   - No subas imágenes de más de 2000px de ancho
   - Mantén proporción 16:9 o 4:3

## 🚀 Consejos para Mejores Resultados

1. **Iluminación**: Usa fotos bien iluminadas
2. **Ángulos**: Muestra diferentes perspectivas
3. **Orden**: Empieza con la sala, luego habitaciones, baños, etc.
4. **Calidad**: Usa fotos profesionales si es posible
5. **Cantidad**: No más de 15 imágenes para no sobrecargar

## 📋 Checklist de Imágenes

- [ ] Sala de estar
- [ ] Cocina
- [ ] Habitación principal
- [ ] Habitación secundaria
- [ ] Habitación tercera
- [ ] Baño principal
- [ ] Baño secundario
- [ ] Balcón/Terraza
- [ ] Vista desde ventanas
- [ ] Entrada del departamento
- [ ] Edificio (exterior)
- [ ] Amenidades (si aplica)

---

**¡Organiza tus fotos aquí y actualiza las rutas en el código!** 