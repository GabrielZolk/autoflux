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
                <h1>Entre em contato</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>

                    <label>
                        Telefone:
                        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </label>

                    <label>
                        Assunto:
                        <input type="text" value={assunto} onChange={(e) => setAssunto(e.target.value)} />
                    </label>

                    <label>
                        Mensagem:
                        <div>
                            <textarea value={texto} onChange={(e) => setTexto(e.target.value)} />
                        </div>
                    </label>

                    <GlassButton type='submit'>Submit</GlassButton>
                </form>
            </div>
        </div>
    )
}
