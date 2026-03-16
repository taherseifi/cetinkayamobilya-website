import Navbar from "./componet/navbar";
import Footer from "./componet/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Bath from "./pages/Bath";
import Wardrobe from "./pages/Wardrobe";
import Kitchen from "./pages/Kitchen";
import Tvunit from "./pages/Tvunit";
import Door from "./pages/Door";
import Projects from "./pages/Projects";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/banyo" element={<Bath />} />
        <Route path="/gardolap" element={<Wardrobe />} />
        <Route path="/mutfak" element={<Kitchen />} />
        <Route path="/kapi" element={<Door />} />
        <Route path="/tv-unitesi" element={<Tvunit />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;