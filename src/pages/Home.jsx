import './Home.css';
import { useState } from 'react';

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container">
      <video style={{ width: '100%', position: 'fixed', minHeight: '100vh', objectFit: 'cover', zIndex: '-1' }} autoPlay muted loop id="background-video">
        <source src="aaaaa.mp4" type="video/mp4" />
      </video>
      <header className="navbar">
        <span>AUTOFLUX</span>
        <nav className={`menu ${showMenu ? 'show' : ''}`}>
          <ul>
            <li>Start</li>
            <li>Exclusive Cars</li>
            <li>News</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
          <button>Subscribe</button>
        </nav>
        <div className='bx-menu' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </header>
      <div className='mid-content'>
        <h2>OLDSCHOOL + TECHNOLOGY + LUXURY</h2>
        <p>Meet perfection in the form of a car.</p>
        <div className='bottom-content'>
          <button id='explore' className='btn-glow'>Explore</button>
          <button id='drive' className='btn-glow'>Test Drive</button>
          <button id='reserve' className='btn-glow'>Reserve</button>
        </div>
      </div>
    </div>
  );
}
