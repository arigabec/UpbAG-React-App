import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/NavBar'
import Hero from './components/Hero'
import About from "./components/About";
import Tours from './components/Tours';
import Services from './components/Services';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Tours />
    <Footer />
    </>
  )
}

export default App