import './App.css'
import Hero from './components/Herop.jsx';
import ProvaSocial from './components/ProvaSocial.jsx';
import Beneficios from './components/Beneficios.jsx';
import Oferta from './components/Oferta.jsx';
import Faq from './components/Faq.jsx';
import CtaFinal from './components/CtaFinal.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div className="landing-page">
      <Hero className="section" />
      <ProvaSocial className="section" />
      <Beneficios className="section" />
      <Oferta className="section" />
      <Faq className="section" />
      <CtaFinal className="section" />
      <Footer />
    </div>
  )
}


export default App
