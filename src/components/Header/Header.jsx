import { Link } from 'react-router-dom';
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
          <Link to='/'><li>Start</li></Link>
          <Link to='/exclusive'><li>Exclusive Cars</li></Link>
          <Link to='/news'><li>News</li></Link>
          <Link to='/about'><li>About Us</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
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
