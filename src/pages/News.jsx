import Header from "../components/Header/Header";
import './News.css';

export default function News() {
    return (
        <>
            <video style={{ width: '100%', position: 'fixed', minHeight: '100vh', objectFit: 'cover', zIndex: '-1' }} autoPlay muted loop id="background-video">
                <source src="file.mp4" type="video/mp4" />
            </video>
            <Header />
            <h2>SOON</h2>
        </>
    )
}
