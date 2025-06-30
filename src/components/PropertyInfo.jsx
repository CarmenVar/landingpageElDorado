const PropertyInfo = () => {
  const features = [
    { icon: '📏', label: '86 m²', description: 'Área total' },
    { icon: '🛏️', label: '3 habitaciones', description: 'Espaciosos dormitorios' },
    { icon: '🚿', label: '2 baños', description: 'Completamente equipados' },
    { icon: '📍', label: 'Magdalena del Mar', description: 'Av. Brasil - Pershing' },
     { icon: '💲', label: 'Precio', description: '$115000 USD - S/425500' },
  ]

  const amenities = [
    'Cocina equipada',
    'Sala de estar amplia',
    'Balcón privado',
    'Estacionamiento',
    'Seguridad',
    'Área de lavandería',
    'Ascensor',
    'Número de pisos : 15',
    'Intercomunicador',
    'Sistema contra incendios : Splinker ',
    'Número de departamentos : 46 ',
    'Piso en el que se encuentra : 7',
  ]

  return (
    <section id="info" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Departamento Brasil 702
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hermoso departamento ubicado en una de las zonas más exclusivas de Magdalena del Mar, 
            con excelente conectividad y todos los servicios a la mano.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.label}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Location Info */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ubicación Privilegiada
              </h3>
              <p className="text-gray-600 mb-6">
                El departamento se encuentra en Magdalena del Mar, específicamente en la intersección 
                de la Avenida Brasil y Pershing, una zona residencial de alto nivel con excelente 
                conectividad y servicios.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">A 5 minutos del centro comercial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Cerca de parques y áreas verdes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Excelente transporte público</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Zona segura y residencial</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-2 flex flex-col items-center justify-center">
              <a
                href="https://www.google.com/maps?q=Av.+Brasil+2900,+Magdalena+del+Mar,+Peru"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full aspect-video rounded-lg overflow-hidden shadow-lg group focus:outline-none focus:ring-2 focus:ring-primary-500"
                title="Ver ubicación en Google Maps"
              >
                <iframe
                  src="https://www.google.com/maps?q=Av.+Brasil+2900,+Magdalena+del+Mar,+Peru&z=17&output=embed"
                  title="Ubicación en Google Maps"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </a>
              <div className="mt-2 text-center">
                <a
                  href="https://www.google.com/maps?q=Av.+Brasil+2900,+Magdalena+del+Mar,+Peru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 underline text-sm hover:text-primary-800"
                >
                  Ver ubicación ampliada en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Amenidades Incluidas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700 text-sm">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyInfo 