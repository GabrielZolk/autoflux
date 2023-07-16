import { Link } from 'react-router-dom';
import GlassButton from '../components/GlassButton/GlassButton';
import Header from '../components/Header/Header';
import './Home.css';

export default function Home() {

  return (
    <div className="container">
      <video style={{ width: '100%', position: 'fixed', minHeight: '100vh', objectFit: 'cover', zIndex: '-1' }} autoPlay muted loop id="background-video">
        <source src="aaaaa.mp4" type="video/mp4" />
      </video>
      <Header />
      <div className='mid-content'>
        <h2>OLDSCHOOL + TECHNOLOGY + LUXURY</h2>
        <p>Meet perfection in the form of a car.</p>
        <div className='bottom-content'>
          <Link to='/exclusive'><GlassButton id='explore' className='btn-glow'>Explore</GlassButton></Link>
          <Link to='/exclusive'><GlassButton id='drive' className='btn-glow'>Test Drive</GlassButton></Link>
          <Link to='/exclusive'><GlassButton id='reserve' className='btn-glow'>Reserve</GlassButton></Link>
        </div>
      </div>
    </div>
  );
}
