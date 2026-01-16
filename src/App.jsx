import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './sections/About.jsx'
import Products from './sections/Products.jsx'

function App() {
  return (
    <div>
       <Navbar/>
       <Hero/>

       <Marquee/>

       <About/>

       <Products/>
    </div>
  )
}

export default App