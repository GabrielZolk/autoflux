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
          <GlassButton id='explore' className='btn-glow'>Explore</GlassButton>
          <GlassButton id='drive' className='btn-glow'>Test Drive</GlassButton>
          <GlassButton id='reserve' className='btn-glow'>Reserve</GlassButton>
        </div>
      </div>
    </div>
  );
}
