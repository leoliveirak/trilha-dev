import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './sections/About.jsx'

function App() {
  return (
    <div>
       <Navbar/>
       <Hero/>

       <Marquee/>

       <About/>
    </div>
  )
}

export default App