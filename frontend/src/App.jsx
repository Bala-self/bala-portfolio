import Portfolio from "./pages/portfolio"
import Navbar from "./collection/Navbar"
import Footer from "./collection/Footer"
import Skills from "./pages/skilles"
import Contact from "./pages/contact"
import './styles/App.css'
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={
          <>
            <Portfolio />
            <Skills />
          </>
        } />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/about" element={<Skills />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

