import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cambelt from "./pages/Cambelt"
import Mot from "./pages/Mot"
import Contact from "./pages/Contact"
import Diagnostics from "./pages/Diagnostics"
import Gallery from "./pages/Gallery"
import Carbon from "./pages/Carbon"
import Legal from "./pages/Legal"
import Repair from "./pages/Repair"
import Service from "./pages/Service"
import Timingchain from "./pages/Timingchain"
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cam-belts-wet-belts-timing-chains" element={<Cambelt />} />
            <Route path="/class-4-7-mot-testing" element={<Mot />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="diagnostics" element={<Diagnostics />}/>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/hy-carbon" element={<Carbon />}/>
            <Route path="/legal-notice" element={<Legal />}/>
            <Route path="/repairs" element={<Repair />}/>
            <Route path="/servicing" element={<Service />}/>
            <Route path="/timing-chains-wet-belts" element={<Timingchain />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
