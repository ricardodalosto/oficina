import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vemag from './pages/Vemag'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
   
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vemag" element={<Vemag />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App