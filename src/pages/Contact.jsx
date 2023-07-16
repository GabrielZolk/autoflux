import { useState } from 'react';
import Header from "../components/Header/Header";
import './Contact.css';
import GlassButton from '../components/GlassButton/GlassButton';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [assunto, setAssunto] = useState('');
    const [texto, setTexto] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmail('');
        setTelefone('');
        setAssunto('');
        setTexto('');
    };

    return (
        <div className='ct-bg'>
            <Header />
            <div className="contato-container">
                <h1>Get in touch</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>

                    <label>
                        Phone:
                        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </label>

                    <label>
                        Subject:
                        <input type="text" value={assunto} onChange={(e) => setAssunto(e.target.value)} />
                    </label>

                    <label>
                        Message:
                        <div>
                            <textarea value={texto} onChange={(e) => setTexto(e.target.value)} />
                        </div>
                    </label>

                    <GlassButton type='submit' className='ct-button'>Submit</GlassButton>
                </form>
            </div>
        </div>
    )
}
