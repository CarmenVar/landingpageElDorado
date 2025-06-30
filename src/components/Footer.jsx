const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🏠</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Carmen & Daniel</h3>
                <p className="text-gray-400 text-sm">Propietarios</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
             Este fue nuestro hogar soñado, donde crecimos en familia, reímos y soñamos juntos.
Hoy abrimos sus puertas con amor, para que otra familia comience aquí su propia historia.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información de Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-primary-400">📍</div>
                <span className="text-gray-400">
                  Magdalena del Mar, Lima, Perú
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-primary-400">📞</div>
                <span className="text-gray-400">
                  +5491161341921
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-primary-400">✉️</div>
                <span className="text-gray-400">
                  trishiavargas@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-primary-400">🕒</div>
                <span className="text-gray-400">
                  Lun - Sab: 9:00 - 18:00
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a 
                href="#gallery" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Galería de Fotos
              </a>
              <a 
                href="#info" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Información del Inmueble
              </a>
              <a 
                href="#contact" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contacto
              </a>
              <a 
                href="https://wa.me/51912345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Carmen y Daniel. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Política de Privacidad
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
           
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 