import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './sections/About.jsx'
import Products from './sections/Products.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Footer from './sections/Footer.jsx'

function App() {
  return (
    <div>
       <Navbar/>
       <Hero/>

       <Marquee/>

       <About/>

       <Products/>

       <Testimonials/>

       <Footer/>
    </div>
  )
}

export default App