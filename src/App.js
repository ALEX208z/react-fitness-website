import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Navbar/>
      <Routes>
        <Route index="/" element={<Home />} />
        <Route exact path="about" element={ <About/> } />
        <Route exact path="contact" element={ <Contact/> } />
        <Route exact path="gallery" element={ <Gallery/> } />
        <Route exact path="plans" element={ <Plans/> } />
        <Route exact path="trainers" element={ <Trainers/> } />
        <Route  path="*" element={ <NotFound/> } />
      </Routes>
        <Footer/>
    </>
  );
}

export default App;
