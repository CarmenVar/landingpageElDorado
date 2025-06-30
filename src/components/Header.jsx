const Header = () => {
  return (
    <header className="bg-blue-200 shadow-sm sticky top-0 z-50">
      <div className="container-custom section-padding">
        <div className="flex items-center justify-between">
          {/* Avatar - puedes subir tu foto a public/images/avatar.jpg */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-600 bg-gray-100 flex items-center justify-center">
              <img
                src="/images/avatar.jpg"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=Avatar&background=3b82f6&color=fff&size=128'
                }}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Carmen y Daniel</h1>
              <p className="text-sm text-gray-600">Propietarios</p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#gallery" className="text-gray-700 hover:text-primary-600 transition-colors">
              Galería
            </a>
            <a href="#info" className="text-gray-700 hover:text-primary-600 transition-colors">
              Información
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 