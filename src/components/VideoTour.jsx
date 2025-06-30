import { useState } from 'react'

const VideoTour = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  // Reemplaza esta URL con tu video del recorrido
  const videoUrl = 'https://www.youtube.com/embed/fTzGijG4C-0'
  
  // URL alternativa para Vimeo
  // const videoUrl = 'https://player.vimeo.com/video/TU_VIDEO_ID_AQUI'
  
  // URL para video directo (MP4)
  // const videoUrl = '/videos/tour-departamento.mp4'

  const openVideo = () => {
    setIsVideoOpen(true)
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden'
  }

  const closeVideo = () => {
    setIsVideoOpen(false)
    // Restaurar scroll del body
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      {/* Sección de Video Tour */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recorrido Virtual
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre cada rincón de este hermoso departamento con nuestro 
              recorrido virtual en video. Una experiencia inmersiva que te 
              permitirá sentirte como si estuvieras ahí.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Thumbnail del Video */}
            <div className="relative group cursor-pointer" onClick={openVideo}>
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                {/* Thumbnail del video - puedes reemplazar con una imagen */}
                <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🏠</div>
                    <h3 className="text-2xl font-bold mb-2">Departamento Brasil 702</h3>
                    <p className="text-lg opacity-90">Recorrido Virtual Completo</p>
                  </div>
                </div>
                
                {/* Overlay con botón de play */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                  <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-l-[20px] border-l-primary-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              
              {/* Información adicional */}
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Duración:</span> 3:45 minutos
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Incluye:</span> Todas las habitaciones, baños, cocina y áreas comunes
                </p>
              </div>
            </div>

            {/* Características del Video */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🎥</div>
                <h3 className="font-semibold text-gray-900 mb-2">Video HD</h3>
                <p className="text-gray-600 text-sm">
                  Calidad profesional en alta definición
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-gray-900 mb-2">Compatible</h3>
                <p className="text-gray-600 text-sm">
                  Funciona en todos los dispositivos
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl mb-3">⏱️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Sin Interrupciones</h3>
                <p className="text-gray-600 text-sm">
                  Reproduce sin anuncios molestos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal del Video */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            {/* Botón de cerrar */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <div className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>

            {/* Contenedor del Video */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={videoUrl}
                title="Recorrido Virtual - Departamento Brasil 702"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Información del video */}
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">Departamento Brasil 702</h3>
              <p className="text-gray-300">
                Recorrido virtual completo de este hermoso departamento en Magdalena del Mar
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default VideoTour 