import './Header.css';
import { useState } from 'react';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
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
  )
}
