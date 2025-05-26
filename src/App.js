import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css'; // Global styles
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out-cubic',
        once: true, // Set to true if you want animations only once per page load
        mirror: false, // Set to false if you don't want animations on scroll up
    });
    // Optional: Refresh AOS on route changes if content loading affects element positions
    // AOS.refresh();
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* Handles scrolling to top on navigation */}
      <div className="App">
        <Navbar />
        <main> {/* main tag wraps page content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add other routes here e.g. <Route path="/anime/:id" element={<AnimeDetails />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;