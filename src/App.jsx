import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Marquee from './components/Marquee.jsx'

function App() {
  return (
    <div>
       <Navbar/>
       <Hero/>

       <Marquee/>

       <div style={{ height: '100vh', background: 'white' }}>
       </div>
    </div>
  )
}

export default App