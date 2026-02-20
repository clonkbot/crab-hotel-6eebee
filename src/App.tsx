import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] overflow-x-hidden">
      <Navigation scrollY={scrollY} />
      <Hero />
      <Rooms />
      <Amenities />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
