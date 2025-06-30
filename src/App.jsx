import Header from './components/Header'
import Gallery from './components/Gallery'
import VideoTour from './components/VideoTour'
import PropertyInfo from './components/PropertyInfo'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Gallery />
        <VideoTour />
        <PropertyInfo />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App 