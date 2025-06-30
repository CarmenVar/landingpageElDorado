import { useState, useRef } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [zoomAnim, setZoomAnim] = useState(false)
  const touchStartX = useRef(null)
  
  // Array de imágenes del departamento - REEMPLAZA CON TUS FOTOS
  const images = [
    // Ejemplo de rutas para tus imágenes locales
    '/images/vista living x.jpg',
    '/images/Cocina 1 x .jpg',
    '/images/Depto Brasil 702/habitación 1.jpeg',
    '/images/Depto Brasil 702/WhatsApp Image 2025-03-12 at 9.46.22 PM (9).jpeg',
    '/images/Depto Brasil 702/Habitación 1 con pasillo.jpeg',
    '/images/Habitación principal X.jpg',
    '/images/baño 1 x.jpg',
    '/images/pasillo x.jpg',
    '/images/balcon 1 x.jpg',
    '/images/Depto Brasil 702/Terraza y recepción/WhatsApp Image 2025-01-14 at 1.49.08 PM.jpeg',
    '/images/Depto Brasil 702/Terraza y recepción/WhatsApp Image 2025-01-14 at 1.49.56 PM (1).jpeg',
    '/images/Depto Brasil 702/Terraza y recepción/WhatsApp Image 2025-01-14 at 1.43.45 PM (3).jpeg',
  ]
   
  // Navegación con flechas
  const goPrev = () => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const goNext = () => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  // Swipe en móvil
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = e.changedTouches[0].clientX - touchStartX.current
    if (diff > 50) goPrev()
    if (diff < -50) goNext()
    touchStartX.current = null
  }

  // Pantalla completa con zoom animado
  const openFullscreen = () => {
    setIsFullscreen(true)
    setTimeout(() => setZoomAnim(true), 10)
    document.body.style.overflow = 'hidden'
  }
  const closeFullscreen = () => {
    setZoomAnim(false)
    setTimeout(() => {
      setIsFullscreen(false)
      document.body.style.overflow = 'unset'
    }, 200)
  }
  const handleFullscreenClick = (e) => {
    // Cerrar solo si se hace click fuera de la imagen
    if (e.target.classList.contains('fullscreen-bg')) closeFullscreen()
  }
  // Navegación con teclado en fullscreen
  const handleKeyDown = (e) => {
    if (!isFullscreen) return
    if (e.key === 'ArrowLeft') goPrev()
    if (e.key === 'ArrowRight') goNext()
    if (e.key === 'Escape') closeFullscreen()
  }

  // Efecto de teclado solo cuando está abierto el modal
  if (typeof window !== 'undefined') {
    if (isFullscreen) {
      window.addEventListener('keydown', handleKeyDown)
    } else {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Galería de Imágenes
          </h2>
          <p className="text-lg text-gray-600">
            Descubre todos los detalles de este hermoso departamento
          </p>
        </div>

        {/* Carrusel principal */}
        <div className="mb-6 relative max-w-3xl mx-auto select-none">
          <div
            className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            onClick={openFullscreen}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={images[selectedImage]}
              alt={`Imagen ${selectedImage + 1} del departamento`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2070&q=80'
              }}
            />
            {/* Flecha izquierda */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-700 rounded-full p-2 shadow transition z-10"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {/* Flecha derecha */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-700 rounded-full p-2 shadow transition z-10"
              aria-label="Siguiente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
            <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"></div>
          </div>
        </div>

        {/* Miniaturas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                selectedImage === index
                  ? 'ring-4 ring-primary-500 scale-105'
                  : 'hover:scale-105'
              }`}
            >
              <img
                src={image}
                alt={`Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2070&q=80'
                }}
              />
            </button>
          ))}
        </div>

        {/* Contador de imágenes */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            {selectedImage + 1} de {images.length} imágenes
          </p>
        </div>
      </div>

      {/* Modal de pantalla completa con zoom */}
      {isFullscreen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 fullscreen-bg transition-opacity duration-200 ${zoomAnim ? 'opacity-100' : 'opacity-0'}`}
          onClick={handleFullscreenClick}
        >
          <div className={`relative max-w-5xl w-full h-full flex items-center justify-center p-4 transition-transform duration-200 ${zoomAnim ? 'scale-100' : 'scale-90'}`}>
            {/* Botón cerrar */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 z-10"
              aria-label="Cerrar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            {/* Flecha izquierda */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-700 rounded-full p-2 shadow transition z-10"
              aria-label="Anterior"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {/* Flecha derecha */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-700 rounded-full p-2 shadow transition z-10"
              aria-label="Siguiente"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
            <img
              src={images[selectedImage]}
              alt={`Imagen ${selectedImage + 1} del departamento`}
              className="max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl transition-transform duration-300"
              style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.5)' }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2070&q=80'
              }}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery 