import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AcademicJourney from './components/AcadnicJourney'
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/academic-journey" element={<AcademicJourney/>}/>
     </Routes>
    </>
  )
}

export default App
