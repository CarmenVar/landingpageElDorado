# Landing Page - Departamento Brasil 702

Una landing page moderna y responsive para promocionar un departamento en venta ubicado en Magdalena del Mar, Lima.

## 🚀 Características

- **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- **Galería de Imágenes**: Con navegación interactiva
- **Formulario de Contacto**: Con validación en tiempo real
- **Botón de WhatsApp**: Acceso directo para contacto inmediato
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Carga rápida y optimizada para Vercel

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **JavaScript ES6+** - Sintaxis moderna

## 📦 Instalación

1. **Clona o descarga el proyecto**
2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador en:** `http://localhost:5173`

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx          # Header con navegación
│   ├── Gallery.jsx         # Galería de imágenes
│   ├── PropertyInfo.jsx    # Información del inmueble
│   ├── ContactForm.jsx     # Formulario de contacto
│   ├── Footer.jsx          # Footer con información
│   └── WhatsAppButton.jsx  # Botón flotante de WhatsApp
├── App.jsx                 # Componente principal
├── main.jsx               # Punto de entrada
└── index.css              # Estilos globales
```

## ⚙️ Configuración

### Personalizar Información del Inmueble

Edita el archivo `src/components/PropertyInfo.jsx` para cambiar:
- Características del departamento
- Ubicación
- Amenidades

### Cambiar Imágenes

En `src/components/Gallery.jsx`, reemplaza las URLs de las imágenes:
```javascript
const images = [
  'URL_DE_TU_IMAGEN_1',
  'URL_DE_TU_IMAGEN_2',
  // ... más imágenes
]
```

### Configurar WhatsApp

En `src/components/WhatsAppButton.jsx`, cambia el número de teléfono:
```javascript
const phoneNumber = 'TU_NUMERO_AQUI' // Sin el +51
```

### Personalizar Información de Contacto

Actualiza la información en:
- `src/components/ContactForm.jsx` - Datos de contacto adicionales
- `src/components/Footer.jsx` - Información de la empresa

## 🚀 Despliegue en Vercel

1. **Conecta tu repositorio a Vercel**
2. **Configura las variables de entorno si es necesario**
3. **Vercel detectará automáticamente que es un proyecto Vite**
4. **El build se ejecutará automáticamente**

### Configuración de Build en Vercel

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📱 Responsive Design

La aplicación está optimizada para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Personalización de Estilos

Los estilos están organizados en:
- **Tailwind CSS**: Clases utilitarias
- **Componentes personalizados**: En `src/index.css`
- **Variables CSS**: Para colores y espaciado

### Cambiar Colores

Edita `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#TU_COLOR_AQUI',
        // ... más variantes
      }
    }
  }
}
```

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contacta a:
- **Email**: info@inmobiliaria.com
- **WhatsApp**: +51 999 999 999

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para el mercado inmobiliario peruano** 